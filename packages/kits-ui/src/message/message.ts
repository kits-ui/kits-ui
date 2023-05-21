import { h, Teleport, createApp } from 'vue';
import type { ComponentPublicInstance, App } from 'vue';
import MessageVue from './message.vue';

export interface MessageOption {
  type: MessageType;
  content: string;
  duration: number;
  closeVisible: boolean;
  id: string;
}
//定义消息类型的枚举常量
export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}
type IHandleMessageFn = (message: string, option?: MessageOption) => void;

// 定义Message类中的属性、方法的数据类型
export interface IMessage {
  messageQueue: MessageOption[];
  success: IHandleMessageFn;
  info: IHandleMessageFn;
  error: IHandleMessageFn;
  warning: IHandleMessageFn;
}
const defaultMessageOptions = {
  type: MessageType.INFO,
  duration: 3000,
  closeVisible: false,
};
// 创建一个唯一标识符
function uuid(): string {
  const tempUrl = URL.createObjectURL(new Blob());
  const uuid = tempUrl.toString();
  URL.revokeObjectURL(uuid);
  return uuid.substr(uuid.lastIndexOf('/') + 1);
}
class Message implements IMessage {
  private wrapper: ComponentPublicInstance<any>;

  get messageQueue() {
    return this.wrapper.messageQueue;
  }
  private createWrapper(): App {
    if (this.wrapper) {
      return this.wrapper;
    }
    this.wrapper = createApp({
      data() {
        return {
          messageQueue: [],
        };
      },
      methods: {
        remove(toastInfo: MessageOption) {
          this.messageQueue = this.messageQueue.filter(
            (item: MessageOption) => item.id !== toastInfo.id,
          );
        },
        append(toastInfo: MessageOption) {
          this.messageQueue.push(toastInfo);
        },
      },
      render() {
        return h(Teleport, { to: 'body' }, [
          h('div', { class: 'k-message-wrapper' }, [
            h(MessageVue, { messageQueue: this.messageQueue }),
          ]),
        ]);
      },
    }).mount(document.createElement('div'));
    return this.wrapper;
  }
  private appendMessage(message: MessageOption) {
    this.wrapper.append(message);
    if (message.duration === 0) return;

    setTimeout(() => {
      this.remove(message);
    }, message.duration);
  }
  remove(message: MessageOption) {
    this.wrapper.remove(message);
  }
  public createMessage(content: string, options: Partial<MessageOption>): MessageOption {
    const message = Object.assign(
      {},
      defaultMessageOptions,
      {
        content,
        id: uuid(),
      },
      options,
    );
    return message;
  }
  success(content: string, option?: Partial<MessageOption>) {
    const message = this.createMessage(content, {
      type: MessageType.SUCCESS,
      ...option,
    });
    this.createWrapper();
    this.appendMessage(message);
  }
  info(content: string, option?: Partial<MessageOption>) {
    const message = this.createMessage(content, {
      type: MessageType.INFO,
      ...option,
    });
    this.createWrapper();
    this.appendMessage(message);
  }
  error(content: string, option?: Partial<MessageOption>) {
    const message = this.createMessage(content, {
      type: MessageType.ERROR,
      ...option,
    });
    this.createWrapper();
    this.appendMessage(message);
  }
  warning(content: string, option?: Partial<MessageOption>) {
    const message = this.createMessage(content, {
      type: MessageType.WARNING,
      ...option,
    });
    this.createWrapper();
    this.appendMessage(message);
  }
}
export default new Message();
