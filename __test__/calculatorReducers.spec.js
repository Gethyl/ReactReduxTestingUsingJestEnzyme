import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import calculatorReducers from '../src/js/reducers/calculatorReducers'

describe('>>>R E D U C E R --- Test calculatorReducers',()=>{
    it('+++ reducer for ADD_INPUT', () => {
        let state = {output:100}
        state = calculatorReducers(state,{type:"ADD_INPUTS",output:500})
        expect(state).toEqual({output:500})
    });
    it('+++ reducer for SUBTRACT_INPUT', () => {
        let state = {output:100}
        state = calculatorReducers(state,{type:"SUBTRACT_INPUTS",output:50})
        expect(state).toEqual({output:50})
    });

});
//*******************************************************************************************************