<template>
  <div>
    {{count}}
    {{showCount}}
    <button @click='muCount'>+1</button>
    <button @click='asyncCount'>async+1</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapMutations(['muCount']),
    ...mapActions(['asyncCount'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showCount'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
