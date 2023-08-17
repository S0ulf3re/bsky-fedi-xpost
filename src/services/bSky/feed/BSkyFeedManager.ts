import {
    BskyAgent,
    AtpSessionEvent,
    AtpSessionData,
    RichText,
    AppBskyFeedGetAuthorFeed,
    ComAtprotoServerCreateSession,
    AppBskyActorGetProfile,
  } from "@atproto/api";
import {BSkyNetworkManager} from "../BSkyNetworkManager";

export class BSkyFeedManager extends BSkyNetworkManager {

    // Returns the latest post from the specified handle. See `value.data.feed[0]` for actual post data.
    async getLatestBskyFeed() {
        let response = await this.requestBskyAuthorFeed();
//        console.log(response)
        return response.data.feed[0];
    }
}
