import React,{lazy, Suspense} from 'react';
const LazyComponent =  lazy(() => import('./lazy'));

const Parent = () => {
    return (
        <div>
           
            <h1>Showing lazy loaded component</h1>
            <Suspense fallback={<div>Loading.....</div>}>
                    <LazyComponent />
            </Suspense>
        </div>
    )
}

export default Parent;
