import React from "react"
import Hero from "../components/hero.js"
import Symbols from "../components/symbols.js"
import Community from "../components/community.js"
import Features from "../components/features.js"
import Footer from "../components/footer.js"
import '../style.css'

export default function Home() {

  return <div id="page">
    <Hero />
    <Symbols />
    <Community />
    <Features />
    <Footer />
   
  </div>
}
