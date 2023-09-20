import { useEffect, useState } from 'react'
import { useWorkoutContext } from './workoutContext';
import { HiX } from 'react-icons/hi';
import { IoReturnDownBack } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const EditWorkout = () => {
    const { name } = useParams()
    const { workouts, setWorkouts } = useWorkoutContext();
    const [input, setInput] = useState(false)
    const [exercise, setExercise] = useState("")
    const [series, setSeries] = useState("")
    const [repetitions, setRepetitions] = useState("")



    const handleFormSubmit = (e) => {
        e.preventDefault()
        const newWorkoutObj = { id: uuidv4(), exercise: exercise, series: series, repetitions: repetitions }
        setWorkouts([...workouts, newWorkoutObj])
        setExercise("")
        setSeries("")
        setRepetitions("")
        setInput(!input)
        console.log(newWorkoutObj)
    }

    const handleExercise = (e) => {
        setExercise(e.target.value)
    }

    const handleSeries = (e) => {
        setSeries(e.target.value)
    }

    const handleRepetitions = (e) => {
        setRepetitions(e.target.value)
    }

    const handleDelete = (idToDelete: string) => {
        const filteredNames = workouts.filter(workout => workout.id !== idToDelete)
        setWorkouts(filteredNames)
    }

    const handleClick = () => {
        setInput(!input)
    }

    function capitalizeEachWord(str: string) {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center font-poppins">
                <div className='text-2xl text-center mt-10 mb-5'>{capitalizeEachWord(name)} Edit</div>
                {
                    workouts.map((workout: any) => (
                        <div key={workout.id} className='w-96 flex justify-center items-center mt-2 mb-5'>
                            <div className="background-color text-white bg-cyan-400 w-72 rounded-xl relative hover:bg-cyan-600" >
                                <div className='flex flex-col justify-center items-center m-5'>
                                    <div className='flex flex-col items-center'>
                                        Exercise
                                        <p className='text-xl break-all ml-5 mr-5'>
                                            {workout.exercise}</p>
                                    </div>
                                    <div className='flex flex-col items-center mt-5'>
                                        Series
                                        <p className='text-xl break-all ml-5 mr-5'>
                                            {workout.series}</p>
                                    </div>
                                    <div className='flex flex-col items-center mt-5'>
                                        Repetitions
                                        <p className='text-xl break-all ml-5 mr-5'>
                                            {workout.repetitions}</p>
                                    </div>
                                    <div className='absolute right-0 top-2 mr-1'>
                                        <p className='text-3xl hover:text-black text-white' onClick={() => handleDelete(workout.id)}><HiX /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {!input &&
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm' onClick={handleClick}>Add Exercise +</button>
                        <Link to={`/workout/${name}`}><button className='px-2.5 py-0.5 font-bold text-2xl  bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm mb-10'><IoReturnDownBack /></button></Link>
                    </div>}
                <div className='flex flex-col items-center justify-center'>
                    {input &&
                        <div>
                            <form className='flex flex-col justify-center items-center text-center mt-5' onSubmit={handleFormSubmit}>
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Exercise</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            
                                mb-2
                                text-center" type="text" placeholder='Name of Exercise' onChange={handleExercise} />
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Series</label>
                                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            
                            mb-2
                            text-center' type="number" placeholder='Number of Series'
                                    onChange={handleSeries} />
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Repetitions</label>
                                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            
                            mb-2
                            text-center' type="number" placeholder='Number of Reps'
                                    onChange={handleRepetitions} />
                                <button type='submit' className='px-4 py-2 font-semibold text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm mt-8 mb-10'>Add Exercise +</button>
                            </form>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default EditWorkout

