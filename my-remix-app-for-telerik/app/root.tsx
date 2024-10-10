import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Scheduler, AgendaView, TimelineView, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
// @ts-expect-error
import { sampleData, displayDate } from './data/shared-sc-events-utc';
import '@progress/kendo-theme-default/dist/all.css';


export function meta() {
  return [
    { charset: "utf-8" },
    { title: "Remix Kendo Scheduler" },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Scheduler data={sampleData} defaultDate={displayDate}>
      <AgendaView />
      <TimelineView />
      <DayView />
      <WeekView />
      <MonthView />
    </Scheduler>
  );
}