<script lang="ts">
import { watch, h, defineComponent, createApp } from 'vue';
import Menus from './Menus.vue';

export default defineComponent({
  name: 'Vue3Menus',
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    menusStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    menusItemClass: {
      type: String,
      default: null,
    },
    event: {
      type: Object,
      default: () => {
        return {};
      },
    },
    position: {
      type: Object,
      default: () => {
        return {};
      },
    },
    minWidth: {
      type: [Number, String],
      default: 'none',
    },
    maxWidth: {
      type: [Number, String],
      default: 'none',
    },
    zIndex: {
      type: [Number, String],
      default: 2,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    let lastInstance;
    function mouseEvent() {
      emit('update:open', false);
      if (lastInstance) {
        lastInstance.close();
        lastInstance = null;
      }
    }
    watch(
      () => props.open,
      (newVal) => {
        if (newVal) {
          if (lastInstance) {
            lastInstance.close();
            lastInstance = null;
          }
          const node = h(
            Menus,
            {
              ...props,
            },
            slots,
          );
          const app = createApp(node);
          lastInstance = app.mount(document.createElement('div'));
          lastInstance.$unmount = app.unmount;
          setTimeout(() => {
            document.addEventListener('click', mouseEvent);
            document.addEventListener('contextmenu', mouseEvent);
            document.addEventListener('wheel', mouseEvent);
          }, 0);
        } else {
          document.removeEventListener('click', mouseEvent);
          document.removeEventListener('contextmenu', mouseEvent);
          document.removeEventListener('wheel', mouseEvent);
        }
      },
    );
    return {};
  },
  render() {
    return null;
  },
});
</script>
