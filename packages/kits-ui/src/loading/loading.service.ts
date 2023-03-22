import { createApp, ref } from 'vue';
import Loading from './Loading';
import type { LoadingOptions } from './loading.types';

const closeSet = new Set<() => void>();

function closeAllLoading() {
  closeSet.forEach((close) => close());
  closeSet.clear();
}

/**
 * 调用函数开启loading
 */
export function showLoading(props: Partial<LoadingOptions> = {}) {
  closeAllLoading();

  const { modelValue = true } = props;
  // 可以通过外面传入的modelValue控制显隐
  const loading = ref(modelValue);

  const app = createApp(Loading, {
    ...props,
    modelValue: loading,
    'onUpdate:modelValue': (v: boolean) => (loading.value = v),
    // onLeave: () => setTimeout(() => app.unmount()),
  });
  app.mount(document.createElement('div'));

  const close = () => {
    loading.value = false;
    // closeSet.delete(close);
  };
  closeSet.add(() => {
    close();
    setTimeout(() => app.unmount());
  });

  return { close };
}
