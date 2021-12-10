import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
import {Whatshot} from '@material-ui/icons';
import {Movie} from '@material-ui/icons';
import {Search} from '@material-ui/icons';
import {Tv} from '@material-ui/icons';
import {Link} from 'react-router-dom';
const useStyles=makeStyles({
root:{
    width:"100%",
    position:"fixed",
    bottom:0,
    height:"3.5rem",
    zIndex:1000,
    backgroundColor:"#2B2B2B",
    color:"#fffff",
},
one:{
  color:"#FF2626",
},
icons:{
  color:"#ffff",

}
});

export default function Navbar() {
  const [value, setValue] = React.useState('recents');
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();


  return (
    <BottomNavigation className={classes.root} sx={{ width: 500 }} value={value} onChange={handleChange}>
     <Link to="/">
     <BottomNavigationAction className={classes.one}
        label="Trending"
        value="recents"
        icon={<Whatshot/>
       }
      />
     </Link>
      <Link to="/Movies">
      <BottomNavigationAction
      className={classes.icons}
        label="Movie"
        value="favorites"
        icon={<Movie />}
      />
        </Link>
      <Link to="/TvSeries">
      <BottomNavigationAction
      className={classes.icons}
        label="Tv-Series"
        value="nearby"
        icon={<Tv />}
      />
        </Link>
     <Link to="/Search">
     <BottomNavigationAction
     className={classes.icons} label="Search" value="folder" icon={<Search />} />
     </Link>
    </BottomNavigation>
  );
}
