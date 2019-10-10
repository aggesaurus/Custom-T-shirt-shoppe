import { mount } from '@vue/test-utils'
import Payment from '@/components/Payment.vue'

let expectedPaymentData = {
    PresentCard: "Emporia Shopping Mall",
    Invoice: "Klarna",
    DirectPaymentViaBank: "Nordea Bank",
    Card: "Credit Card ICA Banken",
    Swisha: "",
    Paypal: "",
    TotalPrice: "300"
}


//User story Nr 23: Som kund vill jag kunna välja betalningsalternativ.
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
