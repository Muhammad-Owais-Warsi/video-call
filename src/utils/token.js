import { AccessToken } from "livekit-server-sdk";


export async function getToken({ roomName, participantName }) {


    const participantIdentity = participantName + Math.floor(Math.random() * (100 - 1 + 1)) + 1;


    const at = new AccessToken(
        import.meta.env.VITE_LIVEKIT_API_KEY,
        import.meta.env.VITE_LIVEKIT_API_SECRET,
        {
            identity: participantIdentity,
            name:participantName
        },
        
    );
    const grant = {
        room: roomName,
        roomJoin: true,
        canPublish: true,
        canPublishData: true,
        canSubscribe: true,
    };

    at.addGrant(grant);

    const jwt = await at.toJwt();

    return {jwt};


}