import Axios from 'axios';

const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"

export const instance = Axios.create({
    headers: {
        'Authorization': `Bearer ${token}`

    },
    baseURL: "https://api.json-generator.com/templates/ZM1r0eic3XEy"
})

// API for Jobs

export const JobList = {
    getJobList() {
        return instance.get(`/data`).then(res => {
            return res.data
        })
    },
}