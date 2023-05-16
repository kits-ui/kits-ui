/**
 * @param { Object } md markdown 实例
 */
export const kTablePlugin = (md): void => {
  md.renderer.rules.table_open = (): string => '<div class="vp-table_k"><table>';
  md.renderer.rules.table_close = (): string => '</table></div>';
};
