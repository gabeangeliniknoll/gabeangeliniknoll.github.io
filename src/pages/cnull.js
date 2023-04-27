import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PDF from "../components/pdf"
import Cnull from "../static/gdt-nullstellensatz.pdf"

const Research = () => (
  <Layout>
    <SEO title="Groupe de Travail: The chromatic Nullstellensatz" />
    <h2>Groupe de Travail on the chromatic Nullstellensatz</h2>
    <p>We are organizing a <PDF pdfFile={Cnull} displayText='Groupe de travail' /> on the paper <a href="https://arxiv.org/abs/2207.09929">The chromatic nullstellensatz</a> by Burklund-Schlank-Yuan at Université Sorbonne Paris Nord in 2022-2023.</p>
      <h3>Talks</h3>
        <h4>October 20th</h4>
          <p>Introduction to the seminar by Christian Ausoni</p>
        <h4>November 24th</h4> 
          <p>Spherical Witt vectors by Victor Saunier</p>  
        <h4>December 4th</h4> 
          <p>Lubin-Tate theory by Jordan Levin</p>
        <h4>December 15th</h4>
          <p>Detecting nilpotence by Gregory Ginot</p>
        <h4>Janurary 19th</h4>
        <p>Examples of detecting nulpotence by Geoffroy Horel</p>
        <h4>February 23rd</h4>
          <p>The main theorem: the height zero case and outline of the proof by Tasos Moulinos</p>
        <h4>May 4th</h4>
          <p>The main theorem: the higher height case by Christian Ausoni</p>
        <h4>TBD</h4>
          <p>Chromatic height of Algebraic K-theory of Lubin-Tate theory by Gabriel Angelini-Knoll</p>
  </Layout>
)

export default Research
