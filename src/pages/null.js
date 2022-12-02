import React from "react";

// import PDF from "../components/pdf"

// Imported pdf files in order of appearance
import Null from "./null"

const Null = {
};

export default block => {
  // component does exist
  if (typeof Null[block.lecture] !== "undefined") {
    return React.createElement(Null[block.lecture], {
      key: block._uid,
      block: block
    });
    //  <PDF  pdfFile={block.lecture} displayText={pdf}/> 
  }
  // component doesn't exist yet
    return React.createElement(
      () => <div>The pdf {block.lecture} has not been created yet.</div>
      // { key: block._uid }
   );
}
