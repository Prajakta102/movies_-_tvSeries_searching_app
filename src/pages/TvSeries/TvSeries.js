import React from 'react';
import Content from '../../components/Content/Content';
import Custompagination from '../../components/Pagination/CustomPagination';
import {useState,useEffect} from 'react';
import axios from 'axios';
const TvSeries = () => {
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numOfPages, setnumOfPages] = useState()
    
    useEffect(() => {
        const fetchTVSeries=async()=>{
            const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`);
            setcontent(data.results)
            setnumOfPages(20);
            console.log(numOfPages);
            console.log(data)
        }
        fetchTVSeries();
        // eslint-disable-next-line
    }, [page])
    return (
        <div style={{padding:"2rem",paddingBottom:"4rem"}}>
            <span className="heading">
                TV-Series
            </span>
            <div className="trending">
            {content && content.map((c) =>
            (<Content key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type="TV-Series" vote_average={c.vote_average}/>))}
            </div>
            <Custompagination setPage={setPage} numOfPages={numOfPages}/>
        </div>
    );
}

export default TvSeries;