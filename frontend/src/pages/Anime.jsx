import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Anime = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchAllAnime = async () => {
      try {
        const res = await axios.get("http://localhost:8800/anime");
        setAnime(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllAnime();
  }, []);

  console.log(anime);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/anime/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <img src='src\assets\form background.jpg' className="form-img"/>

      <div className="background-blur-1"></div>
      <div className="background-blur-2"></div>
      <Navbar />

      <div className="anime">

        {anime.map((anim) => (
          <div key={anim.id} className="anim">
            <img src={anim.cover} alt="" />
            <h2>{anim.title}</h2>
            <p>{anim.desc}</p>
            <span>{anim.rating}⭐</span>
            <button className="delete" onClick={() => handleDelete(anim.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${anim.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}

      </div>


      <div className="add-btn-div">
        <button>
          <Link to="/add" className="red-btn">
            Add new anime
          </Link>
        </button>
        <button>
          <Link to="/add" className="red-btn">
            My anime list
          </Link>
        </button>
      </div>

    </div>
  );
};

export default Anime;
