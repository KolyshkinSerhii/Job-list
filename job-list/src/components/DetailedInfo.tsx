import React from 'react'
import { JobType } from '../Redux/JobListReducer'

type Props = {
  job: JobType
}

const DetailedInfo: React.FC<Props> = ({ job }) => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='wrapper-left'>
          <div className='wrapper-left-head'>
            <p>Job details</p>
            <button>Save to my list</button>
            <button>Share</button>
          </div>
          <button className='apply-button'>APPLY NOW</button>
          <div className='wrapper-left-job-name'>
            <div>{job.title}</div>
            <div className='wrapper-left-salary'>
              <div>{job.salary}</div>
              <div>brutto, per year</div>
            </div>
          </div>
          <div className='wrapper-left-job-description'>
            <div>Responsobilities</div>
            <div>{job.description}</div>
            <div>Compensation & Benefits:</div>
            <ul>
              <li>Very competitive compensation package with bonuses</li>
              <li>Medical, Dental and Vison Insurense</li>
              <li>Occurrence-based Malpractice Coverage</li>
              <li>Short-term and Long-term Disability Insurance</li>
            </ul>
          </div>
          <button className='apply-button'>APPLY NOW</button>
          <div className='wrapper-left-additional-info'>
            <p>Additional info</p>
            <p>Employment type</p>
            <ul>
              {job.employment_type.map(el =>
                <li>{el}</li>
              )}
            </ul>
            <p>Benefits</p>
            <ul>
              {job.benefits.map(el =>
                <li>{el}</li>
              )}
            </ul>
          </div>
          <div className='wrapper-left-images'>
            <p>Attached images</p>
            <div className='wrapper-left-images-row'>
              {job.pictures.map(pic => <img src={pic} alt="" />)}
            </div>
          </div>
        </div>
        <div className='wrapper-right'>
          <div className='wrapper-right-contacts'>
            <p>{job.name}</p>
            <p>{job.address}</p>
            <p>{job.phone}</p>
            <p>{job.email}</p>
          </div>
          <div className='wrapper-right-map'></div>
        </div>
      </div>
      <button>Return to job board</button>
    </div>
  )
}

export default DetailedInfo