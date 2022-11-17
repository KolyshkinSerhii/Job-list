import React from 'react'
import { NavLink } from 'react-router-dom'
import { JobType } from '../Redux/JobListReducer'
import './DetailedInfo.scss'
const Rectangle = require("../static/images/Icons/General/Rectangle.png")
const Shape = require("../static/images/Icons/General/Shape.png")
const ReturnButton = require("../static/images/Buttons/Arrow.png")
const Marker = require("../static/images/Cards/Shape.png")

type Props = {
  job: JobType
}

const DetailedInfo: React.FC<Props> = ({ job }) => {
  return (
    <div className='detailedInfo-container'>
      <div className='wrapper'>
        <div className='wrapper-left'>
          <div className='wrapper-left-head'>
            <p className='wrapper-left-h1'>Job details</p>
            <div className='wrapper-left-head-save'>
              <div><img src={Rectangle} alt="" /></div>
              <p className='wrapper-left-head-save-text'>Save to my list</p>
              <div><img src={Shape} alt="" /></div>
              <p className='wrapper-left-head-save-text'>Share</p>
            </div>
          </div>
          <hr />
          <button className='apply-button'>APPLY NOW</button>
          <div className='wrapper-left-job-description'>
            <div className='wrapper-left-job-description-box'>
              <div className='wrapper-left-description-name'>{job.title}</div>
              <div className='wrapper-left-description-salary'>
                <div className='wrapper-left-description-salary-amount'>{job.salary}</div>
                <div className='wrapper-left-description-salary-text'>brutto, per year</div>
              </div>
            </div>
            <p className='post-date'>{job.createdAt}</p>
            <div className='wrapper-left-description-responsbility'>
              <h2 className='wrapper-left-description-h2'>Responsobilities</h2>
              <div className='wrapper-left-description-responsobility-text'>{job.description}</div>
              <h2 className='wrapper-left-description-h2'>Compensation & Benefits:</h2>
              <ul className='wrapper-left-description-list'>
                <li>Very competitive compensation package with bonuses</li>
                <li>Medical, Dental and Vison Insurense</li>
                <li>Occurrence-based Malpractice Coverage</li>
                <li>Short-term and Long-term Disability Insurance</li>
              </ul>
            </div>
          </div>
          <button className='apply-button'>apply now</button>
          <div className='wrapper-left-additional-info'>
            <p className='wrapper-left-h1'>Additional info</p>
            <hr />
            <p>Employment type</p>
            <ul className='list-buttons'>
              {job.employment_type.map(el =>
                <li className='list-item-employment'>{el}</li>
              )}
            </ul>
            <p>Benefits</p>
            <ul className='list-buttons'>
              {job.benefits.map(el =>
                <li className='list-item-benefits'>{el}</li>
              )}
            </ul>
          </div>
          <div className='wrapper-left-images'>
            <p className='wrapper-left-h1'>Attached images</p>
            <hr />
            <div className='wrapper-left-images-row'>
              {job.pictures.map(pic =>
                <img className='wrapper-left-images-row-item' src={pic} alt="" />)}
            </div>
          </div>
          {<NavLink to={'/'}>
            <button className='toJobBoardButton'>
              <img src={ReturnButton} alt="" />
              Return to job board
            </button>
          </NavLink>}
        </div>
        <div className='wrapper-right'>
          <div className='wrapper-right-contacts'>
            <div className='wrapper-rigth-contacts-circle'>
            </div>
            <div className='wrapper-right-contacts-department-name'>
              <p>Department name</p>
              <p>{job.name}</p>
            </div>
            <div className='wrapper-right-contacts-address'>
              <p>
                <img className='wrapper-right-contacts-address-img' src={Marker} alt="" />
              </p>
              <p className='wrapper-right-contacts-address-text'>{job.address}</p>
            </div>
            <div className='wrapper-right-contacts-phone'>
              <p>{job.phone}</p>
              <p>{job.email}</p>
            </div>
          </div>
          <div className='wrapper-right-map'></div>
        </div>
      </div>
    </div>
  )
}

export default DetailedInfo