<template>
  <img :src="source" alt="option">
</template>

<script>

export default {
  props: {
    source: String
  },
  setup() {
  },
}
</script>

<style scoped>

  img {
    height: 100%;
  }

</style>