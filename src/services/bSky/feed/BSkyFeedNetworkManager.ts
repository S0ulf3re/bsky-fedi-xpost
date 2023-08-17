import {
    BskyAgent,
    AtpSessionEvent,
    AtpSessionData,
    RichText,
    AppBskyFeedGetAuthorFeed,
    ComAtprotoServerCreateSession,
    AppBskyActorGetProfile,
    FeedViewPost,
} from "@atproto/api";
import {
    FeedViewPost,
    ReasonRepost,
} from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import {BSkyManager} from "../BSkyManager";
import {BSkyNetworkManager} from "../BSkyNetworkManager";

export class BSkyFeedNetworkManager extends BSkyNetworkManager {

    bSkyAgent: BskyAgent;
    bSkyManager: BSkyManager;



    async requestBskyAuthorFeed(): Promise<AppBskyFeedGetAuthorFeed.Response> {
        try {
            const response = await this.bSkyManager.getBSkyAgent().api.app.bsky.feed.getAuthorFeed({
                actor: this.bSkyManager.getUsername(),
                limit: 10,
            });
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }
}
