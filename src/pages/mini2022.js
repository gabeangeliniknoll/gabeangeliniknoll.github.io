import React from "react"
import Layout from "../components/layout"
import Berlin from "../components/berlin"
import SEO from "../components/seo"

const Mini = () => (
  <Layout>
    <SEO title="Mini" />
    <h1>Advances in K-Theory, Symmetry, and Periodicity</h1>
    <div>
      <div>
        <div style={{ float: `left`, maxWidth: `70%`, marginBottom: `1.45rem`}}>
          <p>This Mini-Symposium is part of the <a href="">DMV Annual Meeting 2020</a> held at Freie Universit<span>&#228;</span>t Berlin on September 12-16.</p>
          <h3>Confirmed Speakers</h3>
            <p>Jack Morgan Davies<br>
            </br>Eva H<span>&#246;</span>ning<br>
            </br>J.D. Quigley<br>
            </br>Mikala <span>&#216;</span>rsnes Jansen
            </p>
        </div>
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
    <div style={{marginLeft: `70%`, maxWidth: `30%`, marginBottom: `1.45rem` }} > 
      <Berlin />
    </div> 
</div>

  </Layout>
)

export default Mini
