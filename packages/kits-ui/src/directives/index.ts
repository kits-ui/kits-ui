import { DirectiveBinding } from 'vue';
interface El extends HTMLTextAreaElement {
  $value?: string;
  handler: (this: El, ev: MouseEvent) => any;
}

// 复制
const copy = {
  created(el: El, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示。可根据项目UI仔细设计
        console.log('无复制内容');
        return;
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea');
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = true;
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value;
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      const result = document.execCommand('Copy');
      if (result) {
        console.log('复制成功'); // 可根据项目UI仔细设计
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler);
  },
  // 当传进来的值更新的时候触发
  updated(el: El, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unmounted(el: El) {
    el.removeEventListener('click', el.handler);
  },
};
// 长按
const longpress = {
  created: function (el: HTMLElement, binding: DirectiveBinding) {
    // console.log('>>>>>>>>>>>>>>>>>>>绑定', binding);
    if (typeof binding.value !== 'function') {
      throw new Error('callback must be a function');
    }
    // 定义变量
    let pressTimer = null;
    // 创建计时器（ 2秒后执行函数 ）
    const start = (e: MouseEvent) => {
      if (e.type === 'click' && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler(e);
        }, 1200);
      }
    };
    // 取消计时器
    const cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e: MouseEvent) => {
      binding.value(e);
    };
    // 添加事件监听器
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start);
    // 取消计时器
    el.addEventListener('click', cancel);
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
  },
  // 当传进来的值更新的时候触发
  updated(el: El, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unmounted(el: El) {
    el.removeEventListener('click', el.handler);
  },
};
// 防抖
const debounce = {
  mounted: function (el: El, binding: DirectiveBinding) {
    let stopTime: any;
    el.addEventListener(binding.arg, (e) => {
      // binding.arg事件类型
      clearTimeout(stopTime);
      stopTime = setTimeout(binding.value, 300, e);
    });
  },
};

// 自定义指令
const directives = {
  copy,
  longpress,
  debounce,
};

export default directives;
