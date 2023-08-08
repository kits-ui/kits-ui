import { reactive } from 'vue';

export const setBodyPaddingRight = (value: boolean) => {
  const oldType = reactive<any>({
    overflow: '',
    paddingRight: '',
  });

  if (value) {
    // 储存当前滚动条状态
    oldType.overflow = document.body.style.overflow;
    oldType.paddingRight = document.body.style.paddingRight;
    // 正则取数字 计算最新paddingRight
    document.body.style.paddingRight = `${
      (document.body.style.paddingRight
        ? +document.body.style.paddingRight.match(/\d+(\.\d+)?(?=%|px|vw|vh|rem|em)/g)[0]
        : 0) +
      (window.innerWidth - document.documentElement.offsetWidth)
    }px`;
    // document.documentElement.style.marginRight = `${
    //   window.innerWidth - document.documentElement.offsetWidth
    // }px`;
    document.body.style.overflow = 'hidden';
  } else {
    setTimeout(() => {
      document.body.style.overflow = oldType.overflow;
      document.body.style.paddingRight = oldType.paddingRight;
    }, 300);
  }
};
