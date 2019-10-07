import { mount } from '@vue/test-utils'
import TShirtCustomize from '@/components/TShirtCustomize.vue'
// let customize = expectedCustomData 
// let expectedCustomData = {
//   Size: "Medium",
//   Color: "Blue",
//   Material: "Cotton",
//   Model: "Long arms",
//   Picture: "mycar.jpg",
//   Text: {
//     Fontstyle: "Calibri",
//     Fontsize: "18",
//     FontColor: "Yellow"
//   }
// }
let expectedCustomData = {
  FrontCustomize: {
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
  },
  BackCustomize: {
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
  //userstory 18: Som kund vill jag kunna skapa fram/baksida på min t-shirt.
  test('Customize front', () => {
    const wrapper = mount(TShirtCustomize)
    expect(wrapper.vm.fillingCustomData.FrontPreview).toBeDefined()
  })
  test('Customize back', () => {
    const wrapper = mount(TShirtCustomize)
    expect(wrapper.vm.fillingCustomData.BackPreview).toBeDefined()
  })
  //userstory 19: Som kund vill jag kunna ha samma möjligheter att arbeta med text, färg och bild på baksidan som jag har på framsidan.
  test('Back customize for text, color & picture', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.addText(expectedCustomData.Text)
    wrapper.vm.setColor(expectedCustomData.Color)
    wrapper.vm.addPicture(expectedCustomData.Picture)
    expect(wrapper.vm.fillingCustomData.Text).toEqual(expectedCustomData.Text)
    expect(wrapper.vm.fillingCustomData.Color).toEqual(expectedCustomData.Color)
    expect(wrapper.vm.fillingCustomData.Picture).toEqual(expectedCustomData.Picture)
  })  
})
