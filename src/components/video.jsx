
import {LiveKitRoom} from "@livekit/components-react";
import "@livekit/components-styles";
import { VideoConference } from "@livekit/components-react";





export default function Room({ token }) {




    return (

        <LiveKitRoom
            video={true}
            audio={true}
            token={token}
            serverUrl={import.meta.env.VITE_LIVEKIT_SERVER_URL}
            // Use the default LiveKit theme for nice styles.
            data-lk-theme="default"
            style={{ height: '100vh' , width: '100vw'}}

        >

        <VideoConference />


        </LiveKitRoom>
    );
}

