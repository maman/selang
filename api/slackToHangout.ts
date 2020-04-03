import { NowRequest, NowResponse } from "@now/node";
import Mapper from '../lib/Mapper';

export default (req: NowRequest, res: NowResponse) => {
  const mapperInstance = new Mapper();
  let responseText = 'hello slacks!';
  /**
   * 1. get text from slack.
   * 2. get slack room name.
   * 3. get hangout room name from mapping, select by slack room name.
   * 4. send text to hangout room
   */
  res.status(200).send({ responseText });
};
