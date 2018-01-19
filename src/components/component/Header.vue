<template>
  <div>
    <header class="header" :class="{night: getIsNight, day: !getIsNight}">
      <div class="index-header" v-show="!getIsStory">
        <div class="nav-ico" :class="{active: isNav}" @click="showNav"><span></span><span></span><span></span></div>
        <p class="page-name">{{ pageName }}</p>
        <div v-show="getIsIndex">
          <div class="notice">
              <span v-show="isNotice">9</span>
          </div>
          <div class="theme" @click="showTheme"><span></span><span></span><span></span></div>
        </div>
      </div>
      <div class="story-header" v-show="getIsStory">
        <a class="back" href="javascript:;" @click="$router.back()"></a>
        <div class="story-extra clearfix">
          <a class="linke-num" :class="{like: isLike}" href="javascript:;" @click="iLinke">{{ getLikeNum }}</a>
          <a class="comment-num" href="javascript:;">{{ getCommentNum }}</a>
          <a class="collect" href="javascript:;"></a>
          <a class="share" href="javascript:;"></a>
        </div>
      </div>
    </header>
    <div class="theme-popup" :class="{ active: isTheme, night: getIsNight, day: !getIsNight }">
        <a href="javascript:;" @click="setTheme">{{ themeTip }}</a>
        <router-link to="/">设置选项</router-link>
    </div>
    <div class="theme-mask" v-show="isTheme" @click="hideThmem"></div>
    <mt-popup
      v-model="isNav"
      position="left"
      class="side-nav" :class="{night: getIsNight, day: !getIsNight}">
        <section class="nav-header">
          <div class="user clearfix">
            <span class="pic" :style="{backgroundImg: userPice}"></span>
            <p class="name">{{ userName }}</p>
          </div>
          <div class="other clearfix">
            <router-link to="/" class="collect">我的收藏</router-link>
            <a href="javascript:;" class="down">离线下载</a>
          </div>
        </section>
        <ul class="nav-list">
          <li @click="isNav=false"><router-link class="home" to="/home">首页<span></span></router-link></li>
          <router-link tag="li" v-for="item in navData" :to="'/theme/'+ item.id" :key="item.id">
            <div @click="isNav=false">
              <a href="javascript:;">{{ item.name }}<span></span></a>
            </div>
          </router-link>
        </ul>
    </mt-popup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "Vuex";
export default {
  data() {
    return {
      pageName: "",
      isTheme: false,
      themeTip: "夜间模式",
      isNotice: false,
      isNav: false,
      navData:[],
      userPice: "",
      userName: "请登录",
      isLike: false,
    };
  },
  watch: {
    $route: function() {
      this.setHeader();
      // console.log(this.$route)
    }
  },
  mounted() {
    this.setHeader();
  },
  computed: {
    ...mapGetters([
      "getIsNight",
      "getIsStory",
      "getIsIndex",
      "getCommentNum",
      "getLikeNum"
    ])
  },
  mounted() {
    this.getNavData();
  },
  methods: {
    ...mapActions(["setNight", "setStory", "setIndex"]),
    // 设置头部内容
    setHeader(routeName) {
      if (this.$route.name === "文章") {
        this.setStory(true);
      } else {
        this.setStory(false);
      }
      if (this.$route.name === "首页") {
        this.setIndex(true);
      } else {
        this.setIndex(false);
      }
    },
    // 显示设置主题模式
    showTheme() {
      this.isTheme = true;
    },
    // 隐藏设置主题模式
    hideThmem() {
      this.isTheme = false;
    },
    // 设置主题模式
    setTheme() {
      if (this.getIsNight) {
        this.setNight();
        this.themeTip = "夜间模式";
      } else {
        this.setNight();
        this.themeTip = "日间模式";
      }
      this.hideThmem();
    },
    // 显示侧边导航
    showNav() {
      this.isNav = !this.isNav;
    },
    // 获取导航
    getNavData() {
      this.$http
        .get("/zhihu/themes")
        .then(res => {
          // console.log(res);
          this.navData = res.data.others.map(ele => {
            return {
              name: ele.name,
              id: ele.id
            }
          })
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点赞
    iLinke() {
      this.isLike = !this.isLike;
    }
  }
};
</script>

