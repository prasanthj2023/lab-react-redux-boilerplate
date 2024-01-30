
const increment = "INCREMENT";
const decrement = "DECREMENT";

export function Increment(){
    return {type: increment};
}

export function Decrement(){
    return{type: decrement};
}