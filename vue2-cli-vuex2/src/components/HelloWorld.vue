<template>
  <div style="color:white">    
    {{this.$store.state.numero}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>