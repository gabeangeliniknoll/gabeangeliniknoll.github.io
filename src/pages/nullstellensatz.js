import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// YAML Data file
import YAMLData from "../content/cnull.yml"

const Research = () => (
  <Layout>
    <SEO title="GdT chromatic nullstellensatz" />
    <h1>{YAMLData.page}</h1>
    <p>{YAMLData.pageDescription}<span> </span><a href={YAMLData.url} target="_blank" rel="noopener noreferrer">{`${YAMLData.urlText}`}</a>.</p>
     {YAMLData.sections.map((s, i) => (
      <>
        <h2 key={i}>{s.title}</h2>
        <ul>
        {s.lectures ? s.lectures.map((l, i) => (
          <li key={i}>
            <h4 key={i}>{l.title}</i></h4>
          </li>
        )) : null }
        </ul>
      </>
    ))} 
  </Layout>
)

export default Research
