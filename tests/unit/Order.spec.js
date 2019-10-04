import { mount } from '@vue/test-utils'
import Order from '@/components/Order.vue'
let expectedOrderData = {
        firstName:'',
        lastName:"",
        Address:"",
        orderNr:"",
        Amount:'',
        Price:"",
        orderHistory:'',
        tShirtPreview:'',
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
})