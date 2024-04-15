import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovieThunk, handleAllMovie } from "../../redux/slice/phimSlice";
import "./lisMove.scss"
import { NavLink, useNavigate } from "react-router-dom";
const ListMovie = () => {
  // const [arrMovie, setArrMovie] = useState([]);
  // có thể coi tham số state đại diện cho object reducer có ở store
  const { arrMovie } = useSelector((state) => state.phimSlice);
  // console.log(arrMovie)
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

  let navigate=useNavigate()


  return (
    <div className=" grid grid-cols-5 gap-10 ">
      {arrMovie.map((movie, index) => {
        return (
          <div key={movie.maPhim} className="movie_item space-y-4 ">
            <img
              className="w-full h-96 object-cover rounded"
              src={movie.hinhAnh}
              alt=""
            />

            {/* desk movie */}
            <div className="desk_movie">
              <h3 className="mb-3">
                <span className="bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                  C18
                </span>
                <span className="text-xl font-semibold">{movie.tenPhim}</span>
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
  );
};

export default ListMovie;
