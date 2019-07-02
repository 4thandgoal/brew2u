import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Routes from './Routes'

Enzyme.configure({ adapter: new Adapter() })
// is there a reference to intro on the Landing.js file?
it('should display an introduction message', () => {
    const landing = mount(<Landing />)
    expect(landing.find('#intro').text()).toMatch(/\w/i)
})
// changed /App to /Landing since Brew2U is on the Landing.js component
it('gives a message of title page name', ()=>{
  const app = mount(<Landing />)
  expect(app.find('h2').text()).toEqual('Brew2U')
})
 
it('gives text of navbar', ()=>{
  const app = mount(<Routes />)
  expect(app.find('h1').text()).toEqual('navbar')
})
 
it('Landing renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Landing />, div)
})
// it("renders an image", () => {
//         const logo = shallow(<Logo />);
//         expect(logo.find("img").prop("src")).toEqual(logoImage);
// });
 it("becomes active when the button is clicked", () => {
  const wrapper = shallow(<Routes />);
  wrapper.find(".open-menu-button-class").simulate("click");
  expect(wrapper.state("active")).toBeTruthy();
})
 
 it("renders options when active", () => {
  const wrapper = shallow(<Routes />);
  wrapper.setState({ active: true });
  expect(wrapper.find(".option").length).toBe(2);
})