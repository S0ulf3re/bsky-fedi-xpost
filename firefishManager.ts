import generator, { Entity, MegalodonInterface, Response } from "megalodon";

export class FirefishManager {

  // The URL of the Instance
  baseURL: string;

  // The user to listen for notes from
  userID: string;

  // The API key to use to upload notes
  apiKey: string;

  // Load the Megalodon Interface
  client: MegalodonInterface;

  constructor(baseURL: string, userID: string, apiKey: string) {
    this.baseURL = baseURL;
    this.userID = userID;
    this.apiKey = apiKey;

    // Firefish is a fork of Misskey, and remains relatively compatible with it's API
    this.client = generator("misskey", this.baseURL, this.apiKey);
  }

  // Retrieve the latest status from a user
  async getLatestFirefishStatus(): Promise<Entity.Status> {
    const statuses = await this.client.getAccountStatuses(this.userID, {
      limit: 1,
    });
    //console.log(statuses.data[0]);
    return statuses.data[0];
  }
}
