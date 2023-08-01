import { BskyAgent, AtpSessionEvent, AtpSessionData, RichText } from '@atproto/api'

export class BSkyManager {
    service: string

    setBSkyAgent(service: string): BskyAgent {
        const bSkyAgent = new BskyAgent ({
            service: service,
        })
        return bSkyAgent;
    }
    bSkyAgent: BskyAgent;

    constructor(service: string) {
        this.service = service;
        this.bSkyAgent = this.setBSkyAgent(service);
    }
}