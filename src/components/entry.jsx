import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Entry() {
    const [room, setRoom] = useState("");
    const [roomLink, setRoomLink] = useState("");
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const enter = () => {
        if (!roomLink) {
            alert("Create room first"); // Replace with your custom toast function
            return;
        }
        if (room.trim()) {
            navigate(`/lobby/${room}/${Math.floor(Math.random() * 100) + 1}`);
        }
    };

    const createRoom = () => {
        if (room.trim()) {
            const generatedLink = `${window.location.origin}/lobby/${room}/${Math.floor(Math.random() * 100) + 1}`;
            setRoomLink(generatedLink);
            setShowToast(true);
        }
    };

    const copyToClipboard = () => {
        if (roomLink) {
            navigator.clipboard.writeText(roomLink)
                .then(() => {
                  
                    setShowToast(false); // Hide the toast after copying
                })
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen w-screen text-white p-6"
            style={{ background: "linear-gradient(135deg, #444444, #1a1a1a)" }}
        >
            <div className="w-full max-w-lg">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 bg-clip-text text-transparent mb-10 sm:mb-12 md:mb-16 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300">
                        Video Call
                    </span>
                </h1>
            </div>
            <input
                className="w-full max-w-md p-3 sm:p-4 text-lg sm:text-xl rounded-lg border border-gray-600 mb-4 sm:mb-6 bg-gray-200 text-black text-center shadow-lg focus:outline-none focus:ring-2"
                placeholder="Enter room name"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button
                className="w-full max-w-md px-6 py-2 sm:px-8 sm:py-3 text-lg sm:text-xl bg-[rgb(42,42,42)] text-green-500 rounded-lg shadow-md transition-all duration-300 focus:outline-none mb-4"
                onClick={createRoom}
            >
                Create Room
            </button>
            <button
                className="w-full max-w-md px-6 py-2 sm:px-8 sm:py-3 text-lg sm:text-xl bg-[rgb(42,42,42)] text-blue-500 rounded-lg shadow-md transition-all duration-300 focus:outline-none mb-4"
                onClick={enter}
            >
                Enter Lobby
            </button>

            {showToast && (
                <div className="fixed flex justify-center items-center gap-9 top-5 left-1/2 transform -translate-x-1/2 bg-[rgb(42,42,42)] text-white rounded-md shadow-lg p-4">
                    <p > <span className="font-bold ">{roomLink}</span></p>
                    <button
                        onClick={copyToClipboard}
                        className="rounded-md px-4 py-2 bg-[rgb(42,42,42)] border-cyan-500 border text-white"
                    >
                        Copy
                    </button>
                </div>
            )}

            <footer className="absolute bottom-5 left-0 right-0 text-center text-sm text-gray-400">
                Made with
                <span style={{ color: "red", margin: "0 4px" }}>❤️</span>
                by{' '}
                <a
                    href="https://owais-warsi.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
                >
                    Owais
                </a>
            </footer>
        </div>
    );
}
