import React from 'react'
import Gtatheme from '@/components/Gtatheme.jsx';
import Quots from '@/components/Quots.jsx';
import Nav from '@/components/Nav.jsx';
import ContactUs from '@/components/ContactUs.jsx';
import ParticleOrbitEffect from "@/components/lightswind/particle-orbit-effect"

// import Skills from '@/components/Skills.jsx';

const App = () => {
  return (
    <>
      <ParticleOrbitEffect />
      <div className="overflow-x-hidden w-full">
        <Gtatheme />
        <Quots />
        <Nav />
        <ContactUs />
        {/* <Skills /> */}
      </div>
    </>
  )
}

export default App
