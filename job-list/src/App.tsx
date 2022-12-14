import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './Redux/hooks'
import { requestJobList } from './Redux/JobListReducer'
import JobList from './components/JobList';
import DetailedJob from './components/DetailedJob';
import { Routes, Route } from 'react-router-dom';
import './App.scss'

const App = () => {

  const {jobs} = useAppSelector(state => state.jobs)
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(requestJobList())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/Job-list/' element={<JobList jobs={jobs}/>} />
        <Route path='/detailedInfo/:id' element={<DetailedJob jobs={jobs}/>} />
      </Routes>
    </div>
  );
}

export default App
