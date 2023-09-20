
import { useDashboardContext } from './context'
import { Link } from 'react-router-dom'

function capitalizeEachWord(str: string) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

const Dashboard = () => {
    const { workouts } = useDashboardContext()


    return (
        <>
            <div className="flex flex-col items-center justify-center font-poppins">
                {workouts?.length === 0 ? <h1 className='text-2xl text-center mt-10 mb-5'>You have no workouts !</h1> :
                    <div className='text-2xl text-center mt-10 mb-5'>Workout List</div>}
            </div>
            <div className='flex flex-col justify-center items-center'>

                {workouts.map((workout: any) => (
                    <div key={workout.id} className='w-96 flex justify-center items-center mt-2 mb-5'>
                        <div className="p-2 background-color text-white bg-cyan-400 w-72 rounded-xl relative hover:bg-cyan-600">
                            <div className='flex justify-center items-center'>
                                <Link to={`/workout/${workout.name.toLowerCase()}`}>
                                    <div className='flex items-center'>
                                        <p className='text-xl break-all ml-5 mr-5'>{capitalizeEachWord(workout.name)} </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                <Link to={'/edit'}>
                    {
                        workouts?.length > 0 ?
                            <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm mb-2'>Edit</button>
                            : <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mt-8 mb-10'>Add Workout +</button>
                    }
                </Link>
            </div>
        </>
    )
}

export default Dashboard