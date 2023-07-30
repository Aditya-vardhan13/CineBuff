import React ,{useState,useEffect}from "react"
import "./Header.css"
import { Link ,useNavigate} from "react-router-dom"
import axios from 'axios'
const Header = () => {
    const [searchKey, setSearchKey] = useState("")
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        history(`/moviess/${searchKey}`);
      }; 
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="search" type="text" id="search"
                           onChange={(event) => setSearchKey(event.target.value)}/>
                    <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
                    
                </form>
                
            </div>
        </div>
    )
}

export default Header