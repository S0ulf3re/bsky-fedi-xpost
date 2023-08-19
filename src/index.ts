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
import { BSkyManager } from "./services/bSky/BSkyManager.js";
import {BSkyNetworkManager} from "./services/bSky/BSkyNetworkManager.js";
import {BSkyFeedManager} from "./services/bSky/feed/BSkyFeedManager.js";
import {FirefishManager} from "./services/fedi/FirefishManager.js";

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


// Get my newest status from Firefish


//


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
  BSKY_PASSWORD
);

const bSkyNetworkManager = new BSkyNetworkManager(bSkyAgent, bSkyManager);

const bSkyFeedManager = new BSkyFeedManager(bSkyAgent, bSkyManager);

const didPlc = "did:plc:bzq7nddu2ell26dsde5ba74g"

async function loginBskyAgent() {
    await bSkyAgent.login({
        identifier: BSKY_USERNAME,
        password: BSKY_PASSWORD,
    });
}

loginBskyAgent()

async function resumeBskySession() {
    let resumedSession = await bSkyAgent.resumeSession(
        JSON.parse(fs.readFileSync("session.json").toString())
    );
}

resumeBskySession()

// Get my newest post from bluesky
let latestPost = await bSkyFeedManager.getLatestBskyFeed()
console.log("latestPost")
// Check if the post is a repost


// If the post is a repost, ignore it and return. Since a repost can't be attached as a reply, we don't need to worry about parents


