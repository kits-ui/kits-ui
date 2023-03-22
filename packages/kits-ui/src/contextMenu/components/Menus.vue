<template>
  <Teleport to="body">
    <transition name="menus-fade">
      <div
        v-if="open_"
        ref="menusRef"
        class="menus"
        :style="getStyleObject"
        @contextmenu="(e) => e.preventDefault()"
        @mousewheel.stop
      >
        <div class="menus_body">
          <template v-for="(item, index) in menus" :key="index">
            <template v-if="!item.hidden">
              <MenusItem
                :item="item"
                :index="index"
                :activeIndex="activeIndex"
                @menusEnter="menusEnter"
                :menusItemClass="menusItemClass"
                :hasIcon="hasIcon"
              >
                <template v-if="slots.default" #default="{ item }">
                  <slot :item="item"></slot>
                </template>
                <template v-if="!slots.default && slots.icon" #icon="{ item }">
                  <slot name="icon" :item="item"></slot>
                </template>
                <template v-if="!slots.default && slots.label" #label="{ item }">
                  <slot name="label" :item="item"></slot>
                </template>
                <template v-if="!slots.default && slots.suffix" #suffix="{ item }">
                  <slot name="suffix" :item="item"></slot>
                </template>
              </MenusItem>
            </template>
          </template>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts">
import { ref, h, defineComponent, onMounted, createApp, nextTick, PropType } from 'vue';
import Menus from './Menus.vue';
import MenusItem from './MenusItem.vue';
interface v_for_ts {
  [key: string]: any;
}
export default defineComponent({
  name: 'menus',
  components: {
    MenusItem,
  },
  computed: {
    getStyleObject(): Record<string, string> {
      return {
        ...this.menusStyle,
        top: `${this.style.top}px`,
        left: `${this.style.left}px`,
        minWidth: this.style.minWidth,
        maxWidth: this.style.maxWidth,
        zIndex: this.style.zIndex,
      };
    },
  },
  props: {
    menus: {
      type: Array as PropType<v_for_ts[]>,
      required: true,
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
      default: 3,
    },
    direction: {
      type: String,
      default: 'right',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const ctx = {} as any;
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    const _position: any =
      props.position.x && props.position.y
        ? ref(props.position)
        : ref({
            x: props.event.clientX,
            y: props.event.clientY,
            width: 0,
            height: 0,
          });
    const menusRef: any = ref(null);
    const style = ref({
      left: 0,
      top: 0,
      minWidth: `${props.minWidth}px`,
      maxWidth: props.maxWidth == 'none' ? props.maxWidth : `${props.maxWidth}px`,
      zIndex: props.zIndex,
    });
    const _direction = ref(props.direction);
    const activeIndex = ref(-1);
    const open_ = ref(props.open);
    const hasIcon = ref(false);

    function leftOpen(menusWidth) {
      style.value.left = _position.value.x - menusWidth;
      _direction.value = 'left';
      if (style.value.left < 0) {
        _direction.value = 'right';
        if (_position.value.width === 0 || _position.value.width === undefined) {
          style.value.left = 0;
        } else {
          style.value.left = _position.valuen.x + _position.value.width;
        }
      }
    }

    function rightOpen(windowWidth, menusWidth) {
      style.value.left = _position.value.x + _position.value.width;
      _direction.value = 'right';
      if (style.value.left + menusWidth > windowWidth) {
        _direction.value = 'left';
        if (_position.value.width === 0 || _position.value.width === undefined) {
          style.value.left = windowWidth - menusWidth;
        } else {
          style.value.left = _position.value.x - menusWidth;
        }
      }
    }

    onMounted(() => {
      open_.value = true;
      props.menus.forEach((menu: any) => {
        hasIcon.value = hasIcon.value || menu.icon !== undefined;
        if (hasIcon.value) {
          return;
        }
      });
      nextTick(() => {
        const menusWidth = menusRef.value.offsetWidth;
        const menusHeight = menusRef.value.offsetHeight;
        if (_direction.value === 'left') {
          leftOpen(menusWidth);
        } else {
          rightOpen(windowWidth, menusWidth);
        }
        style.value.top = _position.value.y;
        if (_position.value.y + menusHeight > windowHeight) {
          if (_position.value.height === 0 || _position.value.height === undefined) {
            style.value.top = _position.value.y - menusHeight;
          } else {
            style.value.top = windowHeight - menusHeight;
          }
        }
      });
    });

    function menusEnter(event, item, index) {
      activeIndex.value = index;
      if (item.disabled) {
        return;
      }
      if (ctx.instance) {
        if (ctx.index === index) {
          return;
        }
        ctx.instance.close.bind(ctx.instance)();
        ctx.instance = null;
        ctx.index = null;
      }
      if (!item.children) {
        return;
      }
      const menuItemClientRect = event.target.getBoundingClientRect();
      const node = h(
        Menus,
        {
          ...props,
          menus: item.children || [],
          direction: _direction.value,
          position: {
            x: menuItemClientRect.x + 3,
            y: menuItemClientRect.y - 8,
            width: menuItemClientRect.width - 2 * 3,
            height: menuItemClientRect.width,
          },
        },
        slots,
      );
      const app = createApp(node);
      ctx.instance = app.mount(document.createElement('div'));
      ctx.instance.$unmount = app.unmount;
      ctx.index = index;
      event.preventDefault();
    }
    function close() {
      open_.value = false;
      if (this && this.ctx && this.ctx.instance) {
        this.ctx.instance.close();
      }
      nextTick(() => {
        this.$unmount() && this.$unmount();
      });
    }

    return {
      open_,
      hasIcon,
      menusRef,
      style,
      close,
      menusEnter,
      ctx,
      activeIndex,
      slots,
    };
  },
});
</script>
