import React from "react"
import {StaticImage} from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
  <Layout> 
    <SEO title="Home" />   
    {/* SEO.js gives title an arbitrary value, we fill that value with the page title, in this case 'Home Page' */}
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/images/main.jpeg" alt="eggs"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>lyla's recipes</h1>
            </div>
          </div>
        </header>
        {/* <FetchData /> */}
        <AllRecipes />
      </main>
  </Layout>
  )
}
 