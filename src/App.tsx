import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Workout from './components/Workout'
import Edit from './components/Edit'
import { DashboardProvider } from './components/context'
import Dashboard from './components/Dashboard'
import EditWorkout from './components/EditWorkout'
import { WorkoutProvider } from './components/workoutContext'


function App() {

  return (
    <>
      <Router>
        <DashboardProvider>
          <WorkoutProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/edit' element={<Edit name={''} setName={''} />} />
              <Route path='/edit-workout/:name' element={<EditWorkout />} />
              <Route path='/workout/:name' element={<Workout />} />
            </Routes>
          </WorkoutProvider>
        </DashboardProvider>
      </Router >
    </>
  )

}

export default App
