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
import {BSkyManager} from "./BSkyManager";

export class BSkyNetworkManager {

    bSkyAgent: BskyAgent;
    bSkyManager: BSkyManager;

    constructor(bSkyAgent: BskyAgent, bSkyManager: BSkyManager) {
        this.bSkyAgent = bSkyAgent;
        this.bSkyManager = bSkyManager;
    }


    async requestBskyAuthorFeed(): Promise<AppBskyFeedGetAuthorFeed.Response> {
        try {
            const response = await this.bSkyAgent.api.app.bsky.feed.getAuthorFeed({
                actor: this.bSkyManager.getUsername(),
                limit: 10,
            });
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }
}
