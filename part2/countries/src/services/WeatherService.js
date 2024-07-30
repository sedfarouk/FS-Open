import axios from "axios"

const getWeather = async (url) => {
    const response = await axios.get(url)
    return response.data
}

export default { getWeather }