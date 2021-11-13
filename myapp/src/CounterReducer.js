let initialState={
    count:0
}
function CounterReducer(state=initialState,action) {
    if(action.type === "Increment")
    {
        return{
            ...state,
            count:state.count+1
        }
    }
    if(action.type === "Decrement")
    {
        return{
            ...state,
            count:state.count-1
        }
    }
    if(action.type === "Nothing")
    {
        return{
            ...state
        }
    }
    
}
export default CounterReducer;
