<template>
  <div class="k-filter-box">
    <section class="top">
      <div class="left">标签筛选 ></div>
      <div class="center">
        <div>
          <div v-for="item in data.navList" :key="item.id" class="navlist">
            <div class="closeNav" @click="closeNav(item)"></div>
            <div class="dialog">
              <ul>
                <li v-for="iItem in item.selectedList" :key="iItem.id" :title="iItem.title">
                  {{ iItem.name }}
                </li>
              </ul>
            </div>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <button :class="data.currentType ? 'btnFold' : 'btnOpen'" @click="isFold">
          <span>折叠</span>
        </button>
      </div>
    </section>
    <section v-if="data.currentType">
      <div style="border: none; border-top: 1px solid #ebeef5"></div>
    </section>
    <section v-else class="content">
      <div
        v-for="(item, i) in data.filterBoxData"
        v-show="item.childList.length > 0"
        :key="item.name"
        class="line"
      >
        <div class="row" :class="data.multipleIndex === i ? 'multiple' : ''">
          <div class="row-key">{{ item.name }}</div>
          <div ref="rowValue" class="row-value">
            <div ref="rowList" class="list">
              <ul ref="rowValueList" class="rowValueList">
                <li
                  v-for="iItem in item.childList"
                  :key="iItem.id"
                  :title="iItem.title"
                  :class="data.selectLi.includes(iItem.id) ? 'clickSelected' : ''"
                  @click="data.multipleIndex === i ? liSelected(iItem.id) : liClick(item, iItem.id)"
                >
                  <i :class="data.selectList.includes(iItem.id) === true ? 'selected' : ''"></i>
                  {{ iItem.name }}
                </li>
              </ul>
              <div class="btn">
                <button
                  :class="data.selectList.length !== 0 ? 'showBtn' : 'confirm'"
                  @click="confirm(item, null)"
                >
                  确 定
                </button>
                <button class="cancel" @click="close">取 消</button>
              </div>
            </div>
          </div>
          <div v-if="item.childList.length > 0" class="row-btn">
            <template v-if="data.isOpenList.includes(i)">
              <button v-if="data.openIndex !== i" class="open" @click="open(i)">展 开</button>
              <button v-else class="folded" @click="folded(i)">收 起</button>
            </template>
            <button @click="rowBtn(item, i)">多 选</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue';

const rowValueList = ref<any>([]);
const rowValue = ref();
const rowList = ref<any>(null);

