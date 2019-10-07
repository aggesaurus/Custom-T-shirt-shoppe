  <script>
export default{
  data(){
    return{
      orderData:{
        firstName:'',
        lastName:"",
        Address:"",
        orderNr:"",
        Amount:'',
        Price:"",
        orderHistory:'',
        tShirtPreview:'',
      },
      setFirstName(name){
        this.orderData.firstName = name;
      },
      setTShirt(tShirt){
        this.orderData.tShirt = tShirt;
      }
    }
  }
}
</script>