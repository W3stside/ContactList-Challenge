/* eslint no-console: 0 */
// Expect lib
import {expect} from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// CONSTANTS & ACTIONS to test with
import { handleTextInput } from '../../../app/actions'
import { addContact } from '../../../app/actions/contactActions'
import * as t from '../../../app/actions/types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

/** EXAMPLE React Redux Sync Actions Unit Test
 * How to test Action Creators
 */

describe('actions', () => {
    it('CONTACTS_TEXT_INPUT action should add Input', () => {
        // Caching actionCreator args
        const type = t.CONTACTS_TEXT_INPUT;
        const input = 'David';
        const field = 'firstName';

        // Custom curried Action
        const firstNameInput = handleTextInput(type)(field);

        const expectedAction = {
            type: 'CONTACTS_TEXT_INPUT',
            payload: {
                input: 'David',
                field: 'firstName',
            }
        };

        expect(firstNameInput(input)).to.eql(expectedAction);
    });
    it('CONTACTS_ADD action should add Contact', () => {
        // Caching actionCreator args
        /* eslint prefer-const:0 */
        let contactID = 0;
        const info = {
            id: '',
            firstName: 'Dave',
            lastName: 'Save',
            dob: '1234/12/12',
            phone: '1231231234',
            email: 'd@d.com'
        }

        const expectedActions = [
            {
                type: t.CONTACTS_ADD,
                payload: {
                    info: {
                        id: contactID,
                        firstName: 'Dave',
                        lastName: 'Save',
                        dob: '1234/12/12',
                        phone: '1231231234',
                        email: 'd@d.com'
                    }
                }
            },
            {
                type: t.CONTACTS_CLEAR
            }
        ]

        const store = mockStore({ contacts: [] })

        return store.dispatch(addContact(info)).then(() => {
            // return of async actions
            expect(store.getActions()).to.eql(expectedActions)
        })
    });
});
