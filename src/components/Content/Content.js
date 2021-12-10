import React from 'react';
import './Content.css';
import {Badge} from '@material-ui/core';
import {img_300, unavailable} from '../../config/config'
import ContentModal from '../ContentModal/ContentModal';
const Content = (
    {
        id,poster,title,date,media_type,vote_average,
    }
) => {
    return (
        <ContentModal className="media" style={{color:"#fff"}}>
           
            <Badge badgeContent={vote_average} color={vote_average<6?'error':"primary"}/>
            <img className="poster" src={poster ?`${img_300}/${poster}`:unavailable} />
            <b className="title">{title}</b>
            <span className="sub-title">
            <span className="media-type">
                {media_type==="tv"?"TV Series":"Movies"}
            </span>
            <span className="date">{date}</span>
            </span>
        
        </ContentModal>
    );
}

export default Content;
