import { Teleport, SetupContext, ref, Transition } from 'vue';
import { LoadingIcon } from './loading.icon';
import { LoadingOptions } from './loading.types';

/**
 * loading组件
 */
export default function Loading(props: LoadingOptions, ctx: SetupContext): JSX.Element {
  const options = {
    background: 'rgba(0, 0, 0, 0.38)',
    text: 'loading...',
    customClass: '',
    zIndex: 1,
    // 清洗掉undefined
    ...Object.entries(props).reduce(
      (prev, [k, v]) => (v !== undefined && (prev[k] = v), prev),
      {} as LoadingOptions,
    ),
  };

  const { slots, emit } = ctx;
  const loading = ref(props.modelValue);
  const defaultSlot = slots.default?.();

  const closeLoading = () => {
    if ([undefined, false].includes(options.clickHide)) return;
    loading.value = false;
    emit('update:modelValue', loading.value);
  };

  const transitionLoading = (
    <Transition name="loading" appear mode="out-in" onLeave={() => emit('leave')}>
      {loading.value && (
        <div
          class={'k-loading ' + options.customClass}
          onClick={closeLoading}
          style={{ background: options.background, zIndex: options.zIndex }}
        >
          <div class="loading-content">
            <div class="loading-icon">{slots.icon?.() ?? LoadingIcon}</div>
            <div class="loading-text">{slots.text?.() ?? options.text}</div>
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
