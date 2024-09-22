import { PreJoin, useStartAudio } from "@livekit/components-react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/token";
import { useLocation } from "react-router-dom";
import Room from "./video";
import { useState } from "react";

export default function Lobby() {

    const location = useLocation();

    const roomName = location.pathname.split("/")[2];
    
    const [jwt, setJwt] = useState("");


    const call = async (values) => {
        const participantName = values.username;
        const {jwt} = await getToken({roomName,participantName});
        console.log(jwt);
        setJwt(jwt);
        
    }
    return (
        <div>
            {
                jwt ? <Room token={jwt} /> : <PreJoin onSubmit={call} />
            }
        </div>
    )
}