// context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Workout {
    id: string;
    name: string;
}
// Define the type for the context value
type DashboardContextValue = {
    workouts: Workout[];
    setWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
};

// Create the context
export const DashboardContext = createContext<DashboardContextValue | undefined>(undefined);

// Define a custom hook to access the context
// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error('useDashboardContext must be used within a DashboardProvider');
    }
    return context;
};

// Define the props for DashboardProvider
type DashboardProviderProps = {
    children: ReactNode;
};

// Create the DashboardProvider component
export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);


    return (
        <DashboardContext.Provider value={{ workouts, setWorkouts }}>
            {children}
        </DashboardContext.Provider >
    );
};
