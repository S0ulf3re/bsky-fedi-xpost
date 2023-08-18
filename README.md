# Bluesky/Fediverse Crossposter

## About
Right now, in the current state. Both the fediverse and the invite only Bluesky are emerging as the two biggest networks as open source decentralized social media. However, if you're lucky enough to be on both (or unlucky enough that your friend network is split across both), you might start to find that getting your messages out to both 

In addition, because both are radically different in their nature, with the Fediverse allowing a near infinite amount of characters per status, and Bluesky allowing 300, it needs to be designed in a way that can limit any confusion, regardless of who is using what.


## Scope of this program

This program aims to:

- Post anything you write to the opposite platform you wrote it to (If character count permits)
- Maintain the context of threads (where possible), as well as include any compatible media


It will not:

- copy messages that aren't written by you


## Building

Note: This program is being tested with Firefish v1.0.3 . However, because it uses Megalodon, it should work with any instance using Mastodon, Pleroma, or Misskey

### TODO: Update variables to better reflect nature of program

1. Create a text file in the root directory of this repository named `.env` with the following text:


```
FIREFISH_BASE_URL="https://example.com"
FIREFISH_BASE_WSS="https://example.com"

FIREFISH_ID="your_id"
FIREFISH_API_KEY="your_api_key"


BSKY_BASE_URL="https://bsky.social"
BSKY_USERNAME="a.verywacky.wolf"
BSKY_PASSWORD="pass-word-goes-here"
```

Replace `FIREFISH_ID` and `FIREFISH_API_KEY` with your user ID and API Key (With permission granted to read and write notes). And `BSKY_USERNAME` and `BSKY_PASSWORD` with your username and an **app** password.


2. (Building currently doesn't work while figuring out top level `async` ensues)
This program uses Yarn as it's package manager, [Megalodon](https://h3poteto.github.io/megalodon/) and the [Bluesky API library](https://www.npmjs.com/package/@atproto/api?activeTab=readme), so you will need to add those:

`yarn add megalodon @atproto/api`