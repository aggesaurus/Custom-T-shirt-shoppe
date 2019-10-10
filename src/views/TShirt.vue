<template>
  <div class="row">
    <TShirtCustomize class="col-6"></TShirtCustomize>
    <Preview class="col-6"></Preview>
  </div>
</template>
<script>
  import TShirtCustomize from '@/components/TShirtCustomize.vue'
  import Preview from '@/components/Preview.vue'
  export default {
    components:{
      TShirtCustomize,
      Preview
    }
  }
</script>
