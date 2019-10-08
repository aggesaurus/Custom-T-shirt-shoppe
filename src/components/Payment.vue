<template>
  
</template>
<script>
export default {
  data() {
    return {
      fillingPaymentData: {
        PresentCard: "",
        Invoice: "",
        DirectPaymentViaBank: "",
        Card: "",
        Swisha: "",
        Paypal: "",
        TotalPrice: ""
      },
      setPayInvoice(Invoice) {
        this.fillingPaymentData.Invoice = Invoice;
      },
      setPayCard(Card) {
        this.fillingPaymentData.Card = Card;
      }
    };
  }
};
</script>