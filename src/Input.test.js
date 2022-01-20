import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}))
const setup = (success = false, secretWord = 'party') => {
    return shallow(<Input success={success} secretWord={secretWord} />)
}
describe('render', () => {
    describe('succes is true', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup(true)
        })
        test('Input component renders without any error', () => {
            const inputComponent = findByTestAttr(wrapper, "component-input");
            expect(inputComponent.length).toBe(1)
        })
        test("input box does not show", () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.exists()).toBe(false)
        });
        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.exists()).toBe(false)
        })
    })
    describe('success is false', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup(false)
        })
        test('Input component renders without any error', () => {
            const inputComponent = findByTestAttr(wrapper, "input-component");
            expect(inputComponent.length).toBe(1)
        })
        test("input box shows", () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.exists()).toBe(true)
        });
        test('submit button shows', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.exists()).toBe(true)
        })
    })
})


describe("state controlled input field", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })
    test('state updates with the value of input box upon change', () => {
        // mock function for react usestate
        // const mockSetCurrentGuess = jest.fn();
        // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        const inputBox = findByTestAttr(wrapper, "input-box");
        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train")
    })
    test('field is cleared upon submit button clicked', () => {
        const submitButton = findByTestAttr(wrapper, "submit-button");
        submitButton.simulate("click", { preventDefault() { } });
        expect(mockSetCurrentGuess).toHaveBeenLastCalledWith("")
    })
})