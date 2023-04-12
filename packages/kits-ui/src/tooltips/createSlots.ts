import { defineComponent } from 'vue';
type CallFun = (vnodeEl: HTMLElement) => void;
type Funs = Record<'mountedCallFun' | 'updatedCallFun' | 'unmountedCallFun', CallFun>;
export default ({ mountedCallFun }: Funs) => {
  return defineComponent({
    props: ['vnode'],
    setup(props, ctx) {
      console.log(props, ctx);
    },
    mounted() {
      mountedCallFun(this.$el);
    },
    render(props: any, ctx: any) {
      console.log(props, ctx);
      return props.vnode;
    },
  });
};
