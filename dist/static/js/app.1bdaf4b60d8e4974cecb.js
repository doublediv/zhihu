webpackJsonp([1],{"5OHe":function(t,e){},AGjP:function(t,e){},CHBv:function(t,e){},EK4q:function(t,e){},"H8+P":function(t,e){},JCBo:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("Dd8w"),n=s.n(i),o=s("9rMa"),r={data:function(){return{pageName:"首页",isTheme:!1,themeTip:"夜间模式",isNotice:!1,isNav:!1,navData:[],userPice:"",userName:"请登录",isLike:!1,isFollow:!1}},watch:{$route:function(){this.setHeader()}},mounted:function(){this.setHeader(),this.getNavData()},computed:n()({},Object(o.c)(["getIsNight","getIsStory","getIsIndex","getCommentNum","getLikeNum"])),methods:n()({},Object(o.b)(["setNight","setStory","setIndex"]),{setHeader:function(t){"首页"===this.$route.name?this.setIndex(!0):this.setIndex(!1),"文章"===this.$route.name?this.setStory(!0):this.setStory(!1)},showTheme:function(){this.isTheme=!0},hideThmem:function(){this.isTheme=!1},setTheme:function(){this.getIsNight?(this.setNight(),this.themeTip="夜间模式"):(this.setNight(),this.themeTip="日间模式"),this.hideThmem()},showNav:function(){this.isNav=!this.isNav},getNavData:function(){var t=this;this.$http.get("/zhihu/themes").then(function(e){t.navData=e.data.others.map(function(t){return{name:t.name,id:t.id}})}).catch(function(t){console.log(t)})},choiceNav:function(t){this.isNav=!1,this.pageName="-1"===t?"首页":this.navData[t].name},iLinke:function(){this.isLike=!this.isLike},setFollow:function(){this.isFollow=!this.isFollow}})},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"header",class:{night:t.getIsNight,day:!t.getIsNight}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.getIsStory,expression:"!getIsStory"}],staticClass:"index-header"},[s("div",{staticClass:"nav-ico",class:{active:t.isNav},on:{click:t.showNav}},[s("span"),s("span"),s("span")]),t._v(" "),s("p",{staticClass:"page-name"},[t._v(t._s(t.pageName))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.getIsIndex,expression:"getIsIndex"}]},[s("div",{staticClass:"notice"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.isNotice,expression:"isNotice"}]},[t._v("9")])]),t._v(" "),s("div",{staticClass:"theme",on:{click:t.showTheme}},[s("span"),s("span"),s("span")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.getIsIndex,expression:"!getIsIndex"}],staticClass:"follow",class:{cur:t.isFollow},on:{click:t.setFollow}},[s("span")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.getIsStory,expression:"getIsStory"}],staticClass:"story-header"},[s("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:function(e){t.$router.back()}}}),t._v(" "),s("div",{staticClass:"story-extra clearfix"},[s("a",{staticClass:"linke-num",class:{like:t.isLike},attrs:{href:"javascript:;"},on:{click:t.iLinke}},[t._v(t._s(t.getLikeNum))]),t._v(" "),s("a",{staticClass:"comment-num",attrs:{href:"javascript:;"}},[t._v(t._s(t.getCommentNum))]),t._v(" "),s("a",{staticClass:"collect",attrs:{href:"javascript:;"}}),t._v(" "),s("a",{staticClass:"share",attrs:{href:"javascript:;"}})])])]),t._v(" "),s("div",{staticClass:"theme-popup",class:{active:t.isTheme,night:t.getIsNight,day:!t.getIsNight}},[s("a",{attrs:{href:"javascript:;"},on:{click:t.setTheme}},[t._v(t._s(t.themeTip))]),t._v(" "),s("router-link",{attrs:{to:"/"}},[t._v("设置选项")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isTheme,expression:"isTheme"}],staticClass:"theme-mask",on:{click:t.hideThmem}}),t._v(" "),s("mt-popup",{staticClass:"side-nav",class:{night:t.getIsNight,day:!t.getIsNight},attrs:{position:"left"},model:{value:t.isNav,callback:function(e){t.isNav=e},expression:"isNav"}},[s("section",{staticClass:"nav-header"},[s("div",{staticClass:"user clearfix"},[s("span",{staticClass:"pic",style:{backgroundImg:t.userPice}}),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(t.userName))])]),t._v(" "),s("div",{staticClass:"other clearfix"},[s("router-link",{staticClass:"collect",attrs:{to:"/"}},[t._v("我的收藏")]),t._v(" "),s("a",{staticClass:"down",attrs:{href:"javascript:;"}},[t._v("离线下载")])],1)]),t._v(" "),s("ul",{staticClass:"nav-list"},[s("li",{on:{click:function(e){t.choiceNav("-1")}}},[s("router-link",{staticClass:"home",attrs:{to:"/home"}},[t._v("首页"),s("span")])],1),t._v(" "),t._l(t.navData,function(e,a){return s("router-link",{key:e.id,attrs:{tag:"li",to:"/theme/"+e.id}},[s("div",{on:{click:function(e){t.choiceNav(a)}}},[s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.name)),s("span")])])])})],2)])],1)},staticRenderFns:[]},u={name:"App",components:{vHeader:s("VU/8")(r,c,!1,null,null,null).exports},computed:n()({},Object(o.c)(["getIsNight"])),methods:n()({},Object(o.b)(["setNight"]))},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-header"),this._v(" "),e("transition",{attrs:{name:"fade"}},[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(u,h,!1,function(t){s("ovd6")},"data-v-db0d0166",null).exports,m=s("/ocq"),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mt-swipe",{staticClass:"index-banner",attrs:{auto:4e3}},t._l(t.topStoryData,function(e){return s("mt-swipe-item",{key:e.id},[s("router-link",{attrs:{to:"/story/"+e.id}},[s("img",{attrs:{src:e.image,alt:""}}),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(e.title))])])],1)}))},staticRenderFns:[]};var v=s("VU/8")({props:["topStoryData"]},d,!1,function(t){s("rl1N")},"data-v-59b5e4a0",null).exports,p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"new-box"},t._l(t.storyListData,function(e,a){return s("div",{key:a},[t._t("default",[s("p",{staticClass:"story-date"},[t._v(t._s(e.storyDate))])]),t._v(" "),s("ul",{staticClass:"new-list"},t._l(e.data,function(e){return s("router-link",{key:e.id,attrs:{tag:"li",to:"/story/"+e.id}},[s("a",{staticClass:"clearfix",attrs:{href:"javascript:;"}},[e.images?s("img",{attrs:{src:e.images,alt:""}}):t._e(),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(e.title))])])])}))],2)}))},staticRenderFns:[]};var f=s("VU/8")({props:["storyListData"],mounted:function(){}},p,!1,function(t){s("NS34")},"data-v-41f176e0",null).exports,g={components:{vSwipe:v,storyList:f},data:function(){return{topStoryData:[],storyListData:[{storyDate:"今日mmp",data:[]}],dayNum:0,isTopLoad:!1,isBottomLoad:!1}},mounted:function(){this.getLatestNews()},methods:{getLatestNews:function(){var t=this;this.$http.get("/zhihu/news/latest").then(function(e){t.topStoryData=e.data.top_stories,t.storyListData[0].data=e.data.stories}).catch(function(t){console.log(t)})},topChange:function(t){"drop"===t&&(this.isTopLoad=!0)},loadTop:function(){this.getLatestNews(),this.$refs.loadmore.onTopLoaded(),this.isTopLoad=!1},bottomChange:function(t){"drop"===t&&(this.isBottomLoad=!0)},loadBottom:function(){var t=this,e=(new Date).getTime();e-=864e5*this.dayNum,e=new Date(e),this.dayNum++;var s=e.getFullYear(),a=e.getMonth()+1,i=e.getDate(),n=e.getDay()-1;n="星期"+"日一二三四五六".charAt(n),e=s+(a=a<10?"0"+a:a)+(i=i<10?"0"+i:i),this.$http.get("/zhihu/news/before/"+e).then(function(e){var s={};s.storyDate=e.data.date.substring(4,6)+"月"+e.data.date.substring(6)+"日 "+n,s.data=e.data.stories,t.storyListData.push(s),s=null}).catch(function(t){console.log(t)}),this.isBottomLoad=!1,this.$refs.loadmore.onBottomLoaded()}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom},on:{"top-status-change":t.topChange,"bottom-status-change":t.bottomChange}},[s("v-swipe",{attrs:{topStoryData:t.topStoryData}}),t._v(" "),s("story-list",{attrs:{storyListData:t.storyListData}}),t._v(" "),s("div",{staticClass:"load-box top",class:{cur:t.isTopLoad},attrs:{slot:"top"},slot:"top"}),t._v(" "),s("div",{staticClass:"load-box bottom",class:{cur:t.isBottomLoad},attrs:{slot:"bottom"},slot:"bottom"})],1)},staticRenderFns:[]};var _=s("VU/8")(g,N,!1,function(t){s("CHBv")},"data-v-62e010b8",null).exports,y={data:function(){return{storyContent:""}},activated:function(){this.getStoryData(this.$route.params.id),this.getStoryExtra(this.$route.params.id)},methods:n()({},Object(o.b)(["setCommentNum","setLikeNum"]),{getStoryData:function(t){var e=this;this.$http.get("/zhihu/news/"+t).then(function(t){e.storyContent=t.data.body;var s='\n          <div class="img-place-holder">\n          <div id="imgBox" class="img-box" style="height: 200px"><img src="'+t.data.image+'" alt="" /></div>\n          <p class="title">'+t.data.title+'</p>\n          <p class="image-source">'+t.data.image_source+"</p>\n          ";e.storyContent=e.storyContent.replace(/<div class="img-place-holder">/,s)}).catch(function(t){console.log(t)})},getStoryExtra:function(t){var e=this;this.$http.get("/zhihu/story-extra/"+t).then(function(t){e.setCommentNum(t.data.short_comments),e.setLikeNum(t.data.popularity)}).catch(function(t){console.log(t)})}})},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{domProps:{innerHTML:this._s(this.storyContent)}})])},staticRenderFns:[]};var T=s("VU/8")(y,C,!1,function(t){s("H8+P")},null,null).exports,w={components:{storyList:f},data:function(){return{themeBanner:"",themeDescription:"",editorData:[],themeListData:[{storyDate:"mmp",data:[]}]}},activated:function(){this.getThemeListData(this.$route.params.id)},beforeRouteUpdate:function(t,e,s){this.getThemeListData(t.params.id),s()},methods:{getThemeListData:function(t){var e=this;this.$http.get("/zhihu/theme/"+t).then(function(t){e.editorData=t.data.editors,e.themeBanner=t.data.background,e.themeDescription=t.data.description,e.themeListData[0].data=t.data.stories}).catch(function(t){console.log(t)})}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"theme-banner"},[s("img",{attrs:{src:t.themeBanner,alt:""}}),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.themeDescription))])]),t._v(" "),s("story-list",{attrs:{storyListData:t.themeListData}},[s("p",{staticClass:"editor clearfix"},[s("span",[t._v("主编")]),t._v(" "),s("router-link",{staticClass:"clearfix",attrs:{tag:"span",to:"/"}},t._l(t.editorData,function(t,e){return s("img",{key:e,attrs:{src:t.avatar,alt:""}})}))],1)])],1)},staticRenderFns:[]};var I=s("VU/8")(w,D,!1,function(t){s("EK4q")},"data-v-5ba3367e",null).exports;a.default.use(m.a);var k=new m.a({routes:[{path:"/home",name:"首页",component:_},{path:"/story/:id",name:"文章",component:T},{path:"/theme/:id",name:"主题",component:I},{path:"/",redirect:"/home"}]}),L=s("wSez"),S=s.n(L),x=s("//Fk"),b=s.n(x),E=s("2sCs"),$=s.n(E);$.a.interceptors.request.use(function(t){return t},function(t){return b.a.reject(t)}),$.a.interceptors.response.use(function(t){return t},function(t){return b.a.reject(t)});var M,j=$.a,H={isNight:!1,isIndex:!0,isStory:!1,commentNum:"...",likeNum:"..."},O=s("bOdI"),U=s.n(O),B={SETNIGHT:"SETNIGHT",SETDAY:"SETDAY",SETINDEX:"SETINDEX",SETSTORY:"SETSTORY",COMMENTNUM:"COMMENTNUM",LIKENUM:"LIKENUM"},F=(M={},U()(M,B.SETNIGHT,function(t){t.isNight=!t.isNight}),U()(M,B.SETINDEX,function(t,e){t.isIndex=e}),U()(M,B.SETSTORY,function(t,e){t.isStory=e}),U()(M,B.COMMENTNUM,function(t,e){t.commentNum=e}),U()(M,B.LIKENUM,function(t,e){t.likeNum=e}),M),R={setNight:function(t){(0,t.commit)(B.SETNIGHT)},setIndex:function(t,e){(0,t.commit)(B.SETINDEX,e)},setStory:function(t,e){(0,t.commit)(B.SETSTORY,e)},setCommentNum:function(t,e){(0,t.commit)(B.COMMENTNUM,e)},setLikeNum:function(t,e){(0,t.commit)(B.LIKENUM,e)}},A={getIsNight:function(t){return t.isNight},getIsIndex:function(t){return t.isIndex},getIsStory:function(t){return t.isStory},getCommentNum:function(t){return t.commentNum},getLikeNum:function(t){return t.likeNum}};a.default.use(o.a);var P=new o.a.Store({state:H,mutations:F,actions:R,getters:A});s("5OHe"),s("AGjP"),s("JCBo");a.default.prototype.$http=j,a.default.use(S.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:k,store:P,components:{App:l},template:"<App/>"})},NS34:function(t,e){},ovd6:function(t,e){},rl1N:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1bdaf4b60d8e4974cecb.js.map