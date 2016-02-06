import expect from 'expect';
import { fromJS } from 'immutable';
import agent from '../PaymentAgentReducer';
import {
    SERVER_DATA_PAYMENT_AGENTS,
    UPDATE_PAYMENT_AGENT_FIELD,
} from '../../_constants/ActionTypes';

describe('PaymentAgentReducer',()=>{
    it('should update data payment agent list',()=>{
        const beforeState = fromJS({});
        const action = {
            type: SERVER_DATA_PAYMENT_AGENTS,
            serverResponse:{
                paymentagent_list: {
                    list: ['First Agent ','Second Agent'],
                },
            },
        };
        const expectedState = fromJS({paymentAgents: ['First Agent ','Second Agent']});
        const actualState = agent(beforeState, action);
        expect(actualState).toEqual(expectedState);
    });

    it('should should update payment agent field with the given value',()=>{
        const beforeState = fromJS({});
        const action = {
            type: UPDATE_PAYMENT_AGENT_FIELD,
            fieldName: 'username',
            fieldValue: 'xxx',
        };
        const expectedState = fromJS({ username: 'xxx',});
        const actualState = agent(beforeState,action);
        expect(actualState).toEqual(expectedState);
    })
});