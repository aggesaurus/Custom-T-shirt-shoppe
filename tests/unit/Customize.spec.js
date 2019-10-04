import { mount } from '@vue/test-utils'
import TShirtCustomize from '@/components/TShirtCustomize.vue'
// let customize = expectedCustomData 
let expectedCustomData = {
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
// userstory 2: Som kund vill jag kunna välja storlek på min t-shirt. 
describe('TShirtCustomize.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TShirtCustomize)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('setSize', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.setSize(expectedCustomData.Size)
    expect(wrapper.vm.fillingCustomData.Size).toEqual(expectedCustomData.Size) 
  })
  // userstory 3: Som kund vill jag kunna välja färg på min t-shirt.
  test('setColor', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.setColor(expectedCustomData.Color)
    expect(wrapper.vm.fillingCustomData.Color).toEqual(expectedCustomData.Color) 
  })
  // userstory 4: Som kund vill jag kunna skapa min egen t-shirt.
  test('Customize my own shirt', () => {
    const wrapper = mount(TShirtCustomize)
    expect(wrapper.vm.fillingCustomData).toBeDefined()
  })
  // userstory 5: Som kund vill jag kunna ange text för min t-shirt.
  test('Add text', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.addText(expectedCustomData.Text)
    expect(wrapper.vm.fillingCustomData.Text).toEqual(expectedCustomData.Text)
  })
  // userstory 11: Som kund vill jag kunna ladda upp en egen bild på min t-shirt
  test('upload a picture for my t-shirt', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.uploadPicture(expectedCustomData.Picture)
    expect(wrapper.vm.fillingCustomData.Picture).toEqual(expectedCustomData.Picture)
  })  
  // userstory 13: Som kund vill jag kunna ändra storlek på min text
  test('Change font size of the text on my t-shirt', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.changetextFontsize(expectedCustomData.Fontsize)
    expect(wrapper.vm.fillingCustomData.Fontsize).toEqual(expectedCustomData.Fontsize)  
  })
})
