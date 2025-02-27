import {NowRequest, NowResponse} from '@now/node';
import Mapper from '../lib/Mapper';
import {IHangoutEvent} from '../lib/hangout-types';

export default (req: NowRequest, res: NowResponse) => {
  const mapperInstance = new Mapper();
  let responseText = "hello hangout!";
  const hangoutEvent: IHangoutEvent = req.body;
  /**
   * 1. get text from hangout.
   * 2. get hangout room name.
   * 3. get slack room name from mapping, select by hangout room name.
   * 4. send text to slack room name webhook
   */
  res.status(200).send({responseText, env: process.env.TEST_ENV});
}