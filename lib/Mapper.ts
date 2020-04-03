interface IChannelMapping {
  [key: string]: Array<string>
}

export default class Mapper {
  private slackToHangout: IChannelMapping;
  private hangoutToSlack: IChannelMapping;

  constructor() {}

  public getSlackChannelFromHangout(hangoutChannel: string): Array<string> {
    return this.hangoutToSlack[hangoutChannel];
  }

  public getHangoutChannelFromSlack(slackChannel: string): Array<string> {
    return this.slackToHangout[slackChannel];
  }
}