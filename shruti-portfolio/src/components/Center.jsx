import Hero from './Hero'
import Counter from './Counter'
import '../App.css'

function Center() {
  return (
    <section id="center">
      <Hero />
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <Counter />
    </section>
  )
}

export default Center
