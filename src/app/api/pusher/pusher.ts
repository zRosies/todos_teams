import PusherServer from "pusher";
import PusherClient from "pusher-js";

let pusherInstance: PusherServer | null = null;

export const getPusherInstance = () => {
  if (!pusherInstance) {
    pusherInstance = new PusherServer({
      appId: process.env.APP_ID as string,
      key: process.env.KEY as string,
      secret: process.env.SECRET as string,
      cluster: process.env.CLUSTER as string,
      useTLS: true,
    });
  }
  return pusherInstance;
};

export const pusherServer = new PusherServer({
  appId: process.env.APP_ID!,
  //   maybe the key is nextpublic
  key: process.env.KEY!,

  secret: process.env.SECRET!,
  cluster: "us2",
  useTLS: true,
});

export const pusherClient = new PusherClient("cb23f9b76fd390ed0200", {
  cluster: "us2",
  authEndpoint: "/api/pusher",
});
