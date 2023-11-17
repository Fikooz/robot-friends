import { useState } from "react";

function Form({ addFriend }) {
  const [value, setValue] = useState("");

  return (
    <>
      <article>
        <div className="top">
          <h1>My Robots Friends</h1>
          <button className="button1">Light</button>
        </div>
        <div>
          <h2>Add New Frind</h2>
          <form action="">
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="C3PO R2D2"
              value={value}
              onChange={function (e) {
                setValue(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="ap">
          <p>Robot Image</p>
          <div className="div">
            {value && <img src={"https://robohash.org/" + value} />}
          </div>

          <button
            onClick={function (e) {
              if (value)
                addFriend({
                  name: value,
                  image: "https://robohash.org/" + value,
                });
            }}
          >
            Add Friend
          </button>
        </div>
      </article>
    </>
  );
}
export default Form;
