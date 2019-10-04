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
    Fonttheme: "Calibri",   //Pucha added this
    Fontsize: "18",
    Fontstyle: "Bold",      //Pucha changed it to Bold
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






  //Pucha's arbete:
  //User story Nr 20: Som kund vill jag få ett urval modeller på t-shirts att välja på.
  test('Choose t-shirt model', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.chooseModel(expectedCustomData.Model)
    expect(wrapper.vm.fillingCustomData.Model).toEqual(expectedCustomData.Model)
  })


  //User story Nr 25: Som kund vill jag kunna välja material på min t-shirt.
  test('Choose material for my t-shirt', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.chooseMaterial(expectedCustomData.Material)
    expect(wrapper.vm.fillingCustomData.Material).toEqual(expectedCustomData.Material)
  })


  //User story Nr 14: Som kund vill jag kunna ändra färg på texten.
  test('Change text color on my t-shirt', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.setFontColor(expectedCustomData.FontColor)
    expect(wrapper.vm.fillingCustomData.FontColor).toEqual(expectedCustomData.FontColor)
  })


  //User story Nr 15: Som kund vill jag kunna ändra stil på texten.
  test('Change font style of text on my t-shirt', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.setFontStyle(expectedCustomData.Fontstyle)
    expect(wrapper.vm.fillingCustomData.Fontstyle).toEqual(expectedCustomData.Fontstyle)
  }) 


  //User story Nr 16: Som kund vill jag kunna ändra typsnitt på min text.
  test('Change font theme of text on my t-shirt', () => {
    const wrapper = mount(TShirtCustomize)
    wrapper.vm.setFontTheme(expectedCustomData.Fonttheme)
    expect(wrapper.vm.fillingCustomData.Fonttheme).toEqual(expectedCustomData.Fonttheme)
  })
})
