import { Teleport, SetupContext, ref, Transition } from 'vue';
import { LoadingIcon } from './loading.icon';
import { LoadingOptions } from './loading.types';

const defaultOptions = {
  background: 'rgba(0, 0, 0, 0.38)',
  text: 'loading...',
  zIndex: 1,
} satisfies Partial<LoadingOptions>;
/**
 * loading组件
 */
export default function Loading(props: LoadingOptions, ctx: SetupContext): JSX.Element {
  const { slots, emit } = ctx;
  const loading = ref(props.modelValue);
  const defaultSlot = slots.default?.();

  const closeLoading = () => {
    if ([undefined, false].includes(props.clickHide)) return;
    loading.value = false;
    emit('update:modelValue', loading.value);
  };

  const transitionLoading = (
    <Transition name="loading" appear mode="out-in" onLeave={() => emit('leave')}>
      {loading.value && (
        <div
          class={'k-loading ' + (props.customClass || '')}
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

  // 有slot，用div包一层
  return (
    <div class="k-loading_ref">
      {defaultSlot}
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
] satisfies (keyof LoadingOptions)[];
Loading.emits = ['update:modelValue', 'leave'];
