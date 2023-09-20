import { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid';
import { useDashboardContext } from './context';
import { IoReturnDownBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface Props {
    name: any;
    setName: any;

}

const Edit: React.FC<Props> = () => {
    const { workouts, setWorkouts } = useDashboardContext();
    const [input, setInput] = useState(false)
    const [newName, setNewName] = useState("")


    const handleAddName = () => {
        const newNameObj = { id: uuidv4(), name: newName }
        setWorkouts([...workouts, newNameObj])
        setNewName("")
        setInput(!input)
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
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
                <div className='text-2xl text-center mt-10 mb-5'>Workout List Edit</div>
                {
                    workouts.map((workout: any) => (
                        <div key={workout.id} className='w-96 flex justify-center items-center mt-2 mb-5'>
                            <div className="p-2 background-color text-white bg-cyan-400 w-72 rounded-xl relative ">
                                <div className='flex justify-center items-center'>
                                    <div className='flex items-center'>
                                        <p className='text-xl break-all ml-5 mr-5'>{capitalizeEachWord(workout.name)}</p>
                                    </div>
                                    <div className='absolute right-0 mr-1'>
                                        <p className='text-3xl hover:text-black text-white' onClick={() => handleDelete(workout.id)}><HiX /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {!input &&
                    <div className='flex flex-col items-center justify-center  gap-2'>
                        <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm' onClick={handleClick}>Add Workout +</button>
                        <Link to={"/"}><button className='px-2.5 py-0.5 font-bold text-2xl  bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm mb-10'><IoReturnDownBack /></button></Link>
                    </div >}
                <div className='flex flex-col items-center justify-center'>
                    {input &&
                        <>
                            <input className="text-center mt-5 border-solid border-2 border-cyan-500 py-1 px-5 rounded-xl placeholder-black focus:outline-none" type="text" maxLength={20} placeholder='Ex... Chest & Triceps' value={newName} onChange={handleChangeName} />

                            <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mt-8' onClick={handleAddName}
                            >Add Workout +</button>
                        </>
                    }

                </div>
            </div >
        </>

    )

}
export default Edit
