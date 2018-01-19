import type from './type'

const mutations = {
    // 日/夜间切换
    [type.SETNIGHT](state) {
        state.isNight = !state.isNight;
    },
    // 头部切换
    [type.SETINDEX](state, boolean) {
        state.isIndex = boolean;
    },
    [type.SETSTORY](state, boolean) {
        state.isStory = boolean;
    },
    // 文章其他信息
    [type.COMMENTNUM](state, string) {
        state.commentNum = string;
    },
    [type.LIKENUM](state, string) {
        state.likeNum = string;
    },
}

export default mutations