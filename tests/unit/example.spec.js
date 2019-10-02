import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
//import tshirt placeholder from '@/components/t-shirt.vue'
//import customize from '@/components/customize.vue'

// userstory 2 test 
describe('tshirt', () =>{
  test('is a Vue instance', () => {
    const wrapper = mount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // test('Choose size', () =>{
  // const wrapper = mount(t-shirt placeholder)
  // const sizes = ['s', 'm', 'l', 'xl']
  // const wrapper = shallowMount(List, {
  //   propsData: { sizes }
  // })
  // for (let index = 0; index < 4; index++) {
  //   expect(wrapper.findAll('li')).toHaveLength(sizes.length)
  //   expect.
  // }
  test('Choose size', () =>{
    const wrapper = mount(tshirt placeholder)
    const sizes = ['s', 'm', 'l', 'xl']
    const wrapper = shallowMount(List, {
      propsData: { sizes }
    })
    expect(sizes).toContain('s');
    expect(new Set(sizes)).toContain('s');
    })    
})

// userstory 4 test
describe('tshirt', () =>{
  test('is a Vue instance', () => {
    const wrapper = mount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
})
test('customize shirt button', () =>{
  const wrapper = mount(customize)
  expect(customize()).toBeDefined();
})
})