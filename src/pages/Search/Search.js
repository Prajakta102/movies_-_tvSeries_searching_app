import {
  MuiThemeProvider,
  createTheme,
  TextField,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import {Search} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import Content from "../../components/Content/Content";
import CustomPagination from "../../components/Pagination/CustomPagination";
const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState();
  const [numOfPages, setnumOfPages] = useState();
  const [searchText, setSearchText] = useState("");

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  console.log("hello");
  const fetchSearchApi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY
    }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setnumOfPages(data.total_pages);
    console.log(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearchApi();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div style={{ padding: "6rem" }}>
      <MuiThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            label="Search"
            variant="filled"
            style={{ flex: 1 }}
            className="search-box"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" style={{ marginLeft: "10" }}
          onClick={fetchSearchApi}>
            <SearchIcon />
          </Button>
        </div>

        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: "5px" }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search Tv-Series" />
        </Tabs>
      </MuiThemeProvider>

      <div className="trending">
        {content &&
          content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type?"tv":"movie"}
              vote_average={c.vote_average}
            />
          ))}
          {searchText && !content && 
          (type? <h2>No Series Found</h2>:<h2>No Movie Found</h2>)}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Search;
