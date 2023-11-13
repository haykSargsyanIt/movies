import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './trending.scss';
import {useDispatch, useSelector} from "react-redux";
import image1 from '../assets/images/https_specials-1.png'
import image2 from '../assets/images/https_specials-2.png'
import image3 from '../assets/images/https_specials-3.png'
import image4 from '../assets/images/https_specials-4.png'
import image5 from '../assets/images/https_specials-5.png'
import image6 from '../assets/images/https_specials-6.png'
import image7 from '../assets/images/https_specials-7.png'
import image8 from '../assets/images/https_specials-8.png'
import {setData} from "../app/movies-slice";
import {useEffect, useState} from "react";


function Trending({setPlayedVideo}) {
    const allMovies = useSelector((state) => state.movies)
    const editState = useSelector((state) => state.movies.moviesTogleState)

    const [sortedArray, setSortedArray] = useState([]);
    const dispatch = useDispatch()

    const images = [
        {img: image1},
        {img: image2},
        {img: image3},
        {img: image4},
        {img: image5},
        {img: image6},
        {img: image7},
        {img: image8}
    ]

    const getImage = (data) => {
        dispatch(setData({key: 'currentItem', value: data}))
        setPlayedVideo(false)
    }

    useEffect(() => {
        let res = allMovies.allMovies.TendingNow.map((el) => {
            return {
                id: el.Id,
                date: +el.Date.substring(5, 7),
                Category: el.Category,
                MpaRating: el.MpaRating,
                ReleaseYear: el.ReleaseYear,
                Title: el.Title,
                VideoUrl: el.VideoUrl,
                CoverImage: images.find((imges) => imges.img.substring(14, 30) + '.png' === el.CoverImage)
            }
        })
        let sortArray = res.sort((a, b) => a.date - b.date)
        setSortedArray(sortArray)
    }, []);

    console.log(sortedArray, 'sortedArray')
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 7
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <div className='movies-wrapper'>
            <h3>
                Trending Now
            </h3>
            <Carousel showDots={true}
                      swipeable={false}
                      draggable={true}
                      arrows={true}
                      responsive={responsive}>
                {
                    sortedArray.map((el) => {
                        return (
                            <div key={el.id} id={editState.handleMovies ? 'active-items' : ''}>
                                <img src={el.CoverImage.img} onClick={() => getImage(el)}/>
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>
    );
}

export default Trending;