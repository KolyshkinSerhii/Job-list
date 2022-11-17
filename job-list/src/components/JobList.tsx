import React from 'react'
import { JobType } from '../Redux/JobListReducer'
import Job from './Job'
import './JobList.scss'

type Props = {
  jobs: Array<JobType>
}

const JobList: React.FC<Props> = ({jobs}) => {

  return (
    <div className="container">
      {jobs.map( job =>
        <div key={job.id} className="container-job-bar">
          <Job job={job}/>
        </div>)}
    </div>
  )
}

export default JobList