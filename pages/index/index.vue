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
import Hello from '../../libs/hello.js'

const helloTest = new Hello();

export default {
    data () {
        return {
            hello : 'Hello, world!',
        };
    }
}
</script>
