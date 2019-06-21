import React, {useState} from 'react';


const useFetch = (api) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    setLoading(true);
    fetch(api)
    .then(res => {
        if(res.length) {
            setLoading(false);
            setData(data)
        }
    }).catch(() => {
        console.log("Error from API" + err);
        setLoading(false)
    })
}

export default useFetch;