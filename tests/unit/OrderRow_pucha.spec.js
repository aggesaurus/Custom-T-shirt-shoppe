import { mount } from '@vue/test-utils'
import OrderRow_pucha from '@/components/OrderRow_pucha.vue'
let expectedOrderData = {
    id: "3",
    users_id: "1014",
    products_id: "10002",
    quantity: "2",
    text: "I'M COOL",
    image: "stamp"
}

// US1Pucha: As a user I want to be able to order the same previous designed t-shirt.
describe('OrderRow_pucha.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(OrderRow_pucha)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('Customize my tshirt', () => {
    const wrapper = mount(OrderRow_pucha)
    expect(wrapper.vm.orderNew).toBeDefined()
  })
  test('Choose the previous designed t-shirts', () => {
    const wrapper = mount(OrderRow_pucha)
    wrapper.vm.choosePrevText(expectedOrderData.text)
    wrapper.vm.choosePrevImage(expectedOrderData.image)
    expect(wrapper.vm.orderNew.text).toEqual(expectedOrderData.text)
    expect(wrapper.vm.orderNew.image).toEqual(expectedOrderData.image)
  })
})
