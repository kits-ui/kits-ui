<template>
  <div class="k-emoji">
    <div class="container">
      <div height="30px" class="header">
        <span v-text="showTitle"></span>
        <!--<div class="addbtn" @click="systemEmojiBox = true">系统表情</div>-->
      </div>
      <div class="no-padding main lum-scrollbar">
        <div v-show="showEmoticonId == -1" class="emoticon">
          <div class="title">我的表情</div>
          <div class="box">
            <div
              v-for="(elImg, text) in emoji.emojis"
              :key="text"
              v-html="elImg"
              class="emoticon-item"
              @click="clickEmoticon(text)"
            ></div>
          </div>
          <div class="clear"></div>
          <div class="title">符号表情</div>
          <div class="box">
            <div
              v-for="(item, i) in emoji.symbol"
              :key="i"
              class="emoticon-item symbol"
              @click="clickEmoticon(item)"
            >
              {{ item }}
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <!-- <div height="40px" class="no-padding footer">
        <div class="toolbar-items">
          <div v-show="emojiItem.length > 13" class="toolbar-item prev-page" @click="turnPage(1)">
            <i class="el-icon-caret-left" />
          </div>
          <div
            v-for="(item, index) in showItems"
            :key="index"
            class="toolbar-item"
            @click="triggerItem(item)"
          >
            <img :src="item.categoryIcon" />
            <p class="title">{{ item.categoryName }}</p>
          </div>
          <div
            v-show="emojiItem.length > 13 && showItems.length == 13"
            class="toolbar-item next-page"
            @click="turnPage(2)"
          >
            <i class="el-icon-caret-right" />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { emojiList } from './emojis';
import { emoticon } from './emoticon';
import { toRef } from 'vue';

export default {
  name: 'MeEditorEmoticon',
  components: {},
  props: {
    // 表情包数据
    diyEmoji: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props: any) {
    let emoji: any = emojiList;
    const emojiItem = emoticon;
    const diyEmoji = toRef(props, 'diyEmoji');
    // console.log('emojiItem', diyEmoji.value);

    if (Object.entries(diyEmoji.value).length > 0) {
      emoji.emojis = diyEmoji.value;
    }
    return {
      emojiItem,
      emoji,
    };
  },
  computed: {
    showItems() {
      let start = (this.page - 1) * this.pageSize;
      let end = start + this.pageSize;
      return this.emojiItem.slice(start, end);
    },
    pageTotal() {
      return this.emojiItem.length / this.pageSize;
    },
  },
  data() {
    return {
      // 系统表情包套弹出窗
      systemEmojiBox: false,

      showEmoticonId: -1,
      showTitle: '符号表情',

      page: 1,
      pageSize: 13,
    };
  },
  // created() {},
  methods: {
    // 表情包导航翻页
    turnPage(type) {
      if (type == 1) {
        if (this.page == 1) return false;
        this.page--;
      } else {
        if (this.page >= this.pageTotal) return false;
        this.page++;
      }
    },

    // 点击表情包导航
    triggerItem(item) {
      this.showEmoticonId = item.categoryId;
      this.showTitle = item.categoryName;
    },

    // 选中表情
    clickEmoticon(emoji) {
      this.callback({
        type: 1,
        value: emoji,
        textReplaceEmoji: (val) => {
          return this.textReplaceEmoji(val);
        },
      });
    },

    // 发送图片表情包
    clickImageEmoticon(item) {
      this.callback({
        type: 2,
        value: item.itemId,
      });
    },

    callback(data) {
      this.$emit('selected', data);
    },
    /**
     * 替换表情文字
     *
     * @param {String} content 需要替换的字符串
     */
    textReplaceEmoji(content) {
      const emojisKeys = Object.keys(this.emoji.emojis);
      const regEmoji = emojisKeys
        .map((value) => '|\\' + value)
        .join('')
        .replace('|', '');
      return content.replace(new RegExp(`(${regEmoji})`, 'gi'), ($0, $1) => {
        return this.emoji.emojis[$1];
      });
    },
  },
};
</script>
