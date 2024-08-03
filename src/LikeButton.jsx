import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setLiked] = useState(false);
  let [count, setCount] = useState(0);
  function toggleLike() {
    setLiked(!isLiked);
    setCount(count + 1);
  }
  let style = {color : "red"}
  return (
    <div>
      <h3>Like here</h3>
      <p>count = {count}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={style}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )
        }
      </p>
    </div>
  );
}
