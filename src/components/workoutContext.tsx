// context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
interface Workout {
    id: string;
    name: string;
}
// Define the type for the context value
type WorkoutContextValue = {
    workouts: Workout[];
    setWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
};

interface Workout {
    id: string;
    name: string;
}
// Create the context
export const WorkoutContext = createContext<WorkoutContextValue | undefined>(undefined);

// Define a custom hook to access the context
// eslint-disable-next-line react-refresh/only-export-components
export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error('useWorkoutContext must be used within a WorkoutProvider');
    }
    return context;
};

// Define the props for DashboardProvider
type WorkoutProviderProps = {
    children: ReactNode;
};

// Create the DashboardProvider component
export const WorkoutProvider: React.FC<WorkoutProviderProps> = ({ children }) => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);

    return (
        <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
            {children}
        </WorkoutContext.Provider >
    );
};
