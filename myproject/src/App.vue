<template>
  <div id="app">
      <div class="header">
          <v-header v-bind:seller="seller"></v-header>
      </div>
      <div class="tab">
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab">
          <router-link to="/pinglun">评论</router-link>
      </div>
      <div class="tab">
          <router-link to="/shangjia">商家</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from "./components/header/header";
    const ERR_OK = 0;
    export default {
        data(){
            return{
                seller:{}
            }
        },
        created() {
            this.$http.get("").then((response) =>{
                response = response.json();
                if (response.errno === ERR_OK){
                    this.seller = response.body;
                    console.log(this.seller);
                }
            })
        },
        components:{
            'v-header':header
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">



</style>
