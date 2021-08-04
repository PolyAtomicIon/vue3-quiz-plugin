<template>
  <div class="text-label">{{source}}</div>
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

  .text-label {
    font-weight: bold;
  }

</style>