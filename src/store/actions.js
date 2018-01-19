import type from './type'

const actions = {
    // 日/夜间切换
    setNight({ commit }) {
        commit(type.SETNIGHT)
    },
    // 头部切换
    setIndex({ commit }, boolean) {
        commit(type.SETINDEX, boolean)
    },
    setStory({ commit }, boolean) {
        commit(type.SETSTORY, boolean)
    },
    // 文章其他信息
    setCommentNum({commit}, string) {
        commit(type.COMMENTNUM, string)
    },
    setLikeNum({commit}, string) {
        commit(type.LIKENUM, string)
    }
}

export default actions