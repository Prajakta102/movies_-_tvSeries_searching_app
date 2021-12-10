import React from 'react';
import axios from 'axios';
import './Trending.css';
import {useState,useEffect} from 'react';
import Content from '../../components/Content/Content.js'
import CustomPagination from '../../components/Pagination/CustomPagination';
const Trending = () => {
  const [page, setPage] = useState(1)
    const [content,setContent]=useState([]);

    const fetchTrending=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        console.log(data);
        
        setContent(data.results
        
        );
        }
    
   
   useEffect(()=>{
       fetchTrending();
       // eslint-disable-next-line
   },[page]);
//    console.log(content);
    
    return (
        <div style={{padding:"2rem",paddingBottom:"4rem"}}>
            <span className="heading">
                Trending
            </span>
            <div className="trending">
            {content && content.map((c) =>
            (<Content key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>))}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
}

export default Trending;
