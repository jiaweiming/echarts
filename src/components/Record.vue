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
        if(this.lastTenLists.length < 2){
          this.$message({
            message: '数据缺少，请在home页添加不同的数据',
            type: 'warning'
          });
        }
        let arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[];  
        //创建该6个数组，并将10条数据的内部数组的值对于插入到各自的数组中，
        //由于数据动态的，且格式是数组
        for(let i=0;i<this.lastTenLists.length;i++){
          this.lastTenLists[i].map((item,index)=>{
            switch(index){
              case 0:
              arr1.push(item);
              break;
              case 1:
              arr2.push(item);
              break;
              case 2:
              arr3.push(item);
              break;
              case 3:
              arr4.push(item);
              break;
              case 4:
              arr5.push(item);
              break;
              case 5:
              arr6.push(item);
              break;
            }
          })
        }
        
      let myChart = this.$echarts.init(document.getElementById("box"));
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
                        data:arr1
                    },
                    {
                        name:this.initItem[1],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['pink'],
                        data:arr2
                    },
                    {
                        name:this.initItem[2],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['red'],
                        data:arr3
                    },
                    {
                        name:this.initItem[3],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['blue'],
                        data:arr4
                    },
                    {
                        name:this.initItem[4],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['green'],
                        data:arr5
                    },
                    {
                        name:this.initItem[5],
                        type:'line',
                        symbol:'none',
                        smooth: 0.2,
                        color:['orange'],
                        data:arr6
                    },
                ]
            };
    
    
        myChart.setOption(option);
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
