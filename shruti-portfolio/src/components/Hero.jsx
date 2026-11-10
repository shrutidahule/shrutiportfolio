import { useEffect, useState } from 'react'

function Hero() {
  const [soundOn, setSoundOn] = useState(false)

  useEffect(() => {
    if (!soundOn) return undefined

    const audio = new AudioContext()
    audio.resume()
    const master = audio.createGain()
    master.gain.setValueAtTime(0.0001, audio.currentTime)
    master.gain.exponentialRampToValueAtTime(0.035, audio.currentTime + 1.5)
    master.connect(audio.destination)

    const createDrone = (frequency, volume) => {
      const oscillator = audio.createOscillator()
      const gain = audio.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = frequency
      gain.gain.value = volume
      oscillator.connect(gain)
      gain.connect(master)
      oscillator.start()
      return oscillator
    }

    const drones = [createDrone(55, 0.45), createDrone(82.41, 0.2)]

    return () => {
      master.gain.cancelScheduledValues(audio.currentTime)
      master.gain.setTargetAtTime(0.0001, audio.currentTime, 0.12)
      drones.forEach(drone => drone.stop(audio.currentTime + 0.5))
      window.setTimeout(() => audio.close(), 600)
    }
  }, [soundOn])

  return (
    <header className="hero">
      <div className="hero-fog hero-fog-one" aria-hidden="true" />
      <div className="hero-fog hero-fog-two" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark">✳</span> A portfolio by Shruti Dahule <span className="eyebrow-divider">·</span> Pune, India</p>
        <h1>The work is here.<br /><span>The way in is yours.</span></h1>
        <p className="lead">
          Three doors. A few clues. A little about the things I build when nobody is watching.
        </p>
        <div className="hero-actions">
          <a className="btn main" href="#projects">Enter the archive <span aria-hidden="true">↓</span></a>
          <button
            className={`sound-toggle ${soundOn ? 'sound-on' : ''}`}
            type="button"
            aria-pressed={soundOn}
            onClick={() => setSoundOn(value => !value)}
          >
            <span className="sound-icon" aria-hidden="true">{soundOn ? '♫' : '♪'}</span>
            {soundOn ? 'Sound on' : 'Sound off'}
            <span className="sound-bars" aria-hidden="true"><i /><i /><i /><i /></span>
          </button>
        </div>
        <p className="sound-note">Sound is optional. The doors are not.</p>
      </div>

      <div className="hero-scene" aria-hidden="true">
        <div className="moonlight" />
        <div className="door-halo" />
        <div className="door-frame">
          <div className="door">
            <span className="door-number">03</span>
            <span className="door-panel door-panel-top" />
            <span className="door-panel door-panel-bottom" />
            <span className="door-knob" />
            <span className="door-keyhole">✳</span>
          </div>
        </div>
        <div className="scene-caption"><span /> THE ARCHIVE IS OPEN <span /></div>
        <div className="scene-floor" />
      </div>
      <a className="hero-scroll" href="#projects"><span className="scroll-line" /> Find the first clue</a>
    </header>
  )
}

export default Hero
