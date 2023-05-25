import { h, ref, render } from 'vue';
import Loading from './Loading';
import type { LoadingOptions } from './loading.types';

const defaultContainer = globalThis.document?.createElement('div');

/**
 * 调用函数开启loading
 *
 * @param props Loading组件的props
 * @param container 使用默认容器是单例模式；添加container后不会被后面的loading覆盖
 */
export function showLoading(props: Partial<LoadingOptions> = {}, container = defaultContainer) {
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
    // 移除
    // render(null, container);
  };

  return { close };
}