const props = defineProps({
  isClean: {
    type: Boolean,
    default: false,
  },
  filterData: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['onSelectData']);

const data = reactive<any>({
  currentList: [],
  currentType: false,
  isOpenList: [],
  openIndex: null,
  multipleIndex: '',
  selectList: [],
  selectLi: [], // 当前选择的li数组
  navList: [],
  filterBoxData: [],
});

onMounted(() => {
  console.log(props.isClean, 33333);
  console.log(props.filterData, 55555);
  init();
});

const init = async () => {
  await getAllQueryTags();
  const arr = [];
  for (let i = 0; i < rowValueList.value.length; i++) {
    if (rowValueList.value[i].clientHeight > 85) {
      arr.push(i);
    }
  }
  data.isOpenList = arr;
};

const getAllQueryTags = () => {
  data.filterBoxData = props.filterData;
};

// 右侧多选按钮
const rowBtn = (value: any, i: number) => {
  // 赋值当前触发行的index 改变样式
  data.multipleIndex = i;
  // 从已选择的列表中获取当前行中的选中项 -----回显
  const arr = data.navList.filter((item: any) => {
    return item.id === value.id;
  });
  // 当选中列表中有当前列的已选项时
  if (arr.length > 0) {
    // 将已选择项赋值当前行的选择数组this.selectList
    data.selectList = arr[0].selectedList.map((item: any) => {
      return item.id;
    });
  } else {
    // 若选中列表没有当前列的已选项时,将选择数组置空
    data.selectList = [];
  }
  data.currentList = [...data.selectLi];
  resetscroll(i);
};

const open = (i: any) => {
  // 赋值当前触发行的index 改变样式
  // 先将非当前列的展开样式变为收起,一次只能展开一行 dom元素数组为伪数组因此无法使用map filter
  for (let ii = 0; ii < rowValue.value.length; ii++) {
    if (ii !== i) {
      // 判断遍历的rowValue是否有展开的样式openRow
      if (rowValue.value[ii].classList.contains('openRow')) {
        rowValue.value[ii].classList.remove('openRow');
      }
    }
  }
  // 对当前点击的一行进行样式修改
  rowValue.value[i].classList.add('openRow');
  // 存储当前行的index给到按钮,来控制展开与收起
  data.openIndex = i;
  // 展开的时候将之前的滚动高度置为0
  resetscroll(i);
};

// 收起
const folded = (i: any) => {
  // 去除当前行的展开样式
  rowValue.value[i].classList.remove('openRow');
  // 将index清空
  data.openIndex = null;
};

// 点击收起时,将滚动到最上面
const resetscroll = (i: any) => {
  nextTick(() => {
    rowList.value[i].scrollTop = 0;
  });
};

// 取消按钮
const close = () => {
  data.selectLi = [...data.currentList];
  data.selectList = [];
  data.multipleIndex = '';
};

// 单选
const liClick = async (item: any, value: any) => {
  // num 0 单选  1多选
  await liSelected(value);
  await confirm(item, 0);
};

// 点击勾选(多选)
const liSelected = (value: any) => {
  // 判断当前是否已勾选
  if (data.selectList.includes(value)) {
    data.selectList = data.selectList.filter((item: any) => {
      return item !== value;
    });
    data.selectLi = data.selectLi.filter((item: any) => {
      return item !== value;
    });
  } else {
    // 当前所选的li高亮的数组
    data.selectLi.push(value);
    // 当前多选的li
    data.selectList.push(value);
  }
};

// 数据整理
const organizeData = (value: any, num: any) => {
  if (data.selectList.length === 0) {
    return;
  }
  const obj: any = {
    id: value.id,
    name: value.name,
    selectedList: [],
  };
  data.selectList.map((item: any) => {
    value.childList.filter((i: any) => {
      if (item === i.id) {
        obj.selectedList.push(i);
      }
    });
  });
  // 判断当前是新增列表还是修改列表
  let currentIndex: any = null;
  const currentArr = data.navList.filter((item: any, i: any) => {
    if (item.id === value.id) {
      currentIndex = i;
      return item;
    }
  });
  // 如果是修改 则去重后重新赋值
  if (currentArr.length > 0) {
    if (num === 0) {
      data.navList[currentIndex].selectedList.push(...obj.selectedList);
    } else {
      data.navList[currentIndex].selectedList = obj.selectedList;
    }
    const arr1 = Array.from(new Set(data.navList[currentIndex].selectedList));
    data.navList[currentIndex].selectedList = arr1;
  } else {
    // 如果是新增则push
    data.navList.push(obj);
  }
  data.selectList = [];
};

// 多选确定
const confirm = (value: any, num: any) => {
  organizeData(value, num);
  // this.close()
  data.multipleIndex = '';
  filterBoxObj();
};

const filterBoxObj = () => {
  const obj: any = {};
  data.navList.map((item: any) => {
    const childIdStr = item.selectedList
      .map((iItem: any) => {
        return iItem.id;
      })
      .join(',');
    obj[item.name] = childIdStr;
  });
  emit('onSelectData', obj);
};

const isFold = () => {
  data.currentType = !data.currentType;
};

// 删除所选大类
const closeNav = (value: any) => {
  const arr: any = [];
  // 删除所选navList
  data.navList = data.navList.filter((item: any) => {
    return item.id !== value.id;
  });
  // 清除高亮
  data.navList.map((item: any) => {
    item.selectedList.map((ii: any) => {
      arr.push(ii.id);
    });
  });
  data.selectLi = arr;
  nextTick(() => {
    filterBoxObj();
  });
};
</script>
