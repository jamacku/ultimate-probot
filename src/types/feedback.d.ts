import { Context } from 'probot';

import { plumberPullEvent } from '../services/common.service';

export type FeedbackObject = {
  context:
    | Context<typeof plumberPullEvent.edited[number]>
    | Context<typeof plumberPullEvent.init[number]>;
  id?: number;
  message?: string;
};