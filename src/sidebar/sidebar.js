import './sidebar.scss';
import searchIcon from '../assets/images/Search.png'
import homeIcon from '../assets/images/Group 46.png'
import videoIcon from '../assets/images/Group 56.png'
import moviesIcon from '../assets/images/Group 54.png'
import genresIcon from '../assets/images/Group 53.png'
import watchIcon from '../assets/images/Group 47.png'
import {useDispatch} from "react-redux";
import {toggleEditState} from '../app/movies-slice'


function Sidebar() {

    const dispatch = useDispatch()
    const handleState = () => {
        dispatch(toggleEditState('handleMovies'))
    }

    return (
        <div className="sidebar" onMouseOver={() => handleState()} onMouseOut={() => handleState()}>
            <div className='sidebar-wrapper'>
                <img src={searchIcon}/>
                <text className='sidebar-text'>Search</text>
            </div>
            <div className='sidebar-wrapper'>
                <img src={homeIcon}/>
                <text className='sidebar-text'>Home</text>
            </div>
            <div className='sidebar-wrapper'>
                <img src={videoIcon}/>
                <text className='sidebar-text'>TV Shows</text>
            </div>
            <div className='sidebar-wrapper'>
                <img src={moviesIcon}/>
                <text className='sidebar-text'>Movies</text>
            </div>
            <div className='sidebar-wrapper'>
                <img src={genresIcon}/>
                <text className='sidebar-text'>Genres</text>
            </div>
            <div className='sidebar-wrapper'>
                <img src={watchIcon}/>
                <text className='sidebar-text'>Watch Later</text>
            </div>
            <div className='menu-box'>
                <span>LANGUAGE</span>
                <span>GET HELP</span>
                <span>EXIT</span>
            </div>
        </div>
    );
}

export default Sidebar;