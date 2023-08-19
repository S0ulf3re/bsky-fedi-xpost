import {FeedViewPost} from "@atproto/api/dist/client/types/app/bsky/feed/defs.js";

export class BSkyFeedPost {


    async isRepost(post: FeedViewPost): Promise<boolean> {
        if (post.reason?.$type === "app.bsky.feed.defs#reasonRepost") {
            return true;
        } else {
            return false;
        }
    }
}
