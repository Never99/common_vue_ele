<template>
  <div class="menus">
    <h3>导航菜单 {{GET_STATE_NAME}}</h3>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'menus',
  computed: {
    ...mapGetters([
      'GET_STATE_NAME'
    ])
  },
  methods: {
    ...mapActions([
      'GET_NAME'
    ]),
    getName() {
      this.GET_NAME('qwertyu')
      // 或者直接通过dispatch分发
      // this.$store.dispatch('GET_NAME', 'dasdsafas')
    }
  },
  created() {
    this.getName();
  }
}
</script>

<style scoped>
.menus{
  width: 100%;
  height: 100%;
}
</style>
