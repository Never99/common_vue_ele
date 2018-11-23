<template>
  <div class="calender">
    <div class="can_header">
      <el-button type="primary" @click="changeMounth">月</el-button>
      <el-button type="primary" @click="changeWeek">周</el-button>

      <span v-if="!leftShow">
        <el-button type="primary" @click="prevMonutn">上一个月</el-button>
        <el-button type="primary" @click="nextMonutn">下一个月</el-button>
        <span>{{year}}年{{month}}月</span>
      </span>
      <span v-else>
        <el-button type="primary" @click="prevWeek">上一周</el-button>
        <el-button type="primary" @click="nextWeek">下一周</el-button>
        <span>{{currentWeekNow}}<b v-if="benzhouFlag">（ 本周 ）</b></span>
      </span>
      
    </div>
    <div class="can_body">
      <ul v-if="leftShow" class="list_calender_left">
        <li>第1节</li>
        <li>第2节</li>
        <li>第3节</li>
        <li>第4节</li>
        <li>第5节</li>
        <li>第6节</li>
        <li>第7节</li>
        <li>第8节</li>
        <li>第9节</li>
        <li>第10节</li>
      </ul>
      <div class="list_calender_body">
        <ul class="list_weekname">
          <li v-for="(item, index) in daynamearr" :key="index">{{item}}</li>
        </ul>
        <div class="list_calender_content">
          <ul v-if="!leftShow" class="data_month" v-for="(item, index) in getDateTime" :key="index">
            <li v-for="(val, ind) in item" :key="ind" :class="{'gray': val.prevmonth || val.nextmonth}">{{val.day}}</li>
          </ul>
          <ul class="data_week" v-if="leftShow" v-for="ind in 10" :key="ind">
              <li>语文</li>
              <li>数学</li>
              <li>英语</li>
              <li>物理</li>
              <li>生物</li>
              <li>化学</li>
              <li>地理</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftShow: false, // 控制切换周 or 月
      daynamearr: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayarr: [],  //本月的本期构成
      year: new Date().getFullYear(), //当前年份
      month: new Date().getMonth() + 1, //当前月份
      currentWeek: 1, //当前是第几周   Math.ceil(new Date().getDate() / 6)
      currentWeekNow: "",
      benzhou: 1,
      benzhouFlag: true
    };
  },
  computed: {
    getDateTime() {
      this.dayarr = [];
      //需要知道这个月的第一天是星期几
      var themonth1stday = new Date(this.year, this.month - 1, 1).getDay();
      // console.log(themonth1stday);
      //本月有多少天，这个月的最后一天就是下个月的最后一天减去一毫秒
      var y = this.month == 12 ? this.year + 1 : this.year;
      var m = this.month == 12 ? 1 : this.month;
      var themonthdaysamount = new Date(new Date(y, m, 1) - 1).getDate();
      // console.log(themonthdaysamount);
      //上个月有多少天
      var prevmonthlastday = new Date(
        new Date(this.year, this.month - 1, 1) - 1
      ).getDate();
      // console.log(prevmonthlastday);
      while (themonth1stday-- > 0) {
        this.dayarr.unshift({
          day: prevmonthlastday--,
          prevmonth: true
        });
      }
      //本月的日期
      var count = 0;
      while (themonthdaysamount--) {
        this.dayarr.push({
          day: ++count
        });
      }
      var c = 42 - this.dayarr.length;
      var count2 = 1;
      while (c-- > 0) {
        this.dayarr.push({
          day: count2++,
          nextmonth: true
        });
      }
      var ass = this.theweek();
      return ass;
    }
  },
  mounted(){
    var ass =  this.theweek();
    this.currentWeek = Math.floor(new Date().getDate() / 6);
    this.benzhou = this.currentWeek;
    this.currentWeekNow = `${this.month}.${ass[this.currentWeek][1].day}~${this.month}.${ass[this.currentWeek][1].day + 4}`
  },
  methods: {
    // 切换到月
    changeMounth() {
      this.leftShow = false;
    },
    // 切换到周
    changeWeek() {
      this.leftShow = true;

      var ass =  this.theweek();
      this.currentWeek = Math.floor(new Date().getDate() / 6);
      this.benzhou = this.currentWeek;
      if (new Date().getMonth() + 1 == this.month) {
        this.benzhouFlag = true
      } else {
        this.benzhouFlag = false
      }
      this.currentWeekNow = `${this.month}.${ass[this.currentWeek][1].day}~${this.month}.${ass[this.currentWeek][1].day + 4}`
    },
    // 上一月
    prevMonutn() {
      this.month--;
      if (this.month < 1) {
        this.year--;
        this.month = 12;
      }
    },
    // 下一月
    nextMonutn() {
      this.month++;
      if (this.month > 12) {
        this.year++;
        this.month = 1;
      }
    },
    // 上一周
    prevWeek() {
       var _this = this;
      // alert("prev week!");
      this.currentWeek--;
      if (this.currentWeek < 1) {
        this.currentWeek = 1;
        return false;
      }

      if (this.benzhou == this.currentWeek) {
        this.benzhouFlag = true
      } else {
        this.benzhouFlag = false
      }
      this.currentWeekNow = `${_this.month}.${this.getDateTime[this.currentWeek][1].day}~${_this.month}.${this.getDateTime[this.currentWeek][1].day + 4}`
      
    },
    // 下一周
    nextWeek() {
      var _this = this;
      this.currentWeek++;

      if (this.currentWeek > 4) {
        this.currentWeek = 4;
        return false;
      }

      if (this.benzhou == this.currentWeek) {
        this.benzhouFlag = true
      } else {
        this.benzhouFlag = false
      }

      this.currentWeekNow = `${_this.month}.${this.getDateTime[this.currentWeek][1].day}~${_this.month}.${this.getDateTime[this.currentWeek][1].day + 4}`
      
    },
    // 日期到数组中 (6*7组)
    theweek: function() {
      var _arr = [];
      for (var i = 0; i < 6; i++) {
        var _week = [];
        for (var j = 0; j < 7; j++) {
          _week.push(this.dayarr[i * 7 + j]);
        }
        _arr.push(_week);
      }
      return _arr;
    }
  }
};
</script>

<style scoped lang="scss">
.calender {
  height: 100%;
}
.can_header {
  height: 50px;
  line-height: 50px;
  background: slategray;
}
.can_body {
  height: calc(100% - 50px);
  display: flex;
  .list_calender_left {
    width: 150px;
    padding-top: 48px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ddd;
    li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #ddd;
      &:first-child{
        border-top: 1px solid #ddd;
      }
    }
  }
  .list_calender_body {
    width: 100%;
    display: flex;
    flex-direction: column;
    .list_weekname {
      display: flex;
      align-items: center;
      height: 50px;
      background: skyblue;
      border-bottom: 1px solid #ddd;
      li {
        flex: 1;
        text-align: center;
      }
    }
    .list_calender_content {
      display: flex;
      flex-direction: column;
      height: calc(100% - 50px);
      .data_month, .data_week {
        flex: 1;
        // text-align: center;
        display: flex;
        li {
          flex: 1;
          width: 100%;
          align-items: center;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid #ddd;
          &.gray {
            color: gray;
          }
        }
      }
    }
  }
}
</style>
