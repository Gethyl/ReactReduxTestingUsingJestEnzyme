
import {addInputs,subtractInputs} from '../src/js/actions/calculatorActions'

describe('>>>A C T I O N --- Test calculatorActions',()=>{
    it('+++ actionCreator addInputs', () => {
        const add = addInputs(50)
        expect(add).toEqual({type:"ADD_INPUTS",output:50})
    });

    it('+++ actionCreator subtractInputs', () => {
        const subtract = subtractInputs(-50)
        expect(subtract).toEqual({type:"SUBTRACT_INPUTS",output:-50})
    });
});
//*******************************************************************************************************