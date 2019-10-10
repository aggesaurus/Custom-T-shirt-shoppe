import { mount } from '@vue/test-utils'
import OrderConfirmation from '@/components/OrderConfirmation.vue'


let expectedOrderConfirmData = {
    firstName:" John ",
    lastName:" Smith ",
    deliveryAdd: " 43231, Mount.Claire, St.Jose",
    OrderNr: "123456",
    OrderDatum: "10-7-2019",
    Amount: "1",
    TotalPrice:"150",
    FrontPreview: {
        Color: "Blue",
        Model: "Long arms",
        Picture: "mycar.jpg",
        Text: {
            Fontstyle: "Calibri",
            Fontsize: "18",
            FontColor: "Yellow"
        }
    
    }
}

//us. 10 som kund vill jag se en orderbekräftelse
describe('OrderConfirmation.vue', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(OrderConfirmation)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('Define my confirmation data', () => {
        const wrapper = mount(OrderConfirmation)
        expect(wrapper.vm.fillingOrderData).toBeDefined()
    })

    test('show my order confirmation ', () => {
        const wrapper = mount(OrderConfirmation)
        expect(wrapper.vm.fillingOrderData).toEqual(expectedOrderConfirmData) 
      })
    })