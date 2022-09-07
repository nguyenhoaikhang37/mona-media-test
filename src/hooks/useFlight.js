import { useQuery } from 'react-query';
import { getFlightList } from '@/apis/flightApi';

export function useFlights() {
    const queryKey = ['/flights'];
    const { data, isLoading, error } = useQuery(queryKey, () =>
        getFlightList()
    );

    return {
        isLoading,
        error,
        flightList: data?.Flights,
    };
}
