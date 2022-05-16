import { Context } from 'probot';

import { plumberPullEvent } from '../services/common.service';

import { Commit } from './commit/commit.model';
import { Config } from '../config/config.model';
import { BugRef } from './commit/commit';

import { Milestone, Project } from '@octokit/webhooks-types';

export type Title = {
  title: string;
  bugRef?: BugRef;
};

export type IssueObject = {
  id: number;
  title: string;
  body: ?string;
  assignees?: string[];
  labels?: string[];
  milestone?: Milestone | null;
  project?: Project;
};

export interface PullRequestObject extends IssueObject {
  commits: Commit[];
}
