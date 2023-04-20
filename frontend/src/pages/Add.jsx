import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Add = () => {
  const [anim, setAnim] = useState({
    title: "",
    desc: "",
    rating: null,
    cover: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnim((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/anime", anim);
      console.log("successfully added");
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <img src='src\assets\form background.jpg' className="form-img" />
      <Navbar />
      <div className="form form-div content">
        <h1 className="form-heading">Add New anime</h1>
        <label>Title</label>
        <input
          type="text"
          placeholder="anime title"
          name="title"
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          rows={5}
          type="text"
          placeholder="anime desc"
          name="desc"
          onChange={handleChange}
        />
        <label>Rating</label>
        <input
          type="number"
          placeholder="anime rating"
          name="rating"
          onChange={handleChange}
        />
        <label>Cover Page Url</label>
        <input
          type="text"
          placeholder="anime cover"
          name="cover"
          onChange={handleChange}
        />

        <div className="add-btn-div">
          <button onClick={handleClick} className="red-btn">Add</button>
          {error && "Something went wrong!"}
          <button>
            <Link to="/Anime" className="red-btn">See all anime</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Add;
