import * as React from 'react';
import {
  Scheduler,
  AgendaView,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
} from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './data'; // Sample data and default display date

const SchedulerComponent = () => {
  return (
    <Scheduler data={sampleData} defaultDate={displayDate}>
      <AgendaView />
      <TimelineView />
      <DayView />
      <WeekView />
      <MonthView />
    </Scheduler>
  );
};

export default SchedulerComponent;