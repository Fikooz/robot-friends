import { useState } from "react";

function Robots({ friends }) {
  const [value, setValue] = useState("");

  return (
    <>
      <article>
        <div>
          <h1>List Of Robot Friend</h1>
          <input
            type="search"
            placeholder="Search"
            value={value}
            onChange={function (e) {
              setValue(e.target.value);
            }}
          />
        </div>
        <div className="robots">
          {friends.map((f, i) => {
            return (
              <div>
                <h1>{f.name}</h1> <img src={f.image} />
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}
export default Robots;
