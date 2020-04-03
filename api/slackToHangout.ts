import { NowRequest, NowResponse } from "@now/node";

export default (req: NowRequest, res: NowResponse) => {
  let responseText = 'hello slack!';
  /**
   * 1. get text from slack.
   * 2. get slack room name.
   * 3. get hangout room name from mapping, select by slack room name.
   * 4. send text to hangout room
   */
  res.status(200).send({ responseText });
};
