import './main.scss'
import {useSelector} from "react-redux";
import Sidebar from "../sidebar/sidebar";
import coverImage from '../assets/images/FeaturedCoverImage.png'
import titleImage from '../assets/images/FeaturedTitleImage.png'
import Trending from "../trending/trending";
import {BsFillPlayFill} from "react-icons/bs";
import {useEffect, useState} from "react";


function Main() {
    const allMovies = useSelector((state) => state.movies)
    const editState = useSelector((state) => state.movies.moviesTogleState)
    const [urlImage, setUrlImage] = useState('');
    const [playedVideo, setPlayedVideo] = useState(false);

    useEffect(() => {
        let urlImages = allMovies.currentItem.CoverImage.img
        setUrlImage(urlImages)
        urlImages && setTimeout(() => {
            setPlayedVideo(true)
        }, 2000)
    }, [allMovies.currentItem])


    return (
        <div>
            <div className='content-wrapper'>
                {
                    playedVideo ?
                        <video className='active-container' muted controls preLoad="auto" autoPlay={'autoplay'} loop
                               src={allMovies.currentItem.VideoUrl}>

                        </video>
                        : <div className='active-container'
                               style={{backgroundImage: `url(${urlImage ? urlImage : coverImage})`}}>
                            <div className='active-item'>
                                <Sidebar/>
                                <div className={editState.handleMovies ? 'activeContent' : ''} id='items-wrapper'>
                            <span>
                             {allMovies.currentItem.Category.toString().toUpperCase()}
                          </span>
                                    {
                                        allMovies.currentItem.Title === 'The Irishman' ? <img src={titleImage}/> :
                                            <h2 id='movies-title'>{allMovies.currentItem.Title}</h2>
                                    }

                                    <div id='text-wrapper'>
                                        <span>{allMovies.currentItem.ReleaseYear} </span>
                                        <span>{allMovies.currentItem.MpaRating}</span>
                                        <span>1h 48m</span>
                                    </div>
                                    <span id='default-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                                    <div id='buttons-container'>
                                        <button><BsFillPlayFill/> Play</button>
                                        <button> More info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>
            <Trending setPlayedVideo={setPlayedVideo}/>
        </div>
    );
}

export default Main;