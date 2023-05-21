import { App } from 'vue';
import message from './message';
export const Message = message;
export default {
  install(app: App): void {
    app.component(`KMessage`, Message);
  },
};
