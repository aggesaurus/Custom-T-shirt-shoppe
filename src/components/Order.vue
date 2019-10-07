<script>
export default {
  data() {
    return {
      orderData: {
        firstName: "",
        lastName: "",
        Address: "",
        orderNr: "",
        Amount: "",
        originalPrice: "",
        discountCode: "",
        totalPrice: "",
        orderHistory: "",
        tShirtPreview: ""
      },
      setFirstName(name) {
        this.orderData.firstName = name;
      },
      setTShirt(tShirt) {
        this.orderData.tShirt = tShirt;
      },
      orderAmount(Amount) {
        this.orderData.Amount = Amount;
      },
      orderHistory(orderHistory) {
        this.orderData.orderHistory = orderHistory;
      },
      tShirtPreview(tShirtPreview) {
        this.orderData.tShirtPreview = tShirtPreview;
      },
      orderPrice(Price) {
        this.orderData.Price = Price;
      },
      setDisCode(discountCode) {
        this.orderData.discountCode = discountCode
      }
    };
  }
};
</script>