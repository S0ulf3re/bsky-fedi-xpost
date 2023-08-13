import {
  BskyAgent,
  AtpSessionEvent,
  AtpSessionData,
  RichText,
  ComAtprotoServerCreateSession,
  AppBskyFeedGetAuthorFeed,
  AppBskyActorGetProfile
} from "@atproto/api";
import * as fs from "fs";
import { BSkyManager } from "./bSkyManager";
import { FirefishManager } from "./firefishManager";
import { isReasonRepost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

// Import .env file
const dotenv = require("dotenv").config();

// Create the Firefish Manager object using the contents of .env
const firefishManager = new FirefishManager(
  // The specified instance URL
  String(process.env.FIREFISH_BASE_URL),

  // The User ID to watch posts for
  String(process.env.FIREFISH_ID),

  // The API key to use for posting
  String(process.env.FIREFISH_API_KEY)
);

// firefishManager.getLatestFirefishStatus().then((value: Entity.Status) => {
//   console.log(value.plain_content);
// });

// The Base URL of Bluesky
const BSKY_BASE_URL: string = String(process.env.BSKY_BASE_URL);

// The login credentials for Bluesky
const BSKY_USERNAME: string = String(process.env.BSKY_USERNAME);
const BSKY_PASSWORD: string = String(process.env.BSKY_PASSWORD);

const bSkyAgent = new BskyAgent({
  service: BSKY_BASE_URL,
  persistSession: (evt: AtpSessionEvent, sess?: AtpSessionData) => {
    // persist session data to disk
    fs.writeFileSync("session.json", JSON.stringify(sess));
  },
});


// Create new bSkyManager object to manage making and retrieving posts
const bSkyManager = new BSkyManager(
  BSKY_BASE_URL,
  BSKY_USERNAME,
  BSKY_PASSWORD,
  bSkyAgent
);


const didPlc = "did:plc:bzq7nddu2ell26dsde5ba74g"
bSkyManager.loginBskyAgent()
bSkyManager.resumeBskySession()
bSkyManager.getBskyProfile().then((value: AppBskyActorGetProfile.Response) => {
  console.log(value.data.did)
})

// bSkyManager.getBskyAuthorFeed().then((value: AppBskyFeedGetAuthorFeed.Response) => {

//   // This is the farthest that the AT Proto API can take us. Anything else is going to need to be manually parsed.
//   //let parsedData = bSkyManager.parseLatestBskyPost(value);
//   console.log(value.data.feed[0].reply?.parent.author);

//   console.log(bSkyManager.determineIfRepost(value.data.feed[0]));

// })
