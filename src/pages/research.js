import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import PDF from "../components/pdf"

import Papers from "./papers"

// YAML Data file
import YAMLData from "../content/research.yml"

const Research = () => (
  <Layout>
    <SEO title="Research" />
    <h1>{YAMLData.page}</h1>
    <p>{YAMLData.pageDescription}</p>
    {YAMLData.sections.map((s, i) => (
      <>
        <h2 key={i}>{s.title}</h2>
        <ul>
        {s.papers ? s.papers.map((p, i) => (
          <li key={i}>
            <h4 key={i}>{p.title}
            <span >{p.links ? p.links.map((l,i) => (
              <>
              <span> </span><a href={l.url} target="_blank" rel="noopener noreferrer">{`${l.display}`}</a><span> </span>  
              {l.body ? l.body.map(block => Papers(block)) 
              : null
              } 
              </>
            )
          )
          : null }
            </span> 
            </h4>
            <p>{p.description}</p>
            {p.journal ? p.journal.map((c, i) => (
                <>
                {`${c.start}`}<a href={`${c.url}`} target="_blank" rel="noopener noreferrer">{`${c.name}`}</a><span>{c.sep} </span>
                </>
              ))
              : null } 
            {p.coauthors ? p.coauthors.map((c, i) => (
                <>
                {`${c.start}`}<a href={`${c.url}`} target="_blank" rel="noopener noreferrer">{`${c.name}`}</a><span>{c.sep} </span>
                </>
              ))
              : null } <br /> 
          
          </li>
        )) : null }
        </ul>
      </>
    ))}
  </Layout>
)

export default Research
