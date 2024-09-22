
import {
    ChatEntry,
    ControlBar,
    GridLayout,
    LiveKitRoom,
    ParticipantTile,
    RoomAudioRenderer,
    useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import { VideoConference } from "@livekit/components-react";
import { formatChatMessageLinks } from "@livekit/components-react";

import { useLocation } from "react-router-dom";
import { Chat } from "@livekit/components-react";

const serverUrl = 'wss://test-et22r9u8.livekit.cloud';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjU4MzkxNDQsImlzcyI6IkFQSTVVOUViS0xlcmN0ZiIsIm5iZiI6MTcyNTgzMTk0NCwic3ViIjoicXVpY2tzdGFydCB1c2VyIDFnZ3FvZSIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJxdWlja3N0YXJ0IHJvb20iLCJyb29tSm9pbiI6dHJ1ZX19.m3gXET49alpOIIsIBBiPPILxydEd4qNDbySu3XsNrw8';

export default function Room({ token }) {




    return (

        <LiveKitRoom
            video={true}
            audio={true}
            token={token}
            serverUrl={serverUrl}
            // Use the default LiveKit theme for nice styles.
            data-lk-theme="default"
            style={{ height: '100vh' }}

        >

            {/* <MyVideoConference />

        <RoomAudioRenderer />

        <ControlBar />
  
        <div>
            <Chat>
                <ChatEntry></ChatEntry>
            </Chat>
        </div> */}

            <VideoConference
                chatMessageFormatter={formatChatMessageLinks}
             
            />
        <RoomAudioRenderer />
        

<ControlBar />
        </LiveKitRoom>
    );
}

function MyVideoConference() {
    // `useTracks` returns all camera and screen share tracks. If a user
    // joins without a published camera track, a placeholder track is returned.
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false },
    );
    return (
        <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
            {/* The GridLayout accepts zero or one child. The child is used
        as a template to render all passed in tracks. */}
            <ParticipantTile />
        </GridLayout>
    );
}