import { Teleport, SetupContext, ref, Transition, h, VNodeArrayChildren, Text, Slot } from 'vue';
import { LoadingIcon } from './loading.icon';
import { LoadingOptions } from './loading.types';

const defaultOptions = {
  background: 'rgba(0, 0, 0, 0.38)',
  text: 'loading...',
  zIndex: 1,
} satisfies Partial<LoadingOptions>;

const rootClass = 'k-loading';
const refClass = `${rootClass}_ref`;

const insertToSlot = (slot: Slot, insert: JSX.Element) => () => {
  const res = slot();
  const firstChild = res[0];
  firstChild.props.class = ((firstChild.props.class || '') + ' ' + refClass).trim();

  if (typeof firstChild.children === 'string') {
    const newFirstChild = h(firstChild.type as string, firstChild.props, [
      h(Text, firstChild.children),
      h(insert),
    ]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children: _, shapeFlag: _2, ...rest } = firstChild;
    Object.assign(newFirstChild, rest);
    return [newFirstChild, ...res.slice(1)];
  }

  (firstChild.children as VNodeArrayChildren).push(h(insert));
  return res;
};

/**
 * loading组件
 */
export default function Loading(props: LoadingOptions, ctx: SetupContext): JSX.Element {
  const { slots, emit } = ctx;
  const loading = ref(props.modelValue);
  const defaultSlot = slots.default;

  const closeLoading = () => {
    if ([undefined, false].includes(props.clickHide)) return;
    loading.value = false;
    emit('update:modelValue', loading.value);
  };

  const transitionLoading = (
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
          <div class="loading-content">
            <div class="loading-icon">{slots.icon?.() ?? LoadingIcon}</div>
            <div class="loading-text">{slots.text?.() ?? props.text ?? defaultOptions.text}</div>
          </div>
        </div>
      )}
    </Transition>
  );

  // 没有slot转到body下
  if (!defaultSlot) return <Teleport to="body">{transitionLoading}</Teleport>;

  // 插入slot
  if (!props.mode || props.mode === 'insert') {
    return h(insertToSlot(defaultSlot, transitionLoading));
  }

  // 包裹slot
  return (
    <div class={refClass}>
      {defaultSlot()}
      {transitionLoading}
    </div>
  );
}

Loading.inheritAttrs = true;
Loading.props = [
  'modelValue',
  'clickHide',
  'text',
  'customClass',
  'background',
  'mode',
] satisfies (keyof LoadingOptions)[];
Loading.emits = ['update:modelValue', 'leave'];
