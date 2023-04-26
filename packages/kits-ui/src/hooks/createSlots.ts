import { defineComponent } from 'vue';
export default ({ mountedCallFun }) => {
  return defineComponent({
    props: ['vnode'],
    mounted() {
      mountedCallFun(this.$el);
    },
    render(props: any) {
      return props.vnode;
    },
  });
};
