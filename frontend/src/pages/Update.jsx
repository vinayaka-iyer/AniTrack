import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [anim, setAnim] = useState({
    title: "",
    desc: "",
    rating: null,
    cover: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const animeId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setAnim((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/anime/${animeId}`, anim);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the anime</h1>
      <input
        type="text"
        placeholder="anime title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="anime desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="anime rating"
        name="rating"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="anime cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all anime</Link>
    </div>
  );
};

export default Update;
