import {
    BskyAgent,
    AtpSessionEvent,
    AtpSessionData,
    RichText,
    AppBskyFeedGetAuthorFeed,
    ComAtprotoServerCreateSession,
    AppBskyActorGetProfile
} from "@atproto/api";
import {BSkyManager} from "../BSkyManager.js";
import {BSkyNetworkManager} from "../BSkyNetworkManager.js";

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
