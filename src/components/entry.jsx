import { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function Entry() {


    const [room ,setRoom] = useState("");

    const navigate = useNavigate();;

    const enter = () => {
        navigate(`/lobby/${room}/${Math.floor(Math.random() * (100 - 1 + 1)) + 1}`)
    }

    return (
        <div>
            <input placeholder="room-name" value={room} onChange={(e) => setRoom(e.target.value)}></input>
            <button onClick={enter}>Enter Lobby</button>
        </div>
    )
}