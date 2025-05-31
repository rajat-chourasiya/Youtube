import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL='https://youtube-data8.p.rapidapi.com'
const options = {
	headers: {
		'x-rapidapi-key': '648e509323msh76a7c417b556f87p10e51cjsn142bf0ecfe5f',
		'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'

	}
};

export const fetchData=async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    }catch(error){
        console.error("error fetching api data:",error);
        throw error
    }
}