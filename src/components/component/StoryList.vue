<template>
    <div class="new-box">
        <div v-for="(item, index) in storyListData" :key="index">
            <slot><p class="story-date">{{ item.storyDate }}</p></slot>
            <ul class="new-list">
                <router-link tag="li" v-for="story in item.data" :to="'/story/'+story.id" :key="story.id">
                    <a href="javascript:;" class="clearfix">
                        <img v-if="story.images" :src="story.images" alt="" />
                        <span class="title">{{story.title}}</span>
                    </a>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: ["storyListData"],
  mounted() {
    // console.log(2,this.storyListData)
  }
};
</script>

<style lang="less" scoped>
.new-box {
  padding: 10px;

  .story-date {
    padding: 10px 0 10px 4px;
    color: #5e5e5e;
  }

  .new-list {
    li {
      a {
        display: block;
        padding: 10px 16px 12px;
        margin-bottom: 8px;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 1px 3px #ccc;
      }

      img {
        float: right;
        width: 25%;
        margin-left: 8px;
      }

      span {
        display: block;
      }
    }
  }
}
</style>


