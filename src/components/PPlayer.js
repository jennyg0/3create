import { Player } from "@livepeer/react";

const playbackId =
  "bafybeihbvr7b2oj6nfmot7m6znurkmcknz5cojfg6xpesocxfj67ixi53m";

export const PPlayer = () => {
  return (
    <Player
      title="Final Question"
      playbackId={playbackId}
      autoPlay
      //   muted
      showTitle={false}
      aspectRatio="16to9"
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: "hidden" },
        radii: { containerBorderRadius: "10px" },
      }}
    />
  );
};
