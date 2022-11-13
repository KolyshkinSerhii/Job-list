import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './Redux/hooks'
import { requestJobList } from './Redux/JobListReducer'
import './App.css';
import JobList from './components/JobList';
import DetailedJob from './components/DetailedJob';
import { Routes, Route } from 'react-router-dom';

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
        <Route path='/' element={<JobList jobs={jobs}/>} />
        <Route path='/detailedInfo/:id' element={<DetailedJob jobs={jobs}/>} />
      </Routes>
    </div>
  );
}

export default App
