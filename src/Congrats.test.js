import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />)
}
test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1)
})

test('renders no text when success props is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats").text();
    expect(component).toBe('')

})

test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, "congrats-message").text();
    expect(message.length).not.toBe(0)
})