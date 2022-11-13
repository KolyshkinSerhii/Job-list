import React from 'react'
import { JobType } from '../Redux/JobListReducer'
import Job from './Job'

type Props = {
  jobs: Array<JobType>
}

const JobList: React.FC<Props> = ({jobs}) => {

  return (
    <div className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {jobs.map( job =>
        <div key={job.id} className="pb-3 sm:pb-4">
          <Job job={job}/>
        </div>)}
    </div>
  )
}

export default JobList