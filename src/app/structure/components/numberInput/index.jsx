import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

const NumberInput = ({ number, onNumberClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickSound, setClickSound] = useState(null);
  const [isClickSoundLoaded, setIsClickSoundLoaded] = useState(false);

  useEffect(() => {
    // ایجاد نمونه Howl برای صدای کلیک
    setClickSound(
      new Howl({
        src: ["/sounds/click.mp3"],
        html5: true,
        delay: 0,

        preload: "auto",
        onload: () => {
          setIsClickSoundLoaded(true);
        },
      })
    );
  }, []);

  const handleClick = () => {
    if (clickSound) {
      setIsPlaying(true);
      clickSound.play();
      setTimeout(() => {
        setIsPlaying(false);
      }, 100);
      onNumberClick(number);
    }
  };

  return (
    <div className="w-full col-span-1 !p-0 flex justify-center">
      <div
        onClick={handleClick}
        className="select-none text-3xl text-gray-700 font-semibold cursor-pointer hover:bg-gray-300 transition-all flex items-center justify-center w-[64px] h-[64px] rounded-full bg-gray-200"
      >
        {number}
      </div>
    </div>
  );
};

export default NumberInput;
