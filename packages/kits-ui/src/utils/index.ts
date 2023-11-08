/**
 * 批量设置style
 * @param elm 需要设置style的dom元素
 * @param json 需要设置的属性
 */
export const setStyle = (elm: any, json: any) => {
  if (Array.isArray(elm)) {
    for (let i = 0; i < elm.length; i++) {
      for (const item in json) {
        elm[i].style[item] = json[item];
      }
    }
  } else {
    for (const i in json) {
      elm.style[i] = json[i];
    }
  }
};

let idNum = 1;
export const setIdNum = () => {
  idNum++;
  return idNum;
};
