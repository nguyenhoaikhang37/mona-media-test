import axiosClient from '@/apis/axiosClient';

export const getFlightList = async () => {
    return axiosClient.get('/ff3207e0-f250-4a1d-9240-b3dbffa8386a');
};
