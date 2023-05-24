import {
  h,
  ref,
  Slot,
  Text,
  VNode,
  PropType,
  Teleport,
  Transition,
  SetupContext,
  VNodeArrayChildren,
  ComponentObjectPropsOptions,
} from 'vue';
import { LoadingIcon } from './loading.icon';
import { LoadingOptions } from './loading.types';

Loading.props = {
  modelValue: {
    type: [Boolean, Object /* 函数调用传入ref(true)时，是object */],
    required: true,
  },
  closeOnClick: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: 'loading...',
  },
  customClass: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: 'rgba(0, 0, 0, 0.38)',
  },
  color: {
    type: String,
  },
  mode: {
    type: String as PropType<LoadingOptions['mode']>,
    default: 'insert',
  },
  zIndex: {
    type: Number,
    default: 100,
  },
} as ComponentObjectPropsOptions<Required<LoadingOptions>>;
Loading.inheritAttrs = true;
Loading.emits = ['update:modelValue', 'leave'];

const rootClass = 'k-loading';
const refClass = `${rootClass}_ref`;

/**
 * loading组件
 */
export default function Loading(props: LoadingOptions, ctx: SetupContext): VNode[] | JSX.Element {
  const { slots, emit } = ctx;
  const defaultSlot = slots.default;
  const loading = ref(props.modelValue);

  const closeLoading = () => {
    if (!props.closeOnClick) return;
    loading.value = false;
    emit('update:modelValue', loading.value);
  };

  const TransitionLoading = (
    <Transition name="loading" appear mode="out-in" onLeave={() => emit('leave')}>
      {loading.value && (
        <div
          class={`${rootClass} ${props.customClass}`}
          onClick={closeLoading}
          style={{
            background: props.background,
            zIndex: props.zIndex,
            color: props.color,
          }}
        >
          <div class="loading-box">
            <div class="loading-icon">{slots.icon?.() ?? LoadingIcon}</div>
            <div class="loading-text">{slots.text?.() ?? props.text}</div>
          </div>
        </div>
      )}
    </Transition>
  );

  // 没有slot传到body下
  if (!defaultSlot) return <Teleport to="body">{TransitionLoading}</Teleport>;

  // 插入slot
  if (props.mode === 'insert') return _insertToSlot(TransitionLoading, defaultSlot);

  // 包裹slot
  return (
    <div class={refClass}>
      {defaultSlot()}
      {TransitionLoading}
    </div>
  );
}

function _cloneVNode(target: VNode, children: VNodeArrayChildren): VNode {
  const node = h(target.type as string, target.props, children);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children: _, shapeFlag: _2, ...rest } = target;
  Object.assign(node, rest);
  return node;
}

function _insertToSlot(insert: JSX.Element, slot: Slot): VNode[] {
  const res = slot();
  const firstChild = res[0];
  const children = firstChild.children;
  if (!firstChild.props) firstChild.props = {};
  firstChild.props.class = ((firstChild.props.class || '') + ' ' + refClass).trim();

  if (typeof children === 'string') {
    const _children = [h(Text, children), insert];
    return [_cloneVNode(firstChild, _children), ...res.slice(1)];
  }

  if (Array.isArray(children)) children.push(insert);

  return res;
}
