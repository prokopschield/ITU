import { createClient } from "@prokopschield/simple-socket-client";

export const [client, socket] = createClient("wss://camp.fitvut.cz");
