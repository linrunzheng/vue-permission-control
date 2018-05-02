<template>
    <div>
       首页信息
       首页信息
       首页信息
       首页信息
       首页信息
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.grow {
    &__item {
        &--detail{
            >div{
                float: left;
            }
        }
        &--number{
            color:#374761;
            font-size: 30px;
        }
        &--percentage {
            height: 44px;
            line-height: 44px;
            background: #364860;
            color: #fff;
        }
    }
}
</style>
