import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchPost = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.post(url)
            .then((response) => {
                setData(response);
                console.log(response);
            })

    }, [url]);

    return { data };
};