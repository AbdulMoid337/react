import { useState } from "react";
export default function Counter() {
let [count, setCount] = useState(0);

function isCount(){
    setCount(count + 1)
}

return(
    <div>
        <h1>count = {count}</h1>
        <button onClick={isCount}>ckich here</button>
    </div>
)
}

