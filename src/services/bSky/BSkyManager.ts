import {
  BskyAgent,
  AtpSessionEvent,
  AtpSessionData,
  RichText,
  AppBskyFeedGetAuthorFeed,
  ComAtprotoServerCreateSession,
  AppBskyActorGetProfile,
} from "@atproto/api";



// BSkyManager - Stores information needed to interact with the bSky API. As well as help handle the process of logging in.
export class BSkyManager {
  baseURL: string;
  getBaseURL(): string {
    return this.baseURL;
  }

  username: string;
  getUsername(): string {
    return this.username;
  }

  password: string;
  getPassword(): string {
    return this.password;
  }

  bSkyAgent: BskyAgent;
  getBSkyAgent(): BskyAgent {
    return this.bSkyAgent;
  }

  constructor(
    baseURL: string,
    username: string,
    password: string
  ) {
    this.baseURL = baseURL;
    this.username = username;
    this.password = password;
  }
}
