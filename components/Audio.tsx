import { WaveformSlider } from "./Modules/wave-form"


export default function AudioPlayerPage() {
  const waveformData = Array.from({ length: 100 }, () => Math.random() * 0.8 + 0.2)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Audio Player</h1>
      <WaveformSlider
        audioSrc="/path/to/your/audio.mp3"
        waveformData={waveformData}
        color="#3b82f6"
        backgroundColor="#e5e7eb"
      />
    </div>
  )
}