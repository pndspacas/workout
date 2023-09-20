import { Link, useParams } from "react-router-dom"
import { useWorkoutContext } from './workoutContext'
import { IoReturnDownBack } from 'react-icons/io5'
const Workout = () => {
    const { name } = useParams()
    const { workouts } = useWorkoutContext()



    function capitalizeEachWord(str: string | undefined) {
        return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center font-poppins">
                {workouts?.length === 0 ? <h1 className='text-2xl text-center mt-10 mb-5'>You have no exercises!</h1> :
                    <div className='text-2xl text-center mt-10 mb-5'>{capitalizeEachWord(name)} Workout</div>}
            </div>
            <div className='flex flex-col justify-center items-center'>

                {workouts.map((workout) => (
                    <div key={workout.id} className='w-96 flex justify-center items-center mt-2 mb-5'>
                        <div className="background-color text-white bg-cyan-400 w-72 rounded-xl relative" >
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
                            </div>
                        </div>
                    </div>))}
                <Link to={`/edit-workout/${name}`}>
                    {
                        workouts?.length > 0 ?
                            <div className='flex flex-col justify-center items-center'>
                                <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm mb-2'>Edit</button>
                                <Link to={"/"}><button className='px-2.5 py-0.5 font-bold text-2xl  bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm mb-10 '><IoReturnDownBack /></button></Link>
                            </div>
                            : <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mt-8 mb-10'>Add Exercise +</button>
                    }
                </Link>
            </div>
        </>
    )
}

export default Workout