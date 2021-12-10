import { Pagination } from '@material-ui/lab';
import React from 'react';

const Custompagination = ({setPage,numOfPages=10}) => {

    const handleChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }
    return (
        <div style={{
            width:"100%",display:"flex",justifyContent:"center",marginTop:"10",color:"#fff"
        }}>
            <Pagination count={numOfPages} onChange={(e)=>
                handleChange(e.target.textContent)} color="secondary" hideNextButton hidePrevButton/>
        </div>
    );
}

export default Custompagination;
