<!--
 * @Author: jx
 * @LastEditors: jx
 * @Date: 2023-02-07 09:54:09
 * @LastEditTime: 2023-02-24 13:13:46
 * @Description: 验证码
 * @FilePath: \useless-ui\src\authCode\index.vue
-->
<template>
  <div
    class="u-authcode"
    :style="{
      height: height + 'px',
      width: width + 'px',
    }"
    @click="createCodeHandle"
  >
    <canvas ref="authCode" class="u-authcode__content" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'UAuthCode',
  props: {
    height: {
      default: 36,
      type: [Number],
    },
    width: {
      default: 90,
      type: [Number],
    },
    // 验证码数量
    count: {
      default: 4,
      type: Number,
    },
    //  自定义验证码，传入的话就不用前端随机生产code
    codes: {
      default: () => [],
      type: Array,
    },
  },
  emits: ['input', 'update:code'],
  data() {
    return {};
  },
  computed: {
    // 控制popup显示隐藏
    value: {
      get() {
        return this.$attrs.value;
      },
      set(val) {
        // console.log({ val });
        this.$emit('update:code', val);
      },
    },
  },
  mounted() {
    this.createCodeHandle();
  },
  methods: {
    createCodeHandle() {
      this.value = this.createCode(this.count);
    },
    // 生成并渲染出验证码图形
    createCode(showNum = 4) {
      const codes = this.codes;
      // 得到随机的颜色值
      const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
      };
      const canvas = this.$refs.authCode;
      const { width, height } = canvas.getBoundingClientRect();
      const canvasWidth = width;
      const canvasHeight = height;
      // 获取到canvas的对象，演员
      const context = canvas.getContext('2d'); // 获取到canvas画图的环境，演员表演的舞台
      // 需要重新设置width和height，不然画内容的时候width和height不会继承的
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const sCode =
        'a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0';
      const aCode = sCode.split(',');

      const aLength = aCode.length; // 获取到数组的长度
      let authCode = ''; // 随机号码
      // 这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
      for (let i = 0; i < showNum; i++) {
        let txt = '';
        if (codes.length) {
          txt = codes[i];
        } else {
          const j = Math.floor(Math.random() * aLength); // 获取到随机的索引值
          txt = aCode[j]; // 得到随机的一个内容
        }
        // let deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        const deg = Math.random() - 0.5; // 产生一个随机弧度
        authCode += txt;
        const x = 10 + i * 20; // 文字在canvas上的x坐标
        const y = 20 + Math.random() * 8; // 文字在canvas上的y坐标
        context.font = 'bold 23px 微软雅黑';
        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
      }
      // 验证码上显示线条
      for (let i = 0; i <= 5; i++) {
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvasWidth, Math.random() * canvasHeight);
        context.lineTo(Math.random() * canvasWidth, Math.random() * canvasHeight);
        context.stroke();
      }
      // 验证码上显示小点
      for (let i = 0; i <= 30; i++) {
        context.strokeStyle = randomColor();
        context.beginPath();
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
      }
      return authCode;
    },
  },
};
</script>

<style lang="scss" scoped>
.u-authcode {
  height: 50px;
  width: 130px;
  cursor: pointer;
  .u-authcode__content {
    height: 100%;
    width: 100%;
  }
}
</style>
