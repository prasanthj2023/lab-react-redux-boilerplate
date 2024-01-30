import { useState } from "react";
import reducer from "./Reducer";
import { Increment, Decrement } from "./Actions";
import { createStore } from "redux";

const store = createStore(reducer);

export default function LikeCounter(){

    const [count,setCount] = useState(0);

    store.subscribe(() => {
        setCount(store.getState().count);
    });



    return(
        <>
            <div>
                <h1>Like Counter: {count}</h1>
                <button onClick={() => {store.dispatch(Increment())}}>Like</button>
                <button onClick={() => {store.dispatch(Decrement())}}>DisLike</button>
            </div>
        </>
    )
}