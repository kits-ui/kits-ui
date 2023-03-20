import type { ComputedRef, Ref } from 'vue';

export interface LoadingOptions {
  modelValue: boolean | Ref<boolean>;
  closeOnClick?: boolean;
  text?: string | ComputedRef<string>;
  background?: string;
  customClass?: string;
  zIndex?: number;
  mode?: 'insert' | 'wrap';
}
