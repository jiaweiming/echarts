<template>
  <div id="main-container">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18"><div class="grid-content bg-purple"><div id="main"></div></div></el-col>
      </el-row>
    <div class="update-data">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="12"><div class="grid-content bg-purple"><span>请在数据刷新后点击存储，以防重复数据</span></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"><div class="grid-content bg-purple"><span>{{time}}</span>秒后刷新</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"><el-button @click="toHistory()" type='primary'>立即存储</el-button></div></el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

  export default {
    data(){
      return {
        message:"home主页",
        time:10,
        timer:null
      }
    },
    mounted(){
      this.drawLine();
      this.update()
    },
    computed:{
      ...mapGetters(['initValue','initItem','initDataMenu'])
    },
    destroyed(){
      if(this.timer){
        clearInterval(this.timer)
      }
    },
    methods:{
      ...mapActions(['updateData','sendDataToHistory']),
      toHistory(){
        this.$store.dispatch('sendDataToHistory');
         this.$message({
            message: '保存成功！',
            type: 'success'
          });
      },
      drawLine() {
      let myChart = this.$echarts.init(document.getElementById('main'));
      myChart.setOption({
        title: { text: '动态数据展示---10秒刷新' },
        tooltip: {},
        xAxis: {
          data: this.initItem
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.initValue
        }]
      });
    },
    update(){
      let that = this;
      that.timer = setInterval(function(){
        that.time--; 
        if(that.time < 0){
          that.$store.dispatch('updateData');
          that.drawLine();
          that.time = 10;
        }
      },1000)
    }
  }
  }
</script>
<style lang="scss">

#main{
  width: 600px;
  height: 340px;
}
.el-button--primary{
  width:100%
}
.grid-content{
  button{
    span{
      color: #fff
    }
  }
  span{
    color:orangered;
    margin: 0 5px
  }
}
@media screen and (max-width: 500px) {
  #main{
    width: 90%;
    height: 340px;
  }
}
</style>
