<template>
    <div class="header">
        <div class="neirong">
            <div class="shangjia-touxiang">
                <div class="avater">
                    <img width="64" height="64" :src="seller.avater">
                </div>
            </div>
        </div>
        <div class="gonggao">
            <div class="title">
                <span class="brand"></span>
                <span class="name">{{seller.name}}</span>
            </div>
            <div class="gonggaonr">
                {{seller.description}}/{{seller.deliveryTime}}分钟送达
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            seller:{
                type:Object,
            }
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
