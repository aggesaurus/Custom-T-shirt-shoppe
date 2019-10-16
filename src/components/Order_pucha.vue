<template></template>
<script>
export default {
  data() {
    return {
      orderNew: {
        id: "",
        users_id: "",
        packaged: "",
        sent: "",
        delivered: "",
        tShirtPreview: ""
      },
      doTheOrder(packaged) {
        this.orderNew.packaged = packaged;
      }
    };
  }
};
</script>