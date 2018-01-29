<template>
    <div>
        <div class="theme-banner">
          <img :src="themeBanner" alt="" />
          <p class="title">{{themeDescription}}</p>
        </div>
        <story-list :storyListData="themeListData">
          <p class="editor clearfix">
            <span>主编</span>
            <router-link tag="span" to="/" class="clearfix"><img v-for="(item, index) in editorData" :key="index" :src="item.avatar" alt="" /></router-link>
          </p>
        </story-list>
    </div>
</template>
<script>
import storyList from "../component/StoryList";
export default {
  components: { storyList },
  data() {
    return {
      themeBanner: "",
      themeDescription: "",
      editorData: [],
      themeListData: [
        {
          storyDate: "mmp",
          data: []
        }
      ]
    };
  },
  activated() {
    this.getThemeListData(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getThemeListData(to.params.id);
    next()
  },
  methods: {
    getThemeListData(themeId) {
      this.$http
        .get("/zhihu/theme/" + themeId)
        .then(res => {
          // console.log(res);
          this.editorData = res.data.editors;
          this.themeBanner = res.data.background;
          this.themeDescription = res.data.description;
          this.themeListData[0].data = res.data.stories;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.theme-banner {
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 40px;
  background-color: #2b2b2b;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    transform: translate(-50%, -50%);
    animation: bannermore 15s linear infinite;
    z-index: 2;
  }

  .title {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    padding: 0 20px;
    font-size: 16px;
    color: #fff;
    line-height: 20px;
    z-index: 3;
  }
}

@keyframes bannermore {
  0% {
    transform: translate(-50%, -50%);
  }
  33% {
    transform: translate(-55%, -55%);
  }
  66% {
    transform: translate(-40%, -60%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

.editor {
  // padding: 0 0 10px 4px;
  color: #5e5e5e;

  span {
    float: left;

    &:first-child {
      padding: 0 16px 16px 4px;
    }

    img {
      float: left;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin: 0 10px 16px 0;
      overflow: hidden;
    }
  }
}
</style>

