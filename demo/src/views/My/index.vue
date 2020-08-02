<template>
  <div class="my">
    my 页面222
    <div> {{ aa }} </div>
    <div> {{ bb }} </div>
    <div> {{ faq }} </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'My',
  props: {

  },
  data () {
    return {

    }
  },
  computed: {
    // ...mapState('mmg', ['aa']),
    // ...mapState(['bb']),

    ...mapState({
        aa: state => state.mmg.aa,
        bb: state => state.bb,
        faq: state => state.faq.faq
    })
  }
}
</script>

<style lang="less" scoped>
.my {
  
}
</style>

