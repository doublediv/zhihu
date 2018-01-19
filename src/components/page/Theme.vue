<template>
    <div>
        <div class="theme-banner">
          <img :src="themeBanner" alt="" />
          <p class="title">{{themeDescription}}</p>
        </div>
        <story-list :storyListData="themeListData"></story-list>
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
      themeListData: [
        {
          storyDate: "mmp",
          data: []
        }
      ]
    };
  },
  mounted() {
    //   console.log(this.$route)
    this.getThemeListData(this.$route.params.id);
  },
  methods: {
    getThemeListData(themeId) {
      this.$http
        .get("/zhihu/theme/" + themeId)
        .then(res => {
          console.log(res);
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
.theme-banner{
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 40px;
  overflow: hidden;

  img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    transform: translate(-50%, -50%);
    animation: bannermore 10s linear infinite;
    z-index: 2;
  }

  .title{
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

@keyframes bannermore{
  0% {
    transform: translate(-50%, -50%)
  }
  33% {
    transform: translate(-55%, -55%)
  }
  66% {
    transform: translate(-40%, -60%)
  }
  100% {
    transform: translate(-50%, -50%)
  }
}
</style>

