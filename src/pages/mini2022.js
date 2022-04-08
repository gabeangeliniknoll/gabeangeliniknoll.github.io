import React from "react"
import Layout from "../components/layout"
import Berlin from "../components/berlin"
import SEO from "../components/seo"

const Mini = () => (
  <Layout>
    <SEO title="Mini" />
    <h1>Mini-Symposium:</h1>
    <h2>Advances in K-Theory, Symmetry, and Periodicity</h2>
    <div>
    <div style={{ float: `left`, maxWidth: `70%`, marginBottom: `1.45rem`}}>
      <p>This Mini-Symposium is part of the <a href="https://www.mi.fu-berlin.de/dmv2022/">DMV Annual Meeting 2022</a> to be held on September 12-16 at <a href="https://www.mi.fu-berlin.de/math/groups/top/members/index.html">Freie Universit<span>&#228;</span>t Berlin</a>.</p>
    </div>
    <div style={{marginLeft: `70%`, maxWidth: `30%`, marginBottom: `1.45rem` }} > 
      <Berlin />
    </div> 
    <div clear="both"></div>
    <div style={{ float: `left`, maxWidth: `100%`, marginBottom: `1.45rem`}}>
    <h2>Speakers</h2>
          <ul>
            <li>Jack Morgan Davies</li> 
            <li>Eva H<span>&#246;</span>ning </li>
            <li>Mikala <span>&#216;</span>rsnes Jansen</li>
            <li>J.D. Quigley</li>
          </ul>
      </div>
      <div style={{ float: `left`, maxWidth: `100%`, marginBottom: `1.45rem`}}>
      <h2>Abstract</h2>
        <p>Interactions between the fields of algebraic K-theory, equivariant homotopy theory, and chromatic homotopy theory, have led to exciting new results with applications to number
theory and geometric topology.</p> 
<p>Classically, equivariant homotopy theory is an integral part of a modern approach to algebraic K-theory, known as trace methods where one uses
Hochschild homology to approximate algebraic K-theory. The trace methods approach to K-theory, combined with tools from chromatic homotopy theory, has led to advances in our
understanding of the arithmetic of ring spectra.</p> 
<p>Additionally, the relatively recent theory of Real cyclotomic spectra combines topological Hochschild homology and equivariant
homotopy theory to produce new tools for computing Grothendieck-Witt groups and L-theory groups.</p> 
<p>The goal of this Minisymposium is to highlight recent advances in Hochschild
homology, algebraic K-theory, equivariant homotopy theory, and chromatic homotopy theory that combine tools from several of these fields, as well as bring together researchers from
these different areas to promote future interactions between these fields.</p>
</div>
</div>
  </Layout>
)

export default Mini
