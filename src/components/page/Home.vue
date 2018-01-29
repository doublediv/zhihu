<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="topChange" @bottom-status-change="bottomChange" ref="loadmore">
    <v-swipe :topStoryData="topStoryData"></v-swipe>
    <story-list :storyListData="storyListData"></story-list>
    <div slot="top" class="load-box top" :class="{cur: isTopLoad}"></div>
    <div slot="bottom" class="load-box bottom" :class="{cur: isBottomLoad}"></div>
  </mt-loadmore>
</template>
<script>
import vSwipe from "../component/Swipe";
import storyList from "../component/StoryList";
export default {
  components: { vSwipe, storyList },
  data() {
    return {
      topStoryData: [],
      storyListData: [
        {
          storyDate: "今日热闻",
          data: []
        }
      ],
      dayNum: 0,
      isTopLoad: false,
      isBottomLoad: false
    };
  },
  mounted() {
    this.getLatestNews();
  },
  methods: {
    getLatestNews() {
      this.$http
        .get("/zhihu/news/latest")
        .then(res => {
          // console.log(res);
          this.topStoryData = res.data.top_stories;
          this.storyListData[0].data = res.data.stories;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 顶部刷新
    topChange(status) {
      if (status === "drop") {
        this.isTopLoad = true;
      }
    },
    loadTop() {
      this.getLatestNews();
      this.$refs.loadmore.onTopLoaded();
      this.isTopLoad = false;
    },
    // 底部加载
    bottomChange(status) {
      if (status === "drop") {
        this.isBottomLoad = true;
      }
    },
    loadBottom() {
      let oDate = new Date().getTime();
      oDate = oDate - 86400000 * this.dayNum;
      oDate = new Date(oDate);
      this.dayNum++;
      let Y = oDate.getFullYear();
      let M = oDate.getMonth() + 1;
      let D = oDate.getDate();
      let week = oDate.getDay() - 1;
      week = "星期" + "日一二三四五六".charAt(week);
      M = M < 10 ? "0" + M : M;
      D = D < 10 ? "0" + D : D;

      oDate = Y + M + D;

      this.$http
        .get("/zhihu/news/before/" + oDate)
        .then(res => {
          // console.log(res);
          let resData = {};
          resData.storyDate =
            res.data.date.substring(4, 6) +
            "月" +
            res.data.date.substring(6) +
            "日 " +
            week;
          resData.data = res.data.stories;
          this.storyListData.push(resData);
          resData = null;
        })
        .catch(err => {
          console.log(err);
        });
      this.isBottomLoad = false;
      this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>
<style scoped lang="less">
.load-box {
  position: fixed;
  left: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 2px 1px #00b4ff;
  z-index: 4;
  transform: scale(0);

  &.top {
    top: -8%;
  }

  &.bottom {
    bottom: 10px;
  }

  &.cur {
    animation: loading 0.7s linear infinite;
  }
}

@keyframes loading {
  0% {
    transform: scale(1) translateX(-50%) rotate(0);
  }
  100% {
    transform: scale(1) translateX(-50%) rotate(360deg);
  }
}
</style>

