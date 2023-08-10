import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.github.com/users`,
});

export const getUser = async (username: string) => {
    try {
        const { data } = await instance.get(`/${username}`);
        return data;
    } catch (error: any) {
        console.log(error);
    }
};
