<template>
  <div
    ref="input"
    id="k-comment-input"
    :contenteditable="true"
    @paste.prevent="chatPaste($event)"
    @keydown="keyDown($event)"
    style="width: 100%; max-height: 500px"
    :spellcheck="false"
    @blur="blur"
  ></div>
  <div class="k-comment-btn">
    <div class="left">表情</div>
    <k-button @click="beforeSubmit">提 交</k-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const textarea: any = ref('');
// const imgShowWidth: any = ref(50);
// const imgShowHeight: any = ref(50);
const dataUrl: any = ref('');
const textList: any = ref([]);
const keyList: any = ref([]);
const input: any = ref(null);
const props = defineProps({
  uuid: String,
  clean: Boolean,
});
const emit = defineEmits(['textClean', 'submit']);

onMounted(() => {
  textarea.value = document.getElementById('input');
});
// watch(
// () => store.getIsDisplay,
// (newVal: any) => {
//   if (newVal) {
//     console.log(store.getCurrentEmoji);
//     againFocus();
//     // const range = selObj.getRangeAt(0)
//     // 取消insert node 后的选中状态，将光标恢复到 insert node 后面
//     // range.collapse(false)
//     // selObj.collapseToEnd()
//   }
// },
// );

// watch(
//   () => store.getCleanMessage,
//   (newVal: any) => {
//     if (newVal) {
//       textarea.value.innerHTML = '';
//       emit('textClean', false);
//     }
//   },
// );
watch(
  () => props.clean,
  (newVal: any) => {
    if (newVal) {
      textarea.value.innerHTML = '';
      emit('textClean', false);
    }
  },
);

const chatPaste = async (event: any) => {
  const pasteRes = pasteText(event.clipboardData);
  if (pasteRes) {
    return;
  } else {
    await pasteImageFile(event.clipboardData);
  }
};

// const againFocus = async () => {
//   await input.value.focus();
//   await restoreSelection(store.getRange);
//   console.log(store.getCurrentEmoji);
//   const textNode = document.createTextNode(`[${store.getCurrentEmoji.value}]`);
//   cursorInsert(textNode);
//   // 将emoji变为图片显示在输入框中
//   // let oImage = await addImg();
//   // cursorInsert(oImage);
//   store.setIsDisplay(false);
// };
// 点击emoji添加img
// const addImg = () => {
//   const oImage = new Image(24, 24);
//   oImage.style.display = "inline-block";
//   let src = `${this.getCurrentEmoji.id}.png`;
//   oImage.src = require("../assets/emoji/" + src);
//   oImage.setAttribute("data-title", `[${this.getCurrentEmoji.value}]`);
//   oImage.dataTitle = `[${this.getCurrentEmoji.value}]`;
//   return oImage;
// }

const keyDown = (event: any) => {
  // const childNodes = event.target.childNodes
  // this.emitChange(childNodes)
  if (event.keyCode === 13) {
    event.cancelBubble = true;
    event.preventDefault();
    event.stopPropagation();
    if (event.keyCode === 13) {
      if (event.shiftKey) {
        const oBr = document.createElement('br');
        cursorInsert(oBr);
      } else {
        beforeSubmit();
      }
      // this.keyList = []
      console.log(keyList.value.join());
    }
  }
};

// 去格式粘贴 文本
const pasteText = (clipboardData: any) => {
  console.log(clipboardData);
  const text = clipboardData.getData('text/plain');
  if (text) {
    const textNode = document.createTextNode(text);
    cursorInsert(textNode);
    return true;
  }
  return false;
};

// 粘贴图片
const pasteImageFile = async (clipboardData: any) => {
  const img = getPasteImageFile(clipboardData.files);
  if (!img) return;
  let reader = new FileReader();
  reader.readAsDataURL(img); // 解析成base64格式
  reader.onload = async () => {
    dataUrl.value = reader.result; // 解析后的数据，如下图
    const oImage = await getImageObject(dataUrl.value, 150);
    console.log(oImage);
    cursorInsert(oImage);
  };
};

const getImageObject = (dataUrl: any, showWidth: any) => {
  const oImage = new Image(showWidth);
  oImage.src = dataUrl;
  oImage.className = 'k-comment-image';
  console.log(oImage, 'oImage');
  return oImage;
};

