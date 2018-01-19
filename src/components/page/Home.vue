<template>
  <div>
    <v-swipe :topStoryData="topStoryData"></v-swipe>
    <story-list :storyListData="storyListData"></story-list>
  </div>
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
          data: [],
        }
      ]
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
    }
  }
};
</script>
<style scoped lang="less">

</style>

