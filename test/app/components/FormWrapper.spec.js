import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import FormWrapper from '../../../app/components/FormWrapper'
import InputField from '../../../app/components/InputField'

function setup() {
    const props = {
        submitAction: sinon.spy()
    }

    const enzymeWrapper = mount(<FormWrapper {...props} ><InputField/></FormWrapper>);

    return {
        props,
        enzymeWrapper
    }
}

describe('<FormWrapper /> and SubComponents', () => {
    it('should render itself and sub components', () => {
        const {enzymeWrapper} = setup();
        // Regular html elems
        expect(enzymeWrapper.find('div')).to.have.length(2);
        expect(enzymeWrapper.find('form')).to.have.length(1);
        // SubmitButton
        const Button = enzymeWrapper.find('SubmitButton');
        expect(Button).to.have.length(0);
    });
    // ACTION CREATOR DISPATCH Tests
    // Form onSubmit
    it('should dispatch "submitAction" action Creator', () => {
        const { enzymeWrapper, props} = setup();
        const Form = enzymeWrapper.find('form');
        // Fire onSubmit prop from Button click
        Form.props().onSubmit();
        expect(props.submitAction.callCount).to.equal(1);
    });
});
