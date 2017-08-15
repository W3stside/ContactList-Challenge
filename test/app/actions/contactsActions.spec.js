/* eslint no-console: 0 */
// Expect lib
import {expect} from 'chai'
// CONSTANTS & ACTIONS to test with
import { handleTextInput } from '../../../app/actions'
import * as t from '../../../app/actions/types'

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
});
