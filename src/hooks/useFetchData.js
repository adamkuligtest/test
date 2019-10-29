import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = url => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          setIsError(false);
          setIsLoading(true);
          try {
            const result = await axios.get(url);
            setData(result.data)
          } catch (e) {
            setIsError(true);
          }
          setIsLoading(false);
        }
        fetchData();
    }, [url]);
    return [data, isLoading, isError]
}

export default useFetchData;
