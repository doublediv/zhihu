<template>
  <div>
      <div v-html="storyContent"></div>
  </div>
</template>
<script>
// window.onscroll = function() {
//   const oImgBox = document.getElementById("imgBox");
//   var iHeight = parseInt(oImgBox.style.height);
//   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   if (iHeight > 0) {
//       iHeight -= scrollTop;
//     oImgBox.style.height = iHeight + "px";
//   }
//       console.log(iHeight);
// };
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      storyContent: ""
    };
  },
  activated() {
    this.getStoryData(this.$route.params.id);
    this.getStoryExtra(this.$route.params.id);
  },
  methods: {
    ...mapActions(["setCommentNum", "setLikeNum"]),
    // 获取文章内容
    getStoryData(storyId) {
      this.$http
        .get("/zhihu/news/" + storyId)
        .then(res => {
          //   console.log(res);
          this.storyContent = res.data.body;

          const imgPlaceHolderInner = `
          <div class="img-place-holder">
          <div id="imgBox" class="img-box" style="height: 200px"><img src="${
            res.data.image
          }" alt="" /></div>
          <p class="title">${res.data.title}</p>
          <p class="image-source">${res.data.image_source}</p>
          `;

          this.storyContent = this.storyContent.replace(
            /<div class="img-place-holder">/,
            imgPlaceHolderInner
          );
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取文章其他信息
    getStoryExtra(storyId) {
      this.$http
        .get("/zhihu/story-extra/" + storyId)
        .then(res => {
          // console.log(res);
          this.setCommentNum(res.data.short_comments)
          this.setLikeNum(res.data.popularity)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
@import "../../assets/css/story.css";
.img-place-holder {
  margin-top: 40px;
  position: relative;
}
.img-place-holder .img-box {
  position: relative;
  overflow: hidden;
}
.img-place-holder .img-box:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    farthest-side at top center,
    rgba(0, 0, 0, 0.1) 20%,
    rgba(0, 0, 0, 0.3) 80%
  );
  z-index: 2;
}
.img-place-holder .img-box img {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  transition: transform 0.25s ease-in-out;
  z-index: 1;
}
.img-place-holder .title {
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  padding: 0 20px;
  font-size: 18px;
  color: #fff;
  z-index: 3;
}
.img-place-holder .image-source {
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 100%;
  padding: 0 20px;
  font-size: 12px;
  text-align: right;
  color: #ddd;
  z-index: 3;
}
</style>

