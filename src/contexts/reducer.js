export const initialState = { counter: 6 }

export const RESET_QUANTITY = "RESET_QUANTITY"
export const INCREASE_QUANTITY = "INCREASE_QUANTITY"

const reducer = (state, action)=>{
    console.log(state)
    switch(action.type){
        case RESET_QUANTITY:
            return {...state, counter:6 } 
             
        case INCREASE_QUANTITY:
            return {...state, counter: state.counter+6}   
            default:
                return state
    }
}

export default reducer