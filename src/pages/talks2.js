import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// PDF component
import PDF from "../components/pdf"

// pdfs
//import Loday from "../static/Lodayfunctorcats.pdf"  
//import Fundamental from "../static/FTKthytalk.pdf"
//import Nilpotence from "../static/nilptalk.pdf"
//import ProObjects from "../static/pro-object.pdf"
//import Redshift from "../static/redshift.pdf"
//import SnowFlake from "../static/snowflake.pdf"
//import Stacks from "../static/stacks.pdf"

// YAML Data file
import YAMLData from "../content/talks.yml"

const Talks = () => (
  <Layout>
    <SEO title="Talks"/>
    <h1>{YAMLData.page}</h1>
    {YAMLData.sections.map((s, i) => (
      <>
        <h2 key={i}>{s.title}</h2>
        <ul>
        {s.talks ? s.talks.map((p, i) => (
          <li key={i}>
            <h4 key={i}>{p.month}
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

export default Talks
