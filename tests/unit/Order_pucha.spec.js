import { mount } from '@vue/test-utils'
import Order_pucha from '@/components/Order_pucha.vue'
let expectedOrderData = {
    id: "1112",
    users_id: "1014",
    packaged: "yes",
    sent: "no",
    delivered: "no",
    tShirtPreview: "I'm cool with stamp pic"
}

// US1Pucha: As a user I want to be able to order the same previous designed t-shirt.
describe('Order_pucha.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Order_pucha)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('Order my tshirt', () => {
    const wrapper = mount(Order_pucha)
    expect(wrapper.vm.orderNew).toBeDefined()
  })
  test('Do the order of the chosen t-shirts', () => {
    const wrapper = mount(Order_pucha)
    wrapper.vm.doTheOrder(expectedOrderData.packaged)
    expect(wrapper.vm.orderNew.packaged).toEqual(expectedOrderData.packaged)
  })
})
