<template>
  <div class="camera">
    <h1>相机管理{{addd}}</h1>
      <!-- <headSu>
        <div class="footr" slot="header">曾经沧海难为岁</div>
        <div class="footr" slot="footer">曾经沧海难为岁</div>
      </headSu> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { cameraSrv } from './camera.service'
export default {
  name:'camera',
  computed: mapGetters({
    addd: 'GET_STATE_NAME'
  }),
  methods: {
    getStories() {
      cameraSrv.getStorys({type: "all"}).then((result) => {
        console.log(result)
        // this.$store.dispatch("GET_NAME", result.data[0].title)
      })
    }
  },
  created() {
    this.getStories()
  }
}
</script>

<style scoped>
.camera{
  width: 100%;
  height: 100%;
}
</style>
