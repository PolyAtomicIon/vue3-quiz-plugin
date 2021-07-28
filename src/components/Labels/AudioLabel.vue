<template>
  <img 
    src="https://yt3.ggpht.com/ytc/AKedOLSilrN3bx_7mqy_RRmdRFiMLPgc8e537GbYW5Sq=s900-c-k-c0x00ffffff-no-rj"
    @click="play"
  />
</template>

<script>

export default {
  props: {
    source: String
  },
  setup() {
    return {
    }
  },
  methods: {
    play(){
      const audioFile = new Audio(this.source);
      audioFile.play();
    }
  }
}
</script>

<style scoped>
  
  img {
    height: 100%;
  }

</style>