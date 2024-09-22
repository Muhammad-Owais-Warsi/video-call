import { PreJoin } from "@livekit/components-react";
import { getToken } from "../utils/token";
import { useLocation } from "react-router-dom";
import Room from "./video";
import { useState } from "react";
import '@livekit/components-styles';

export default function Lobby() {
    const location = useLocation();
    const roomName = location.pathname.split("/")[2];
    const [jwt, setJwt] = useState("");

    const call = async (values) => {
        const participantName = values.username;
        const { jwt } = await getToken({ roomName, participantName });
        setJwt(jwt);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #444444, #1a1a1a)" }}
        >
            {jwt ? (
                <Room token={jwt} />
            ) : (
                <div className="flex flex-col items-center justify-center w-full p-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 bg-clip-text text-transparent mb-8 sm:mb-10 md:mb-16 text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300">
                           Prejoin
                        </span>
                    </h1>
                    <div className="w-full max-w-lg">
                        <PreJoin
                            onSubmit={call}
                          
                            data-lk-theme="default"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
