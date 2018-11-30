<template>
  <div class="menus">
    <h3>导航菜单 {{GET_STATE_NAME}}</h3>
    <div class="city_box">
      <button @click="choose">点我选择区域</button>
      <div class="divwrap">
        <area-cascader v-model="val" :level="1" :data="pcaa"></area-cascader>
        <v-distpicker
          @province="onChangeProvince"
          @city="onChangeCity"
          @area="onChangeArea"
        ></v-distpicker>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VDistpicker from "v-distpicker";
import { pca, pcaa } from 'area-data'; // v5 or higher
import 'vue-area-linkage/dist/index.css'; // v2 or higher
export default {
  name: "menus",
  data() {
    return {
      show: false,
      pcaa: pcaa,
      val: []
    };
  },
  computed: {
    ...mapGetters(["GET_STATE_NAME"])
  },
  methods: {
    ...mapActions(["GET_NAME"]),
    getName() {
      this.GET_NAME("qwertyu");
      // 或者直接通过dispatch分发
      // this.$store.dispatch('GET_NAME', 'dasdsafas')
    },
    choose() {
      this.show = !this.show;
    },
    onChangeProvince(a) {
      console.log(a);
    },
    onChangeCity(a) {
      console.log(a);
    },
    onChangeArea(a) {
      console.log(a);
      // this.show = false;
    }
  },
  components: {
    VDistpicker
  },
  created() {
    this.getName();
  }
};
</script>

<style scoped>
.menus {
  width: 100%;
  height: 100%;
}
</style>
