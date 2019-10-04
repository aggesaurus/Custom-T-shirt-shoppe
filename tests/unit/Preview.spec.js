import { mount } from '@vue/test-utils'
import Preview from '@/components/Preview.vue'
// let customize = expectedCustomData 
let expectedCustomData = {
  Preview: "Tshirt",
  Size: "Medium",
  Color: "Blue",
  Material: "Cotton",
  Model: "Long arms",
  Picture: "mycar.jpg",
  Text: {
    Fontstyle: "Calibri",
    Fontsize: "18",
    FontColor: "Yellow"
  }
}
// userstory 6: Som kund vill jag kunna se hur min t-shirt kommer att se ut under tiden jag skapar den.
describe('Preview.vue', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Preview)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('Preview my tshirt', () => {
        const wrapper = mount(Preview)
        expect(wrapper.vm.previewData).toBeDefined()
    })
})        