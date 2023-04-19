import * as React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import { PipelineRunKF } from '~/concepts/pipelines/kfTypes';
import {
  RunCreated,
  RunDuration,
  RunName,
  RunStatus,
} from '~/concepts/pipelines/content/pipelinesTable/runRenderUtils';
import { sortRunsByCreated } from '~/concepts/pipelines/content/pipelinesTable/utils';

type RenderContentListProps = {
  firstItem?: React.ReactNode;
  items: React.ReactNode[];
};
export const RenderContentList: React.FC<RenderContentListProps> = ({ firstItem, items }) => (
  <Stack>
    {firstItem ?? <StackItem>&nbsp;</StackItem>}
    {items.map((item, i) => (
      <StackItem key={i}>{item}</StackItem>
    ))}
  </Stack>
);

type RenderContentByColumn = {
  names: React.ReactNode[];
  statuses: React.ReactNode[];
  durations: React.ReactNode[];
  createDates: React.ReactNode[];
};

export const combineRunsByColumn = (runs: PipelineRunKF[], sliceCount?: number) =>
  sortRunsByCreated(runs).reduce<RenderContentByColumn>(
    (acc, run, i) => {
      if (sliceCount && i >= sliceCount) {
        return acc;
      }

      acc.names.push(<RunName run={run} />);
      acc.statuses.push(<RunStatus run={run} />);
      acc.durations.push(<RunDuration run={run} />);
      acc.createDates.push(<RunCreated run={run} />);

      return acc;
    },
    { names: [], statuses: [], durations: [], createDates: [] },
  );