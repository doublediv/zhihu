<template>
    <mt-swipe :auto="4000" class="index-banner">
        <mt-swipe-item v-for="item in topStoryData" :key="item.id">
            <router-link :to="'/story/'+item.id">
                <img :src="item.image" alt="" />
                <span class="title">{{item.title}}</span>
            </router-link>
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
  props: ["topStoryData"]
};
</script>
<style lang="less" scoped>

</style>
