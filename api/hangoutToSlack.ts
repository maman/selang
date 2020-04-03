import { NowRequest, NowResponse } from "@now/node";
import { IHangoutEvent } from "../lib/hangout-types";

export default (req: NowRequest, res: NowResponse) => {
  let responseText;
  const hangoutEvent: IHangoutEvent = req.body;
  if (
    hangoutEvent.type === "ADDED_TO_SPACE" &&
    hangoutEvent.space.type === "ROOM"
  ) {
    // todo
  }
  /**
   * 1. get text from hangout.
   * 2. get hangout room name.
   * 3. get slack room name from mapping, select by hangout room name.
   * 4. send text to slack room name webhook
   */
  res.status(200).send({ responseText });
};
