import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
// Hooks
import { getFlightList } from '@/apis/flightApi';
import { useFlights } from '@/hooks';
// Components
import Heading from '@/components/FlightSchedule/Heading';
import Filter from '@/components/FlightSchedule/Filter';
import FlightList from '@/components/FlightSchedule/FlightList';
import YourFlights from '@/components/FlightSchedule/YourFlights';

const FlightScheduleContext = createContext({
    flightList: [],
    loading: false,
    selectedFlight: {},
    onSelected: () => {},
});

export const useFlightSchedule = () => {
    const context = useContext(FlightScheduleContext);
    if (context === undefined) {
        throw new Error(
            'useFlightSchedule must be used within a FlightScheduleProvider'
        );
    }
    return context;
};

const FlightSchedulePage = () => {
    const { flightList, isLoading } = useFlights();
    const [selectedFlight, setSelectedFlight] = useState({});

    const handleSelected = (selectedItem) => {
        setSelectedFlight(selectedItem);
    };

    const providerValue = useMemo(
        () => ({
            flightList,
            loading: isLoading,
            selectedFlight,
            onSelected: handleSelected,
        }),
        [flightList, isLoading, selectedFlight]
    );

    return (
        <FlightScheduleContext.Provider value={providerValue}>
            <div className='bg-primary-light min-h-[100vh]'>
                <Heading />
                <div className='container flex flex-col-reverse lg:flex-row mt-[15px] gap-[30px] lg:gap-[10px]'>
                    <div className='w-full lg:w-9/12'>
                        <Filter />
                        <FlightList />
                    </div>
                    <div className='w-full lg:w-3/12'>
                        <YourFlights />
                    </div>
                </div>
            </div>
        </FlightScheduleContext.Provider>
    );
};

export default FlightSchedulePage;
