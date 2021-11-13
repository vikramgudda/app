import store from "./store"

export default function Counter() {
    const Increase=()=>{
     store.dispatch({type:"Increment"});  
    }
    const Dec=()=>{
        store.dispatch({type:"Decrement"});  
       }
       const Not=()=>{
        store.dispatch({type:"Nothing"});  
       }
    return (
        <div>
           <button onClick={Increase}>Inc</button> 
           <button onClick={Dec}>Dec</button> 
           <button onClick={Not}>Not</button> 
       
        </div>
    )
}
