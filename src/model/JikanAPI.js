import axios from "axios"

const root = "https://api.jikan.moe/v3"

export async function fetchTop(page) {
    const response = (await axios.get(`${root}/top/anime/${page}`))
    const status = response.status
    if (status !== 200) {
        alert("Unable to get top anime")
    }
    return response.data.top
}