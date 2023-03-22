import type { ComputedRef, Ref } from 'vue';

// 如果是普通vue template那样使用，直接T就可以了
type WatchAbleOrT<T> = T | Ref<T> | ComputedRef<T>;

export interface LoadingOptions {
  modelValue: WatchAbleOrT<boolean>;
  closeOnClick?: boolean;
  text?: WatchAbleOrT<string>;
  background?: string;
  customClass?: string;
  zIndex?: number;
  mode?: 'insert' | 'wrap';
}
