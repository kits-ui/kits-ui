import {
  h,
  ref,
  Slot,
  Text,
  VNode,
  Teleport,
  Transition,
  SetupContext,
  VNodeArrayChildren,
} from 'vue';
import { LoadingIcon } from './loading.icon';
import { LoadingOptions } from './loading.types';

const _cloneVNode = (target: VNode, children: VNodeArrayChildren) => {
  const node = h(target.type as string, target.props, children);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children: _, shapeFlag: _2, ...rest } = target;
  Object.assign(node, rest);
  return node;
};

const _insertToSlot = (insert: JSX.Element, slot: Slot): VNode[] => {
  const res = slot();
  const firstChild = res[0];
  const children = firstChild.children;
  if (!firstChild.props) firstChild.props = {};
  firstChild.props.class = ((firstChild.props.class || '') + ' ' + refClass).trim();

  if (typeof children === 'string') {
    const _children = [h(Text, children), h(insert)];
    return [_cloneVNode(firstChild, _children), ...res.slice(1)];
  }

  if (Array.isArray(children)) children.push(h(insert));

  return res;
};

const rootClass = 'k-loading';
const refClass = `${rootClass}_ref`;
const defaultOptions = {
  background: 'rgba(0, 0, 0, 0.38)',
  text: 'loading...',
  zIndex: 100,
} satisfies Partial<LoadingOptions>;

/**
 * loading组件
 */
export default function Loading(props: LoadingOptions, ctx: SetupContext): VNode[] | JSX.Element {
  const { slots, emit } = ctx;
  const loading = ref(props.modelValue);
  const defaultSlot = slots.default;

  const closeLoading = () => {
    if ([undefined, false].includes(props.closeOnClick)) return;
    loading.value = false;
    emit('update:modelValue', loading.value);
  };

  const TransitionLoading = (
    <Transition name="loading" appear mode="out-in" onLeave={() => emit('leave')}>
      {loading.value && (
        <div
          class={`${rootClass} ${props.customClass || ''}`}
          onClick={closeLoading}
          style={{
            background: props.background ?? defaultOptions.background,
            zIndex: props.zIndex ?? defaultOptions.zIndex,
          }}
        >
          <div class="loading-box">
            <div class="loading-icon">{slots.icon?.() ?? LoadingIcon}</div>
            <div class="loading-text">{slots.text?.() ?? props.text ?? defaultOptions.text}</div>
          </div>
        </div>
      )}
    </Transition>
  );

  // 没有slot传到body下
  if (!defaultSlot) return <Teleport to="body">{TransitionLoading}</Teleport>;

  // 插入slot
  if (!props.mode || props.mode === 'insert') return _insertToSlot(TransitionLoading, defaultSlot);

  // 包裹slot
  return (
    <div class={refClass}>
      {defaultSlot()}
      {TransitionLoading}
    </div>
  );
}

Loading.props = [
  'modelValue',
  'closeOnClick',
  'text',
  'customClass',
  'background',
  'mode',
] satisfies (keyof LoadingOptions)[];
Loading.inheritAttrs = true;
Loading.emits = ['update:modelValue', 'leave'];
