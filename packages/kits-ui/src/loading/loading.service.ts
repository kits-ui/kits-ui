import { h, ref, render } from 'vue';
import Loading from './Loading';
import type { LoadingOptions } from './loading.types';

const closeSet = new Set<() => void>();
const container = document.createElement('div');

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

  const app = h(Loading, {
    ...props,
    modelValue: loading,
    'onUpdate:modelValue': (v: boolean) => (loading.value = v),
  });
  render(app, container);

  const close = () => {
    loading.value = false;
    // closeSet.delete(close);
  };
  closeSet.add(() => {
    close();
    setTimeout(() => render(null, container));
  });

  return { close };
}
