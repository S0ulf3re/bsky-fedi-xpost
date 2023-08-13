import {
  BskyAgent,
  AtpSessionEvent,
  AtpSessionData,
  RichText,
  AppBskyFeedGetAuthorFeed,
  ComAtprotoServerCreateSession,
  AppBskyActorGetProfile,
} from "@atproto/api";
import {
  FeedViewPost,
  ReasonRepost,
} from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import { ReasonType } from "@atproto/api/dist/client/types/com/atproto/moderation/defs";
import * as fs from "fs";

export class BSkyManager {
  baseURL: string;
  username: string;
  password: string;
  bSkyAgent: BskyAgent;

  constructor(
    baseURL: string,
    username: string,
    password: string,
    bSkyAgent: BskyAgent
  ) {
    this.baseURL = baseURL;
    this.username = username;
    this.password = password;
    this.bSkyAgent = bSkyAgent;
  }

  async loginBskyAgent() {
    await this.bSkyAgent.login({
      identifier: this.username,
      password: this.password,
    });
  }

  async resumeBskySession() {
    let resumedSession = await this.bSkyAgent.resumeSession(
      JSON.parse(fs.readFileSync("session.json").toString())
    );
  }

  // Returns the latest post from the specified handle. See `value.data.feed[0]` for actual post data.
  async getBskyAuthorFeed(): Promise<AppBskyFeedGetAuthorFeed.Response> {
    const response = await this.bSkyAgent.api.app.bsky.feed.getAuthorFeed({
      actor: this.username,
      limit: 1,
    });
    return response;
  }

  getLatestBskyFeed(response: AppBskyFeedGetAuthorFeed.Response) {
    return response.data.feed[0];
  }



  async getBskyProfile(): Promise<AppBskyActorGetProfile.Response> {
    const response = await this.bSkyAgent.api.app.bsky.actor.getProfile({
        actor: this.username
    });
    return response;
  }



  determineIfRepost(post: FeedViewPost): boolean {
    if (post.reason?.$type === "app.bsky.feed.defs#reasonRepost") {
      return true;
    } else {
      return false;
    }
  }

  // determineIfReplyingToSelf(post: FeedViewPost): boolean {

  // }
}
