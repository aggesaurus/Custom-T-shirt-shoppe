import { mount } from '@vue/test-utils'
import Order from '@/components/Order.vue'
let expectedOrderData = {
  firstName: 'Jon',
  lastName: "Bastardo",
  Address: "Winterfell",
  orderNr: "12345",
  Amount: '2',
  originalPrice: "200",
  discountCode: "OKT19",
  totalPrice: "180",
  orderHistory: '',
  tShirtPreview: '',
}

// US8: Som kund vill jag kunna beställa min t-shirt.
describe('Order.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Order)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('Order my tshirt', () => {
    const wrapper = mount(Order)
    expect(wrapper.vm.orderData).toBeDefined()
  })
  // US7: Som kund vill jag kunna se vad min t-shirt kommer att kosta.
  test('Order Price', () => {
    const wrapper = mount(Order)
    wrapper.vm.orderPrice(expectedOrderData.Price)
    expect(wrapper.vm.orderData.Price).toEqual(expectedOrderData.Price)
  })
  // US12: Som kund vill jag kunna välja antal t-shirts att beställa.
  test('Order the amount of t-shirts', () => {
    const wrapper = mount(Order)
    wrapper.vm.orderAmount(expectedOrderData.Amount)
    expect(wrapper.vm.orderData.Amount).toEqual(expectedOrderData.Amount)
  })

  //User story Nr 24: Som kund vill jag kunna använda en rabattkod.
  test('Order the amount of t-shirts', () => {
    const wrapper = mount(Order)
    wrapper.vm.setDisCode(expectedOrderData.discountCode)
    expect(wrapper.vm.orderData.discountCode).toEqual(expectedOrderData.discountCode)
  })

  // US28:Som kund vill jag kunna se min orderhistorik. 
  test('See of my order history', () => {
    const wrapper = mount(Order)
    wrapper.vm.orderHistory(expectedOrderData.orderHistory)
    expect(wrapper.vm.orderData.orderHistory).toEqual(expectedOrderData.orderHistory)
  })
  // US29:Som kund vill jag kunna se hur t-shirts i min orderhistorik ser ut 
  test('See how my t-shirt look like on the order history', () => {
    const wrapper = mount(Order)
    wrapper.vm.tShirtPreview(expectedOrderData.tShirtPreview)
    expect(wrapper.vm.orderData.tShirtPreview).toEqual(expectedOrderData.tShirtPreview)

  })
})