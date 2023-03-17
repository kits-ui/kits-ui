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
export function showLoading(props: Partial<LoadingOptions & { target?: string }> = {}) {
  closeAllLoading();

  const loading = ref(props.modelValue ?? true);

  const app = createApp(Loading, {
    ...props,
    modelValue: loading,
    onLeave() {
      setTimeout(() => app.unmount());
    },
  });
  app.mount(document.createElement('div'));

  const close = () => {
    loading.value = false;
    closeSet.delete(close);
  };
  closeSet.add(close);

  return { close };
}
