import { Timeline } from "@primer/react-brand";

export default function MyTimeline() {
  return (
    <Timeline>
      <Timeline.Item>
        <em>Chart</em> any indicator, and identify patterns. You can view
        occurences over a time series, or overlap all occurences to observe in a
        snap what happens next at once.
      </Timeline.Item>
      <Timeline.Item>
        <em>Backtest</em> your custom signals, whether bullish or bearish. View
        what performance a portfolio following your strategy would have
        delivered in the past.
      </Timeline.Item>
      <Timeline.Item>
        <em>Optimize</em> parameters to get the best performance. Our tool tunes
        and finds the parameter values leading to best results.
      </Timeline.Item>
      <Timeline.Item></Timeline.Item>
    </Timeline>
  );
}