const getPasteImageFile = (clipboardDataFiles: any) => {
  if (!clipboardDataFiles.length) {
    console.log('没有要粘贴的文件');
    return null;
  }
  // 剪切版中选择的(用户第一个点的在尾)第一张图片
  const clipboardDataFileList = Array.from(clipboardDataFiles || []);
  let firstSelectedImage = null;
  clipboardDataFileList.forEach((file: any) => {
    if (!file.type.match(/image\//i)) {
      return;
    }
    firstSelectedImage = file;
  });
  /**
   * 这里的 firstSelectedFile 对象就是和 <input type="file" /> onchange 时 一样的 文件对象
   * */
  return firstSelectedImage;
};

// 光标处插入节点
const cursorInsert = async (node: any) => {
  // 获取光标范围
  const selObj: any = window.getSelection();
  console.log(selObj, selObj.toString(), selObj.getRangeAt(0), 89999);
  const range = selObj.getRangeAt(0);
  // 光标处插入节点
  range.insertNode(node);
  // 取消insert node 后的选中状态，将光标恢复到 insert node 后面
  // range.collapse(false)
  selObj.collapseToEnd();
};

const beforeSubmit = () => {
  let list = [...textarea.value.childNodes];
  let lastMsg1: any = '';
  let lastMsg2: any = '';
  console.log(list);
  textList.value = [];
  list.map((item) => {
    // 判断当前节点是否是文本节点
    if (item.nodeType === 3 && item.nodeValue) {
      // 再获取到textList的最后一个节点来判断
      lastMsg1 = textList.value[textList.value.length - 1];
      // 如果是text,则将当前文本节点内容拼接上去,否则就在textList新增一个元素
      if (lastMsg1?.type === 'text') {
        console.log(lastMsg1);
        lastMsg1.text += item.nodeValue;
      } else {
        textList.value.push({
          type: 'text',
          text: item.nodeValue,
          uuid: props.uuid,
          toId: '',
          nodeType: item.nodeType,
        });
      }
    } else if (item.nodeType === 1) {
      // 如果节点为元素节点,判断该节点为回车换行还是图片
      if (item.nodeName === 'BR') {
        // 处理回车
        lastMsg2 = textList.value[textList.value.length - 1];
        if (lastMsg2?.type === 'text') {
          lastMsg2.text += '</br>';
        }
      } else if (item.nodeName === 'IMG') {
        // 当前节点为元素节点IMG时判断是否具有自定义属性,如果有则转换为文本进行拼接
        if (item.getAttribute('data-title')) {
          lastMsg1 = textList.value[textList.value.length - 1];
          if (lastMsg1?.type === 'text') {
            console.log(lastMsg1);
            lastMsg1.text += item.getAttribute('data-title');
          } else {
            textList.value.push({
              type: 'text',
              text: item.getAttribute('data-title'),
              uuid: props.uuid,
              toId: '',
              nodeType: 3,
            });
          }
        } else {
          // 如果没有自定义属性则进行添加
          textList.value.push({
            type: 'image',
            nodeType: item.nodeType,
            url: item.src,
            uuid: props.uuid,
            toId: '',
            style: { width: item.clientWidth, height: item.clientHeight },
          });
        }
      }
    }
  });
  emit('submit', textList.value);
};

// 当聊天输入框失去焦点时保存焦点信息
const blur = async () => {
  let range = await saveSelection();
  console.log(range, 21111);
  // store.setRange(range);
};

// 保存焦点位置
const saveSelection = () => {
  console.log(window.getSelection());
  if (window.getSelection) {
    let sel: any = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  }
  //  else if (document.selection && document.selection.createRange) {
  //   console.log(223333);
  //   return document.selection.createRange();
  // }
  return null;
};

// 恢复焦点位置
// const restoreSelection = (range: any) => {
//   console.log(range, 866666);
//   if (range) {
//     if (window.getSelection) {
//       let sel: any = window.getSelection();
//       sel.removeAllRanges();
//       sel.addRange(range);
//     }
//     //  else if (document.selection && range.select) {
//     //   debugger;
//     //   range.select();
//     // }
//   }
// };
</script>
