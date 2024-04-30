import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovieThunk, handleAllMovie } from "../../redux/slice/phimSlice";
import "./lisMove.scss"
import { NavLink, useNavigate } from "react-router-dom";
import iconPlay from "../../assets/img/iconPlay.png"
import YouTube from "react-youtube";
const ListMovie = () => {
  // const [arrMovie, setArrMovie] = useState([]);
  // có thể coi tham số state đại diện cho object reducer có ở store
  const { arrMovie } = useSelector((state) => state.phimSlice);
  const dispatch = useDispatch();
  // console.log(arrMovie);
  // console.log(phimSlice);
  useEffect(() => {
    // quanLyPhimServ
    //   .getAllMovie()
    //   .then((res) => {
    //     console.log(res);
    //     // setArrMovie(res.data.content);
    //     dispatch(handleAllMovie(res.data.content));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(getAllMovieThunk("abc"));
  }, []);

  let navigate = useNavigate()

  // trailer 
  // const [videoURL, setVideoURL] = useState('');
  const [videoID, setVideoID] = useState('');

  const getVideoIDFromURL = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=))([^\?&]+)/;
    const match = url.match(regex);
    return match && match[1];
  };

  const handlePlayClick = (urlTrailer) => {
    // setVideoURL(urlTrailer)
    // const videoID = getVideoIDFromURL(videoURL);
    const videoIDTam = getVideoIDFromURL(urlTrailer);
    if (videoIDTam) {
      setVideoID(videoIDTam);
    }
    else {
      alert('URL video không hợp lệ!');
    }
  };

  let handelDisplay = () => {
    document.querySelector(".video_trailer_background").style.display = "block"
    document.querySelector(".video_trailer").style.display = "block"
  }
  let handelHideDisplay = () => {

    document.querySelector(".video_trailer_background").style.display = "none"
    document.querySelector(".video_trailer").style.display = "none"
    setVideoID("")
  }


  return (
    <div className="  ">

      {/* video trailer */}
      <button className="video_trailer_background" onClick={handelHideDisplay} ></button >
      <div className="video_trailer">
        {videoID && (
          <YouTube
            videoId={videoID}
            controls={true}
            width="640"
            height="360"
          />
        )}
      </div>

      {/* render list movie */}
      <div  className="list_movie">
        {arrMovie.map((movie, index) => {
          return (
            <div key={movie.maPhim} className="movie_item space-y-4 ">
              <div className="img_phim">
                <img
                  className="img_phim2   rounded"
                  src={movie.hinhAnh}
                  alt=""
                />

                {/* icon play trailer */}
                <button className="button_play_trailer" onClick={() => {
                  handlePlayClick(movie.trailer);
                  handelDisplay()
                }
                } >
                  <img src={iconPlay} alt="" />
                </button>
              </div>


              {/* desk movie */}
              <div className="desk_movie">
                <h3 className="mb-3">
                  <span className="bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                    C18
                  </span>
                  <span className="text-xl font-semibold line-clamp-1">{movie.tenPhim}</span>
                </h3>
                <p className="line-clamp-2">{movie.moTa}</p>
              </div>

              {/* nút đặt vé */}
              <button onClick={() => {
                navigate(`/detail/${movie.maPhim}`)
              }
              } className="buy_ticket border rounded bg-red-600 text-white font-bold">MUA VÉ</button>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ListMovie;
