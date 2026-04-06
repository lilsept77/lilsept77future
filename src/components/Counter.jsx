import React, {useState} from "react";

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus () {
        setArr(preArr => [...preArr, "+"])
    }

    function addMinus () {
        setArr(preArr => [...preArr, "-"])
    }
   
    return (
        <div>
           <button onClick={addMinus}>-</button>
           <button onClick={addPlus}>+</button>
           {arr.toString()}
        </div>
     );
}

export default Counter;