import { AccessToken } from "livekit-server-sdk";


export async function getToken({ roomName, participantName }) {

    // const livekitHost = "wss://test-et22r9u8.livekit.cloud";


    // const roomService = new RoomServiceClient(
    //     livekitHost,
    //     "APISR9G848vteWP",
    //     "RcaPTBbC1ee5nDURfHmcOmtSy6SZHdT7De5ddn3cDzeC"
    // );


    


    const participantIdentity = "hello" + Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    roomName = roomName;

    const at = new AccessToken(
        "APISR9G848vteWP",
        "RcaPTBbC1ee5nDURfHmcOmtSy6SZHdT7De5ddn3cDzeC",
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