<template></template>
<script>
export default {
  data() {
    return {
      orderNew: {
        id: "",
        users_id: "",
        products_id: "",
        quantity: "",
        text: "",
        image: ""
      },
      choosePrevText(text) {
        this.orderNew.text = text;
      },
      choosePrevImage(image) {
        this.orderNew.image = image;
      }
    };
  }
};
</script>