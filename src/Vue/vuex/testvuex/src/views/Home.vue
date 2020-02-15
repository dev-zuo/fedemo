<template>
  <div class="home">
    <div>count: {{count}}</div>
    <div>countVal: {{countVal}}</div>
    <div>
      <button @click="increment">ADD</button>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('cart', ['count']),
    ...mapGetters('cart', ['countVal'])
  },
  methods: {
    ...mapMutations('cart', ['increment'])
  }
}
</script>
