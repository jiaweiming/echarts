<template>
  <div id="main-container">
      <el-row type="flex" class="row-bg" justify="center">
        <div id="box"></div>
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
      ...mapGetters(['initValue','initItem','lastTenLists'])
    },
    methods:{
      ...mapActions(['updateData']),
      drawLine() {
      let oMyChart = this.$echarts.init(document.getElementById("box"));
        var option = {
                backgroundColor: '#FBFBFB',
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:this.initItem
                },

                calculable : true,
                xAxis : [
                    {
                        axisLabel:{
                            rotate: 30,
                            interval:0
                        },
                        axisLine:{
                          lineStyle :{
                              color: '#CECECE'
                          }
                        },
                        type : 'category',
                        boundaryGap : false,
                        data : [1,2,3,4,5,6,7,8,9,10]
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            lineStyle :{
                                color: '#CECECE'
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:this.initItem[0],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['gray'],
                        data:[800, 300, 500, 800, 300, 600,500,600]
                    },
                    {
                        name:this.initItem[1],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['pink'],
                        data:[600, 300, 400, 200, 300, 300,200,400]
                    },
                    {
                        name:this.initItem[2],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['red'],
                        data:[455, 666, 777, 44, 333, 32,222,80]
                    },
                    {
                        name:this.initItem[3],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['blue'],
                        data:[600, 300, 400, 200, 300, 300,200,400]
                    },
                    {
                        name:this.initItem[4],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['green'],
                        data:[600, 300, 400, 200, 300, 300,200,400]
                    },
                    {
                        name:this.initItem[5],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['orange'],
                        data:[600, 300, 400, 200, 300, 300,200,400]
                    },
                ]
            };
    
    
        oMyChart.setOption(option);
      },
    }
  }
</script>
<style lang="scss">
  #box{
    width:800px;
    height:340px
  }
</style>
