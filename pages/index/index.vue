<template>
<p>{{ hello }}</p>
</template>

<style lang="less" scoped>
body {

    p {
        background-image: url(./img/bg.png);
        color: red;
    }
}
</style>

<script>
export default {
    data () {
        return {
            hello : 'Hello, world!',
        };
    }
}
</script>
