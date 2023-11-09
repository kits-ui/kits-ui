<template>
  <div style="display: flex; gap: 60px">
    <div class="waterFall">
      <k-waterfall :list="list" :column="3"></k-waterfall>
    </div>
    <div class="waterFall">
      <k-waterfall :list="list" :column="4">
        <template #bottom="{ index }">
          <div class="customDom">
            <p>第{{ index + 1 }}张</p>
          </div>
        </template>
      </k-waterfall>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = [
  {
    src: 'https://images.tusiassets.com/community/images/646960501594553821/aeeb6c3854b2d083c059083257e2796b.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/649580474594826652/3648af320da6f41363b4fb0ef365eb9c.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/model_showcase/601380436024757697/99fd0b2d-c91f-d68a-b0dc-763603adb6fa.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/model_showcase/605827947674324826/52ab7f01-decb-0c62-f8df-26597879464e.jpeg!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/model_showcase/604801613699364711/ae574f1e-e6ab-7ce0-be3c-efdf150e6a88.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/12222community/images/611354776034188268/82da544da8d283ffbe58e199536d0147.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/model_showcase/644908696930987941/f8df15e0-407d-aa11-77fd-d2720d878617.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/model_showcase/626956064346261913/e207ac0e-5dce-d6bf-0a76-b106e692d1a9.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/609174770893768699/401df7086cf9effe2092034cb31ef46d.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/613936927552513586/65e97737c3eb18f0c25f9fc35cb27278.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/610072397583832338/c598ac5f00dfdb5e5bafcc411a80635b.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/622503579126613523/3bfd00c36e4159a369d3a0d5453b166f.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/636900670280224517/611b8533775c601d6b962d1a1b440011.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/605788270768530930/9094f0618c19c50f2a043e4a686d80bc.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/625887717003116824/c808e365d91731f20abbf037728cb020.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/646787032160563420/590315d4cb499c319615d9bc7f69bdc3.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/604453085695284374/28260a8d41bb493f56ad2bd50531182f.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/608833406893240414/131739e0fe7cfdb50d86dba3779428f7.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/609767854337929936/2c99634b2cb920a4df1e029f0c6d9575.gif!mfit_w480_h480_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/607759295701966596/b6d78b1f0316c6641bca0b9286ed1f7c.png!mfit_w480_h480_jpg_webp',
  },
  {
    src: 'https://images.tusiassets.com/community/images/622657149977480652/a872ac03cad4acd7e2b682a9a425fa74.png!mfit_w480_h480_jpg_webp',
  },
];
</script>

<style scoped lang="scss">
.waterFall {
  width: 400px;
  height: fit-content;
}

.customDom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;

  p {
    margin: 5px 0 0;
  }

  img {
    border-radius: 10px;
  }
}
</style>
