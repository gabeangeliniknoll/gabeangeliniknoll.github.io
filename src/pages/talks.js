import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// PDF component
import PDF from "../components/pdf"

// pdfs
import Loday from "../static/Lodayfunctorcats.pdf"  
import Fundamental from "../static/FTKthytalk.pdf"
import Nilpotence from "../static/nilptalk.pdf"
import ProObjects from "../static/pro-object.pdf"
import Redshift from "../static/redshift.pdf"
import SnowFlake from "../static/snowflake.pdf"
import Stacks from "../static/stacks.pdf"

const Talks = () => (
  <Layout>
    <SEO title="Talks" />
    <h1>Invited Talks</h1>
      <h2>Upcoming talks</h2>
      <h3>December</h3>
          <h4>TBD</h4>
          <p><font size="3"><a href="https://warwick.ac.uk/fac/sci/maths/people/staff/dotto/venice24/">Real THH in Venice</a>, Venice, Italy</font></p>
      <h3>October</h3>
          <h4>TBD</h4>
          <p><font size="3"><a href="https://sites.google.com/view/nialltaggartmath/seminars-events/topics">Topology Intercity Seminar</a>, Radboud University, Nijmegen</font></p>
      <h2>2024</h2>
        <h3>July</h3>
          <h4>Syntomic cohomology of ring spectra</h4>
          <p><font size="3"><a href="https://www.mfo.de/occasion/2430/www_view">Topologie</a>, Oberwolfach.</font></p>
        <h3>April</h3>
          <h4>Syntomic cohomology of real topological K-theory</h4>
          <p><font size="3"><a href="https://www.math.uni-bonn.de/ag/topo/seminar">Topology Seminar</a>, University of Bonn.</font></p>
        <h3>March</h3>
          <h4>Syntomic cohomology of real topological K-theory</h4>
          <p><font size="3"><a href="https://math.mit.edu/topology/index.html">Topology Seminar</a>, Massachusetts Institute of Technology.</font></p>
      <h2>2023</h2>
        <h3>November</h3>
          <h4>Syntomic cohomology of real topological K-theory</h4>
          <p><font size="3"><a href="http://users.mat.unimi.it/users/SGA/">Arithmetic Geometry Seminar</a>, University of Milan.</font></p>
        <h3>June</h3>
          <h4>Syntomic cohomology of Morava K-theory</h4>
          <p><font size="3"><a href="https://folk.ntnu.no/runegha/htpyintrd.html">Homotopy Theory in Trondheim</a>, Norwegian University of Science and Technology.</font></p>
        <h3>March</h3>
          <h4>Deformations of equivariant homotopy theory</h4>
            <p><font size="3"><a href="https://damienespadon.wixsite.com/dersympapp/alpe">Nouveau séminaire ALPE</a>, Universit<span>&eacute;</span> Montpellier</font></p>
      <h2>2022</h2>
        <h3>October</h3>
          <h4>Algebraic K-theory of elliptic cohomology</h4>
            <p><font size="3"><a href="https://www.math.sciences.univ-nantes.fr/GDR-Topologie/">GDR-Topologie</a>, Nantes Universit<span>&eacute;</span></font></p>
        <h3>September</h3>
          <h4>Deformations of equivariant homotopy</h4>
            <p><font size="3">Apr<span>&egrave;</span>s-midi Parisienne de Topologie Alg<span>&eacute;</span>brique, Universit<span>&eacute;</span> Sorbonne Paris Nord</font></p>
        <h3>June</h3>
          <h4>Homology of twisted G-rings</h4>
            <p><font size="3"><a href="https://www.math.univ-paris13.fr/laga/index.php/fr/ta/seminaires">Algebraic Topology Seminar</a>, Universit<span>&eacute;</span> Sorbonne Paris Nord </font></p>
        <h3>March</h3>
          <h4>Algebraic K-theory of elliptic cohomology</h4>
            <p><font size="3"><a href="https://s.wayne.edu/echt/echt-research-seminar/">Electronic Computational Homotopy Theory Seminar</a></font></p>
        <h3>January</h3>
          <h4>Generalizations of Hochschild homology for rings with anti-involution</h4>
            <p><font size="3"><a href="https://sites.google.com/view/xuzhouli/ucsd-topology-seminar">Topology Seminar</a>, University of California, San Diego</font></p>
      <h2>2021</h2>
        <h3>September</h3>
          <h4>Redshift in algebraic K-theory</h4>
            <p><font size="3"><a href="https://www.math.upenn.edu/events/seminars/geometry-topology-seminar">Geometry and Topology Seminar</a>, University of Pennsilvania</font></p>
        <h3>May</h3>
          <h4>Real topological Hochschild homology, norms and Witt vectors [<a href="https://warwick.ac.uk/fac/sci/maths/people/staff/dotto/atseminar2020/Angelini-Knoll.mp4">Video</a>]</h4>
            <p><font size="3"><a href="https://warwick.ac.uk/fac/sci/maths/people/staff/dotto/ATseminar/past/20-21">Algebraic Topology Seminar</a>, University of Warwick</font></p>
        <h3>March</h3>
          <h4>Algebraic K-theory and chromatic homotopy theory [<PDF pdfFile={Redshift} displayText='pdf' />]</h4>
            <p><font size="3">Equivariant techniques in stable homotopy theory, American Institute of Mathematics, San Jose, California</font></p>
      <h2>2020</h2>
        <h3>April</h3>
          <h4>Morava K-theory of algebraic K-theory and topological periodic cyclic homology</h4>
            <p><font size="3"> <a href="https://www.epfl.ch/labs/hessbellwald-lab/seminar/topsemsp20/">Topology Seminar</a>, <span>&#201;</span>cole polytechnique f<span>&#233;</span>d<span>&#233;</span>rale de Lausanne</font></p>
        <h3>March</h3>
          <h4>Morava K-theory of algebraic K-theory and topological periodic cyclic homology</h4>
            <p><font size="3"><a href="https://math.mit.edu/topology/pastseminars.html">Topology Seminar</a>, Massachusetts Institute of Technology</font></p>
          <h4>Equivariant Witt vectors, Real topological Hochschild homology, and norms</h4>
            <p><font size="3">Equivariant homotopy theory and p-adic Hodge Theory Conference, Banff International Research Station</font></p>
        <h3>January</h3>
          <h4>Chromatic complexity and topological periodic cyclic homology</h4>
            <p><font size="3"><a href="https://www2.math.uni-wuppertal.de/~top/seminarW19.html">Topology Seminar</a>, Bergische Universit<span>&#228;</span>t Wuppertal</font></p>
      <h2>2019</h2>
        <h3>May</h3>
          <h4>Transchromatic behavior in algebriac K-theory and future directions</h4>
            <p><font size="3"><a href="https://www.mi.fu-berlin.de/math/groups/top/research/FS-2019So-geom.html">Topology Seminar</a>, Freie Universit<span>&#228;</span>t Berlin</font></p>
          <h4>Iterated algebraic K-theory of the integers and higher Lichtenbaum-Quillen conjectures</h4>
            <p><font size="3"><a href="https://secure.math.ucla.edu/seminars/show_quarter.php?t=1553756400&type=Algebraic%20Topology&id=&tba=false">Algebraic Topology Seminar</a>, University of California, Los Angeles</font></p>
        <h3>April</h3>
          <h4>Iterated algebraic K-theory of the integers and higher Lichtenbaum-Quillen conjectures</h4>
            <p><font size="3">Topology Seminar, University of Illinois Urbana-Champaign</font></p>
        <h3>March</h3>
          <h4>Towards Topological Hochschild homology of the second truncated Brown-Peterson spectrum</h4>
            <p><font size="3">AMS Sectional, University of Hawaii at Manoa</font></p>
          <h4>Iterated algebraic K-theory of the integers and the Greek letter family red-shift conjecture</h4>
            <p><font size="3">Topology Seminar, Northwestern University</font></p>
        <h3>January</h3>
          <h4>Iterated algebraic K-theory of the integers and higher Lichtenbaum-Quillen conjectures [<a href="https://www.youtube.com/watch?v=g0iIQWlxSzU&t=1538s">Video</a>]</h4>
            <p><font size="3"><a href="https://s.wayne.edu/isaksen/echt/">Electronic Computational Homotopy Theory Seminar</a></font></p>
      <h2>2018</h2>
        <h3>June</h3>
          <h4>The Fundamental Theorem of Algebra via Topology</h4>
            <p><font size="3">REU, Michigan State University</font></p>
        <h3>March</h3>
          <h4>Chromatic complexity of topological periodic cyclic homology of y(n)</h4>
            <p><font size="3">AMS Sectional, Ohio State University</font></p>
      <h2>2017</h2>
        <h3>November</h3>
          <h4>The Segal Conjecture for topological Hochschild homology of Ravenel spectra</h4>
            <p><font size="3">Topology Seminar, University of Kentucky</font></p>
          <h4>The Hopf map in classical mechanics</h4>
            <p><font size="3">Math Club, University of Kentucky</font></p>
          <h4>Evidence for the Greek letter family red-shift conjecture</h4>
            <p><font size="3">Midwest Topology Conference, Wayne State University</font></p>
        <h3>April</h3>
          <h4>Loday construction in functor categories [<PDF pdfFile={Loday} displayText='pdf' />]</h4>
            <p><font size="3">AMS Sectional, Indiana University</font></p>
        <h3>February</h3>
          <h4>Approximating algebraic K-theory of the image of J</h4>
            <p><font size="3">Topology Seminar, University of Chicago</font></p>
      <h2>2016</h2>
        <h3>December</h3>
          <h4>Periodic Phenomena in iterated algebraic K-theory of finite fields</h4>
            <p><font size="3">Topology Seminar, Notre Dame</font></p>
        <h3>November</h3>
          <h4>Periodicity in iterated algebraic K-theory</h4>
            <p><font size="3">Geometry and Topology Seminar, Michigan State University</font></p>
          <h4>Red-shift type phenomena in iterated algebraic K-theory of finite fields</h4>
            <p><font size="3">Topology Seminar, Indiana University</font></p>
        <h3>March</h3>
          <h4>Topological Hochschild homology of the connecitve cover of the K(1)-local sphere </h4>
            <p><font size="3">Topology Seminar, University of illinois Urbana Champaign</font></p>
        <h3>February</h3>
          <h4>On mod (p,v_1) homotopy of THH of the K(1)-local sphere and its homotopy fixed points</h4>
            <p><font size="3">K-theory Seminar, Ohio State University</font></p>
      <h2>2014</h2>
          <h4>The Topologist's Snowflake and the Rose [<PDF pdfFile={SnowFlake} displayText='pdf' />]</h4>
            <p><font size="3">Undergraduate Seminar, Kalamazoo College</font></p>
  <h1>Expository Talks</h1>
    <h2>2018</h2>
      <h3>May</h3>
        <h4>Pro-objects in infinity categories [<PDF pdfFile={ProObjects} displayText='pdf' />]</h4>
          <p><font size="3">Vitamin K1: Kerz-Strunk-Tamme's Proof of Weibel's Conjecture, University of Illinois at Chicago</font></p>
    <h2>2017</h2>
      <h3>May</h3>
        <h4>On the structure of the map from MU to BP [<a href="http://math.mit.edu/conferences/talbot/2017/talbot-notes-2017.pdf">pdf</a>] </h4> 
          <p><font size="3">Talbot Workshop on Obstruction Theory (Notes compiled by <a href="https://math.northwestern.edu/~ebelmont/">Eva Belmont</a> and <a href="https://sanathdevalapurkar.github.io/">Sanath Devalapurkar)</a></font></p>
      <h3>August</h3>
        <h4>Stacks and Homotopy theory [<PDF pdfFile={Stacks} displayText='pdf' />]</h4>
          <p><font size="3">West Coast Algebraic Topology Summer School, University of Oregon (joint with <a href="https://math.northwestern.edu/~ebelmont/">Eva Belmont</a>)</font></p>
    <h2>2015</h2>
      <h3>July</h3>
        <h4>Fundamental Theorems of Algebraic K-theory [<PDF pdfFile={Fundamental} displayText='pdf' />]</h4>
          <p><font size="3">European Talbot Workshop, Klosters, Switzerland</font></p>
    <h2>2014</h2>
      <h3>July</h3>
        <h4>On the paper "Nilpotence and Stable Homotopy Theory II" [<PDF pdfFile={Nilpotence} displayText='pdf' />]</h4>
          <p><font size="3">MSRI Summer School: Algebraic Topology, Guanajuato, Mexico</font></p>
  </Layout>
)

export default Talks
