import { useParams } from 'react-router-dom'
import { JobType } from '../Redux/JobListReducer'
import DetailedInfo from './DetailedInfo'

type Props = {
  jobs: Array<JobType>
}

const DetailedJob: React.FC<Props> = ({ jobs }) => {

  let { id } = useParams()

  let filteredJob = jobs.filter(job => job.id === id?.slice(3))

  console.log(filteredJob)
  console.log(id?.slice(3))
  return (
    <div>
      {filteredJob.map(job =>
        <div key={job.id} className="pb-3 sm:pb-4">
          <DetailedInfo job={job} />
        </div>)}
    </div>
  )
}

export default DetailedJob