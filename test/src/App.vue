<template>
  <div id="app">
      <div class="header">
          <v-header></v-header>
      </div>
      <div class="tab">
         <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab">
          <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab">
          <router-link to="/store">商家</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from "@/components/header/header";

export default {
    name:'App',
    components: {
    // eslint-disable-next-line vue/no-unused-components
    'v-header':header
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">

</style>
