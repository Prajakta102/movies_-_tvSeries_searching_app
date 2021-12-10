import React from 'react';
import axios from 'axios';
import Content from '../../components/Content/Content';
import CustomPagination from '../../components/Pagination/CustomPagination';
import {useState,useEffect} from 'react';
const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numOfPages, setnumOfPages] = useState();
    

    const fetchMovies=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
        setcontent(data.results)
        setnumOfPages(data.total_pages);
        console.log(numOfPages);
        console.log(data)
    }
    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page])
    return (
        <div style={{padding:"2rem",paddingBottom:"4rem"}}>
            <span className="heading">
                Movies
            </span>
            <div className="trending">
            {content && content.map((c) =>
            (<Content key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type="Movie" vote_average={c.vote_average}/>))}
            </div>
            {numOfPages >1 &&(
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            )}
        </div>
    );
}

export default Movies;
// &with_genres=${genreforURL}