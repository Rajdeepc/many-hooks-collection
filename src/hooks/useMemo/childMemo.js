import React, { useEffect } from 'react'


let renderCount = 0;

const ChildMemo = () => {

    useEffect(() => {
        renderCount ++
    });

    return (
        <div>
            <h3>RenderCount: {renderCount}</h3>
        </div>
    )
}


export default ChildMemo;