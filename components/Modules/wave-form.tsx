"use client"

import React, { useRef, useState, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'

interface WaveformSliderProps {
  audioSrc: string
  waveformData: number[]
  color?: string
  backgroundColor?: string
}

const WaveformSlider: React.FC<WaveformSliderProps> = ({
  audioSrc,
  waveformData,
  color = '#3b82f6',
  backgroundColor = '#e5e7eb',
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const waveformRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateDuration = () => setDuration(audio.duration);
      const updateCurrentTime = () => setCurrentTime(audio.currentTime);

      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('timeupdate', updateCurrentTime);

      return () => {
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('timeupdate', updateCurrentTime);
      }
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (waveformRef.current && audioRef.current) {
      const rect = waveformRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const seekPercentage = x / rect.width;
      audioRef.current.currentTime = seekPercentage * duration;
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-6">
      <audio ref={audioRef} src={audioSrc} />
      <div
        ref={waveformRef}
        className="h-24 mb-4 cursor-pointer"
        onClick={handleSeek}
        style={{ backgroundColor }}
      >
        {waveformData.map((amplitude, index) => (
          <div
            key={index}
            className="inline-block w-1 mx-px"
            style={{
              height: `${amplitude * 100}%`,
              backgroundColor: index / waveformData.length < currentTime / duration ? color : backgroundColor,
            }}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <span className="text-sm text-gray-500">{formatTime(currentTime)}</span>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => skip(-10)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Skip backward 10 seconds"
          >
            <SkipBack size={24} />
          </button>
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 focus:outline-none"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={() => skip(10)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Skip forward 10 seconds"
          >
            <SkipForward size={24} />
          </button>
        </div>
        <span className="text-sm text-gray-500">{formatTime(duration)}</span>
      </div>
    </div>
  )
}

// Demo component to showcase the WaveformSlider
const WaveformSliderMain: React.FC = () => {
  const generateWaveformData = (length: number) => {
    return Array.from({ length }, () => Math.random() * 0.8 + 0.2)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Dolphin UI WaveformSlider</h1>
        <WaveformSlider
          audioSrc="https://example.com/audio.mp3"
          waveformData={generateWaveformData(100)}
          color="#3b82f6"
          backgroundColor="#e5e7eb"
        />
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{`import { WaveformSlider } from '@/components/waveform-slider'

<WaveformSlider
  audioSrc="path/to/audio.mp3"
  waveformData={[/* array of amplitude values between 0 and 1 */]}
  color="#3b82f6"
  backgroundColor="#e5e7eb"
/>`}</code>
          </pre>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Props</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>audioSrc</strong>: string (URL or path to the audio file)</li>
            <li><strong>waveformData</strong>: number[] (array of amplitude values between 0 and 1)</li>
            <li><strong>color</strong>: string (optional, color of the played portion of the waveform)</li>
            <li><strong>backgroundColor</strong>: string (optional, color of the unplayed portion of the waveform)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { WaveformSlider, WaveformSliderMain }