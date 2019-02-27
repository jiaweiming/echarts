<template>
  <div id="app">
    <el-row>
    <el-col :span="8"><div class="grid-content bg-purple-dark"><router-link active-class="actived" :to="'/home'">首页</router-link></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-dark"><router-link active-class="actived" :to="'/latest'">存储页</router-link></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-dark"><router-link active-class="actived" :to="'/history'">历史页</router-link></div></el-col>
  </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
export default {
  name: 'app',
  data () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Home
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #999;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    line-height: 36px;
    a{
      color: #fff
    }
    .actived{
      color: blue;
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
