import { mount } from '@vue/test-utils'
import Payment from '@/components/Payment.vue'

let expectedPaymentData = {
    PresentCard: "",
    Invoice: "",
    DirectPaymentViaBank: "",
    Card: "",
    Swisha: "",
    Paypal: "",
    TotalPrice: ""
}

//User story Nr 9: Som kund vill jag kunna betala för min t-shirt.
describe('Payment.vue', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Payment)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('I can pay my t-shirt', () => {
        const wrapper = mount(Payment)
        expect(wrapper.vm.fillingPaymentData).toBeDefined()
    })

    //User story Nr 21: Som kund vill jag kunna betala med faktura.
    test('I pay my t-shirt with invoice', () => {
        const wrapper = mount(Payment)
        wrapper.vm.setPayInvoice(expectedPaymentData.Invoice)
        expect(wrapper.vm.fillingPaymentData.Invoice).toEqual(expectedPaymentData.Invoice)
    })

    //User story Nr 22: Som kund vill jag kunna betala med kort.
    test('I pay my t-shirt with card', () => {
        const wrapper = mount(Payment)
        wrapper.vm.setPayCard(expectedPaymentData.Card)
        expect(wrapper.vm.fillingPaymentData.Card).toEqual(expectedPaymentData.Card)

    })


})









