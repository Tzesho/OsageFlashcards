// AudioPlayer.js

import React, { useEffect, useState } from "react";

export default function AudioPlayer({ streamUrl }) {
  const [isAudio, setIsAudio] = useState(false);

  useEffect(() => {
    // Here we'll do a simple MIME type check.
    // Note: For a more thorough check, consider using server-side tools.
    fetch(streamUrl, {
      method: "HEAD", // Fetch headers only
    })
      .then((response) => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.startsWith("audio/")) {
          setIsAudio(true);
        } else {
          setIsAudio(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching the stream:", err);
      });
  }, [streamUrl]);

  if (isAudio) {
    return (
      <audio controls>
        <source src={streamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
  } else {
    return <p>Provided stream is not recognized as an audio stream.</p>;
  }
}
