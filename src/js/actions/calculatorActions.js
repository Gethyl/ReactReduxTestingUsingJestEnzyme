export const addInputs = (output) => {
    return {
        type: "ADD_INPUTS",
        output: output 
    }
}

export const subtractInputs = (output) => {
    return {
        type: "SUBTRACT_INPUTS",
        output: output 
    }
}