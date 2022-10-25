import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardPage = ({ match, socket }) => {
  const [chatrooms, setChatrooms] = React.useState([]);
  const [chatroom, setChatroom] = React.useState();
  const [room, setRoom] = React.useState();
  let mytoken = localStorage.getItem("CC_Token")
  console.log("mon token : "+ mytoken);
  const getChatrooms = () => {
    axios
      .get("http://localhost:8000/chatroom", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
        console.log("response : ", response);
        setChatrooms(response.data);
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  };
  const addChatroom = () => {
    // console.log("le token : " + mytoken);
    // axios.post("http://localhost:8000/chatroom", {
    //   headers: {
    //     Authorization: "Bearer " + mytoken,
    //   },
    // })
    // .then((response) => {
    //   console.log(response.data);
    // })
    // .catch((err) => {
    //   //setTimeout(getChatrooms, 3000);
    // });;
    if (socket) {
      console.log("room à creeer : ", room);
      socket.emit("createchatroom", {
        room
      });
    }
  }

  React.useEffect(() => {
    getChatrooms();
    //addChatroom();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card">
      <div className="cardHeader">Chatrooms</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="ChatterBox Nepal"
            onInput={e => setRoom(e.target.value)}
          />
        </div>
      </div>
      <button onClick={addChatroom}>
        Create Chatroom
          </button>
      <div className="chatrooms">
        {chatrooms.map((chatroom) => (
          <div key={chatroom._id} className="chatroom">
            <div>{chatroom.name}</div>
            <Link to={"/chatroom/" + chatroom._id}>
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
