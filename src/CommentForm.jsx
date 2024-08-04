import { useState } from "react";

export default function CommentForm() {
  let [formData, serFormData] = useState({
    userName: "",
    remarks: "",
    ratings: "5",
  });

  let handleInputChange = (e) => {
    serFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  let handleForm = (e) => {
    console.log(formData);
    e.preventDefault();
    serFormData({
      userName: "",
      remarks: "",
      ratings: "5",
    });
  };
  return (
    <div>
      <h2>Leave Us a Comment</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          name="userName"
          placeholder="username"
          id="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="ratings">ratings</label>
        <input
          type="number"
          name="ratings"
          id="ratings"
          value={formData.ratings}
          onChange={handleInputChange}
          min={1}
          max={5}
        />{" "}
        <br />
        <br/>
        <button>Add Comment</button>
      </form>
    </div>
  );
}
