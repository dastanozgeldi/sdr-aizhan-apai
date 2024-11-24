"use client";

import Confetti from "react-confetti";
import { Cake } from "lucide-react";
import { NeVseTakProsto } from "./components/ne-vse-tak-prosto";
import i2 from "./assets/i2.png";
import birthdaySong from "./assets/birthday-song.mp3";
import { useState } from "react";

export default function BirthdayPage() {
  const [audioPlaying, setAudioPlaying] = useState(false);

  return (
    <>
      <audio
        controls
        onPlay={() => setAudioPlaying(true)}
        onPause={() => setAudioPlaying(false)}
      >
        <source src={birthdaySong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {audioPlaying && (
        <>
          <Confetti />

          <div className="flex items-center mb-6">
            <Cake className="w-16 h-16 text-pink-500 mr-4" />
            <h1 className="text-4xl font-bold text-center text-purple-800">
              С ДР, Айжан апай!
            </h1>
          </div>

          <img src={i2} className="h-[400px]" />

          <div className="mb-4 text-xl md:text-2xl text-center text-purple-700">
            <p className="max-w-2xl">
              И2 сізді туған күніңізбен шын жүректен құттықтайды!
            </p>
          </div>

          <NeVseTakProsto />
        </>
      )}
    </>
  );
}
