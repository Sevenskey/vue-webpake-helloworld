<template>
<p>{{ hello2 }}</p>
</template>

<style lang="less" scoped>
p {
    color: green;
}
</style>

<script>
export default {
    data () {
        return {
            hello2 : 'Another hello.',
        };
    }
}
</script>
