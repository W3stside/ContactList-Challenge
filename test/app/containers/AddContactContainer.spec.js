import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { AddContactContainer } from '../../../app/containers/AddContactContainer';

function setup() {
    const props = {
    }

    const enzymeWrapper = shallow(<AddContactContainer {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('<AddContactContainer />\'s Props and Render', () => {
    it('should render itself and sub components', () => {
        const {enzymeWrapper} = setup();
        // Regular html elems
        expect(enzymeWrapper.find('div')).to.have.length(1);
        expect(enzymeWrapper.find('FormWrapper')).to.have.length(1);
        expect(enzymeWrapper.find('InputField')).to.have.length(5);
    });
    describe('testing sub component PROPS', () => {
        it('<InputField />\'s should have correct placeholder props', () => {
            const {enzymeWrapper} = setup();
            const IPwithProps = enzymeWrapper.find('#ip1').props();

            expect(IPwithProps.placeholder).to.equal('First Name');
            // Assuming rest of siblings works FINE if this one works as theyre same
        })
    })
});
