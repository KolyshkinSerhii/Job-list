import { ThunkAction } from "@reduxjs/toolkit";
import { JobList } from "../API/API";

import { InferActionsType, RootState } from "./store";

interface Location {
    lat: number,
    long: number
}

export type JobType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: Array<string>,
    location: Location,
    pictures: Array<string>,
    createdAt: string,
    description: string,
    employment_type: Array<string>

}

const initialState = {
  jobs: [] as Array<JobType>
}

export type InitialStateType = typeof initialState

const JobListReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case 'SET-JOBS':
            return {
                ...state, jobs: action.payload
            };
        default:
            return state
    }
}

type ActionTypes = InferActionsType<typeof actions>

export const actions = {
    setJobsAC: (jobs: Array<JobType>) => ({
        type: 'SET-JOBS',
        payload: jobs
    } as const),
}

export const requestJobList = (): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
    let data = await JobList.getJobList()

    dispatch(actions.setJobsAC(data))
}

export default JobListReducer
