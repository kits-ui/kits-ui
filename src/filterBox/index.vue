<template>
  <div id="filterBox">
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
          <div class="row-value" ref="rowValue">
            <div class="list" ref="rowList">
              <ul class="rowValueList" ref="rowValueList">
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

const rowValueList = ref(null);
const rowValue = ref(null);
const rowList = ref(null);

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
  const arr = data.navList.filter((item) => {
    return item.id === value.id;
  });
  // 当选中列表中有当前列的已选项时
  if (arr.length > 0) {
    // 将已选择项赋值当前行的选择数组this.selectList
    data.selectList = arr[0].selectedList.map((item) => {
      return item.id;
    });
  } else {
    // 若选中列表没有当前列的已选项时,将选择数组置空
    data.selectList = [];
  }
  data.currentList = [...data.selectLi];
  resetscroll(i);
};

const open = (i) => {
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
const folded = (i) => {
  // 去除当前行的展开样式
  rowValue.value[i].classList.remove('openRow');
  // 将index清空
  data.openIndex = null;
};

// 点击收起时,将滚动到最上面
const resetscroll = (i) => {
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
const liClick = async (item, value) => {
  // num 0 单选  1多选
  await liSelected(value);
  await confirm(item, 0);
};

// 点击勾选(多选)
const liSelected = (value) => {
  // 判断当前是否已勾选
  if (data.selectList.includes(value)) {
    data.selectList = data.selectList.filter((item) => {
      return item !== value;
    });
    data.selectLi = data.selectLi.filter((item) => {
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
const organizeData = (value, num) => {
  if (data.selectList.length === 0) {
    return;
  }
  const obj = {
    id: value.id,
    name: value.name,
    selectedList: [],
  };
  data.selectList.map((item) => {
    value.childList.filter((i) => {
      if (item === i.id) {
        obj.selectedList.push(i);
      }
    });
  });
  // 判断当前是新增列表还是修改列表
  let currentIndex = null;
  const currentArr = data.navList.filter((item, i) => {
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
const confirm = (value, num) => {
  organizeData(value, num);
  // this.close()
  data.multipleIndex = '';
  filterBoxObj();
};

const filterBoxObj = () => {
  const obj = {};
  data.navList.map((item) => {
    const childIdStr = item.selectedList
      .map((iItem) => {
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
const closeNav = (value) => {
  const arr = [];
  // 删除所选navList
  data.navList = data.navList.filter((item) => {
    return item.id !== value.id;
  });
  // 清除高亮
  data.navList.map((item) => {
    item.selectedList.map((ii) => {
      arr.push(ii.id);
    });
  });
  data.selectLi = arr;
  nextTick(() => {
    filterBoxObj();
  });
};
</script>

<style scoped lang="scss">
.line:after {
  content: '';
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}

#filterBox {
  font-size: 12px;
  width: 100%;
  background-color: transparent;

  .top {
    display: flex;
    line-height: 24px;
    font-size: 14px;
    justify-content: space-between;

    .left {
      color: var(--font-color);
      padding-left: 2px;
    }

    .center {
      width: calc(100% - 150px - 120px);

      // overflow: hidden;
      .navlist {
        display: inline-block;
        width: auto;
        position: relative;
        height: 24px;
        line-height: 24px;
        margin-right: 44px;
        border: 1px solid var(--border-color);
        // border-image: tr;
        color: var(--font-color);
        margin-bottom: 10px;
        background-color: var(--zebra-bg);
        cursor: pointer;

        &:hover {
          border-color: var(--theme-hover-color);
          background: var(--zebra-bg);

          span {
            z-index: 50;
            background: var(--zebra-bg);
          }

          // border: 1px solid #1683C8;
          & > .dialog {
            display: block;
            z-index: 40;
          }
        }

        span {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 0 35px 0 10px;
          z-index: 30;

          // border-bottom: 1px solid #000;
          &:hover {
            // color: var(--theme-hover-color);
            border-bottom: 1px solid var(--zebra-bg);
          }
        }

        .dialog {
          display: none;
          position: absolute;
          left: -1px;
          top: 21px;
          width: 300px;
          background: var(--zebra-bg);
          border: 1px solid var(--theme-hover-color);
          // border-image-source: linear-gradient(to bottom, #1683c8, #082bb1);
          // border-image-slice: 1;
          z-index: 22;
          padding: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 0;
            margin: 0;
            padding-left: 20px;

            li {
              // width: 26%;
              margin-top: 0;
              text-align: left;
              margin-right: 16px;

              &:hover {
                color: var(--theme-hover-color);
              }
            }
          }

          &:hover {
            display: block;

            & + span {
              border-bottom: 1px solid var(--zebra-bg);
            }
          }
        }

        .closeNav {
          position: absolute;
          right: -25px;
          top: -1px;
          width: 24px;
          height: 24px;
          background-color: var(--theme-hover-color);

          &::after {
            position: absolute;
            display: inline-block;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            content: '';
            width: 10px;
            height: 1px;
            background-color: #fafafa;
          }

          &:hover {
            & + .dialog {
              display: none;
            }
          }
        }
      }
    }

    .right {
      position: relative;
      width: 60px;

      button {
        position: absolute;
        top: -10px;
        width: inherit;
        height: 36px;
        float: left;
        border: none;
        color: var(--font-color);
        font-size: 14px;

        &:hover {
          color: var(--theme-hover-color);
          border: none;
        }

        span {
          display: inline-block;
          width: 100%;
          // padding-right: 12px;
        }
      }
    }

    padding-top: 10px;
  }

  .content {
    padding: 5px 2px;
  }

  .line {
    border: 1px solid var(--border-color);
    border-bottom: none;

    &:last-child {
      border: 1px solid var(--border-color);
    }
  }

  .row {
    position: relative;
    width: 100%;
    line-height: 40px;
    display: flex;
    justify-content: space-between;

    .row-key {
      width: 100px;
      padding-left: 20px;
      white-space: nowrap;
      overflow: hidden;
      background-color: var(--zebra-bg);
      color: var(--font-color);
    }

    .row-value {
      flex: 1;
      // height: 40px;
      min-height: 40px;
      max-height: 80px;
      background-color: transparent;
      // max-height: 150px;
      overflow-y: hidden;
      zoom: 1;

      .list {
        height: 100%;
        overflow-y: visible;
      }

      .btn {
        display: none;
      }

      ul {
        // height: 100%;
        padding: 0;
        margin: 0;
        padding-left: 20px;

        &:after {
          content: '';
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
        }

        li {
          // height: 80%;
          margin-top: 0;
          float: left;
          margin-right: 50px;
          text-align: left;
          cursor: pointer;
          color: var(--font-color);

          &:hover {
            color: var(--theme-hover-color);
          }
        }

        .clickSelected {
          color: var(--theme-hover-color);
        }
      }
    }

    .openRow {
      height: auto;
      max-height: 150px;

      .list {
        overflow-y: scroll;
      }
    }

    .row-btn {
      width: 210px;
      position: relative;
      background-color: var(--zebra-bg);
      padding-top: 8px;

      button {
        position: absolute;
        right: 30px;
        height: 25px;
        width: 70px;
        transition: all 0.3s;
      }

      .open {
        // padding: 0 20px 0 0;
        left: 30px;
      }

      .folded {
        // padding: 0 20px 0 0;
        left: 30px;
      }
    }
  }

  .multiple {
    .row-value {
      position: relative;
      padding-bottom: 45px;
      height: auto;
      max-height: 150px;

      .list {
        padding-bottom: 5px;
        overflow-y: auto;

        &:after {
          content: '';
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
        }
      }

      .btn {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 35px;

        // margin: auto;
        .confirm {
          background-color: transparent;
          color: var(--font-color);
          border: 1px solid #97abea;
          cursor: default;
          opacity: 0.2;
          pointer-events: none;
        }

        .cancel {
          background: transparent;
        }

        button {
          height: 25px;
          width: 70px;

          &:first-child {
            margin-right: 10px;
          }

          &:last-child {
            margin-left: 10px;
          }
        }
      }

      ul li {
        position: relative;
        padding-left: 18px;
        margin-right: 32px;
        cursor: pointer;
        user-select: none;
        color: var(--font-color);

        i {
          position: absolute;
          left: 0;
          top: 15px;
          display: inline-block;
          height: 12px;
          width: 12px;
          border: 1px solid var(--theme-color);
          font-size: 0;
        }

        .selected {
          border-color: var(--theme-color);
          background-color: var(--theme-color);
        }
      }
    }

    .row-btn {
      width: 210px;

      button {
        display: none;
      }
    }
  }
}

ul {
  list-style: none;
  user-select: none;
}

button {
  border: 1px solid var(--theme-color);
  color: var(--font-color);
  font-size: 12px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--theme-hover-color);
    color: var(--theme-hover-color);
  }
}

.showBtn {
  background-color: transparent;
  color: var(--font-color);
  pointer-events: auto;
  transition: all 0.5s;

  &:hover {
    background-color: var(--theme-hover-color);
    color: #fff;
  }
}
</style>
