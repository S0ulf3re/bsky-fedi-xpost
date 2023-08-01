import generator, { Entity, Response } from 'megalodon'
import { BskyAgent, AtpSessionEvent, AtpSessionData, RichText } from '@atproto/api'
import * as fs from 'fs';
import { BSkyManager } from './bSkyManager';
// Import .env file
const dotenv = require('dotenv').config()


// The base URL of the Firefish API
const FIREFISH_BASE_WSS: string = String(process.env.FIREFISH_BASE_WSS)

// The Firefish User ID
const FIREFISH_ID: string = String(process.env.FIREFISH_ID)

// The assigned API key for the Firefish API
const FIREFISH_API_KEY: string = String(process.env.FIREFISH_API_KEY)

// Create the Firefish client object
const client = generator('misskey', FIREFISH_BASE_WSS, FIREFISH_API_KEY)

// The Base URL of Bluesky
const BSKY_BASE_URL: string = String(process.env.BSKY_BASE_URL)

// The login credentials for Bluesky
const BSKY_USERNAME: string = String(process.env.BSKY_USERNAME)
const BSKY_PASSWORD: string = String(process.env.BSKY_PASSWORD)




// const postToBsky = async () => {


//   const rt = new RichText({ text: "testing" });
//   const postRecord = {
//     $type: "app.bsky.feed.post",
//     text: rt.text,
//     facets: rt.facets,
//     createdAt: new Date().toISOString(),
//   };
//   await bSkyAgent.post(postRecord);
// };

// client.getAccountStatuses(FIREFISH_ID, {limit: 1}).then((res: Response<Entity.Status[]>) => {
//     console.log(res.data)
// })


let bSkyManager = new BSkyManager(BSKY_BASE_URL);
let bSkyAgent = bSkyManager.bSkyAgent;

