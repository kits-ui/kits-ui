import { Teleport, SetupContext } from 'vue';

const InnerLoading = (props, ctx: SetupContext): JSX.Element => {
  // 实际的loading
  const LoadingContent = <div class="loading-content">Loading....</div>;
  const slot = ctx.slots.default;
  return (
    <div class="k-loading">
      {slot && <>{slot()}</>}
      {LoadingContent}
    </div>
  );
};
// todo 渐入渐出动画
export default function Loading(props: { value: boolean }, ctx: SetupContext): JSX.Element {
  const slot = ctx.slots.default;
  // loading完成原样输出
  if (!props.value) return slot && <>{slot()}</>;
  // 有slot使用div包裹
  if (slot) return <InnerLoading>{slot()}</InnerLoading>;
  // 没有slot转到body下
  return (
    <Teleport to="body">
      <InnerLoading />
    </Teleport>
  );
}

Loading.inheritAttrs = true;
Loading.props = ['value'];
Loading.emits = ['update:value'];
