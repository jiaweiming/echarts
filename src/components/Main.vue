<template>
  <div id="main">
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item,index) in products.carousel" :key="index">
          <img :src="item.image" :alt="item.linkTo">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner">
      <el-row :gutter="10" class="product-container">
        <el-col :span="12" v-for="(item,index) in products.lists" :key="index" class="product-single">
          <router-link tag="div" :to="'/products/'+item.id">
            <div class="grid-content bg-purple">
              <img :src="item.image[0]" :alt="item.title">
              <h5 class="title">{{item.title}}</h5>
              <span class="price">{{money(item.price )}}</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: '首页内容'
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
