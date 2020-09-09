import React from "react";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const videoMachine = Machine({
  id: "videoMachine",
  initial: "loading",
  context: {
    video: null,
    duration: 0,
    elapsed: 0,
  },
  states: {
    loading: {
      on: {
        LOADED: {
          target: "ready",
          actions: assign({
            video: (ctx, event) => event.video,
            duration: (ctx, event) => event.video.duration,
          }),
        },
        FAILURE: "failure",
      },
    },
    ready: {
      initial: "paused",
      states: {
        paused: {
          on: {
            PLAY: { target: "playing", actions: ["playVideo"] },
          },
        },
        playing: {
          on: {
            PAUSE: { target: "paused", actions: ["pauseVideo"] },
            END: "ended",
            TIMING: {
              target: "playing",
              actions: assign({
                elapsed: ({ video }, event) => video.currentTime,
              }),
            },
          },
        },
        ended: {
          on: {
            PLAY: { target: "playing", actions: ["restartVideo"] },
          },
        },
      },
    },
    failure: { type: "final" },
  },
});

const playVideo = ({ video }, event) => {
  video.play();
};

const pauseVideo = ({ video }, event) => {
  video.pause();
};

const restartVideo = ({ video }, event) => {
  video.currentTime = 0;
  video.play();
};

export default function Player() {
  const ref = React.useRef(null);
  const [current, send] = useMachine(videoMachine, {
    actions: { playVideo, pauseVideo, restartVideo },
  });

  const { duration, elapsed } = current.context;

  console.log(current.value);

  return (
    <div>
      <h1>Player</h1>
      <br />
      <video
        ref={ref}
        controls
        onCanPlay={() => {
          send("LOADED", { video: ref.current });
        }}
        onError={() => {
          send("FAIL");
        }}
        onTimeUpdate={() => {
          send("TIMING");
        }}
        onEnded={() => {
          send("END");
        }}
      >
        <source
          src="http://techslides.com/demos/sample-videos/small.webm"
          type="video/webm"
        />
      </video>
      <br />

      <div>
        <ElapsedBar elapsed={elapsed} duration={duration} />
        <Buttons current={current} send={send} />
        <Timer elapsed={elapsed} duration={duration} />
      </div>
    </div>
  );
}

const Buttons = ({ current, send }) => {
  if (current.matches({ ready: "playing" }))
    return (
      <button
        onClick={() => {
          send("PAUSE");
        }}
      >
        Pause
      </button>
    );
  else
    return (
      <button
        onClick={() => {
          send("PLAY");
        }}
      >
        Play
      </button>
    );
};

const ElapsedBar = ({ elapsed, duration }) => (
  <div>
    <div
      style={{
        backgroundColor: "red",
        width: `${(elapsed / duration) * 100}`,
      }}
    />
  </div>
);

const Timer = ({ elapsed, duration }) => (
  <span>
    {elapsed} / {duration}
  </span>
);
