import CryptoJS from 'crypto-js';
import moment from 'moment';
import axios from 'axios';

export const apiConfig = () => {
  const timeStamp = moment().unix();
  const hash = CryptoJS.MD5(
    timeStamp +
      process.env.REACT_APP_PRIVATE_KEY +
      process.env.REACT_APP_PUBLIC_API_KEY
  ).toString(CryptoJS.enc.Hex);

  const apiInfo = {
    baseURL: 'https://gateway.marvel.com:443/v1/public/',
    timeStamp,
    hash,
    limit: 80
  };

  return apiInfo;
};

export const getCards = async (search, setCards, setLoading) => {
  const { baseURL, timeStamp, hash, limit } = apiConfig();
  try {
    setLoading(true)
    if (search !== '') {
      const END_POINT = `${baseURL}characters?nameStartsWith=${search}&limit=${limit}&ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${hash}`;
      const result = await axios.get(END_POINT);
      setCards(result.data.data.results);
    } else {
      const END_POINT = `${baseURL}characters?&limit=${limit}&ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${hash}`;
      const result = await axios.get(END_POINT);
      setCards(result.data.data.results);
    }
    setLoading(false)
  } catch {
    
  }
  
};
