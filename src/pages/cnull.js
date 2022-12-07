import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cnull from "../static/gdt-nullstellensatz"

const Research = () => (
  <Layout>
    <SEO title="Groupe de Travail: The chromatic Nullstellensatz" />
    <h2>Groupe de Travail on the chromatic Nullstellensatz</h2>
    <p> We are organizing a Groupe de traivail on the paper <a href="https://arxiv.org/abs/2207.09929">The chromatic nullstellensatz</a> by Burklund-Schlank-Yuan at Université Sorbonne Paris Nord in 2022-2023. The rough syllabus of the seminar is [<PDF pdfFile={Cnull} displayText='here' />]</p>
      <h3>Talks</h3>
        <p>October 20th <bf>Introduction to the seminar </bf> by Christian Ausoni </p>
        <p>November 24th: <bf>Spherical Witt vectors</bf> by Victor Saunier</p>  
        <p>December 4th: <bf>Lubin-Tate theory</bf> by Jordan Levin</p>
        <p>December 15th: <bf>Detecting nilpotence</bf> by Gregory Ginot</p>
        <p>Janurary 16th: <bf>Examples of detecting nulpotence</bf> by Geoffroy Horel</p>
        <p>Februaty 2nd: <bf>The height zero case of the main theorem</bf></p>
        <p>Februaty 9th: <bf>The main theorem</bf></p>
  </Layout>
)

export default Research
