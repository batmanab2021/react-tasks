import React, {useState} from "react"

const Counter = () => {
    const [count, setcount] = useState(0)
    return (
        <div>
            <h1>hello world</h1>
            <button onclick={() =>{
                setcount(count - 1)
            }}
            >
            </button>
            <span>{count}</span>
            <button onclick={() =>{
                setcount(count + 1)
            }}
            >
            </button>
                
            </div>
    )
}

export default Counter;