<template>
  <div>
    <!-- v-infinite-scroll 需要先绑定一些事件，然后监听当前组件mounted，开始绑定事件 -->
    <!-- 但问题是，如果嵌套组件，v-infinite-scroll 还没初开始绑定逻辑，当前组件就已经mounted完了.... --->
    <sub-comps-middle>
      <div v-infinite-scroll="loadMore" infinite-scroll-distance="10">
        测试
      </div>
    </sub-comps-middle>
  </div>
</template>

<script>
export default {
  components: {
    SubCompsMiddle: () => import('./subCompsMiddle')
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log('sub mounted')
  },
  methods: {
    loadMore() {
      console.log('加载了loadmore')
    }
  }
}
</script>