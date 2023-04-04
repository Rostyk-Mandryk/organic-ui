import axios from 'axios';

const ORGANIC_SVC_URL = 'http://localhost:3000';

export const getProducts = async (loadAll) => {
    const { data } = await axios.get(`${ORGANIC_SVC_URL}/products`,{ params: { loadAll } });
    return data;
};
