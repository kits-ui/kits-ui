/**
 * 批量设置style
 * @param elm 需要设置style的dom元素
 * @param json 需要设置的属性
 */
export const setStyle = (elm: any, json: any) => {
  let styleStr = '';
  for (const i in json) {
    styleStr += `${i}: ${json[i]};`;
  }
  elm.setAttribute('style', styleStr);
};
