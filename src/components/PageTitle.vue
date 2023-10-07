<template>
    <h3 class="title">
        <slot></slot>
    </h3>
</template>

<script>
    export default {
      name: "PageTitle"
    }
</script>

<style scoped>
    .title {
        color: #000;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
</style>