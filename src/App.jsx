import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Robots from "./components/robots";

function App() {
  const [friends, setFriends] = useState([]);

  function addFriend(friend) {
    setFriends([friend, ...friends]);
  }

  return (
    <>
      <main>
        <Form addFriend={addFriend} />
        <Robots friends={friends} />
      </main>
    </>
  );
}

export default App;
