const getters = {
    // 日/夜间切换
    getIsNight: state => state.isNight,
    // 头部切换
    getIsIndex: state => state.isIndex,
    getIsStory: state => state.isStory,
    // 文章其他信息
    getCommentNum: state => state.commentNum,
    getLikeNum: state => state.likeNum
}
export default getters