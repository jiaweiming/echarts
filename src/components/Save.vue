<template>
  <div id="main-container">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18"><div class="grid-content bg-purple"><div id="save"></div></div></el-col>
      </el-row>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    data(){
      return {
        message:"保存页",
      }
    },
    mounted(){
      this.drawLine();
    },
    computed:{
      ...mapGetters(['initValue','initItem'])
    },
    methods:{
      ...mapActions(['updateData']),
      drawLine() {
      let myChart = this.$echarts.init(document.getElementById('save'));
      myChart.setOption({
        title: { text: '数据展示---最新的一条' },
        series : [
          {
              name: '实时情况',
              type: 'pie',
              radius: '55%',
              data:[
                  {value:this.initValue[0], name:this.initItem[0]},
                  {value:this.initValue[1], name:this.initItem[1]},
                  {value:this.initValue[2], name:this.initItem[2]},
                  {value:this.initValue[3], name:this.initItem[3]},
                  {value:this.initValue[4], name:this.initItem[4]},
                  {value:this.initValue[5], name:this.initItem[5]}
              ]
          }
      ]
    })
    },
    }
  }
</script>
<style lang="scss">
  #save{
    width:100%;
    height:340px
  }
</style>
