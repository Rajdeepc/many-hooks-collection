import React, { useState, useMemo } from 'react'
import ChildMemo from './childMemo';


const MyMemo = () => {

    const [i, setI] = useState(0)

    const handleIncrement = () => {
        setI(i + 1)
    }

    const memoize = useMemo(() => {
        return <ChildMemo />
    }, [])

    return (
        <div>
            <h3>Use Memo</h3>
            <h5>i: {i}</h5>
            <button onClick={handleIncrement}>Increment</button>
            <h3>normal render</h3>
            <ChildMemo />
            <h3>memoize render</h3>
            {memoize}
        </div>
    )
}


export default MyMemo;