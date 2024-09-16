import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import "./styles/pagedjs-interface.css"
import "./styles/typography.css"

const PagedJSPrint: QuartzComponent = ({ children }: QuartzComponentProps) => {

  
  function onPressPrint(event): void {
    document.querySelector("#render").addEventListener('click', function(e){
      // suppression du bouton
      e.target.parentElement.removeChild(e.target);
      // suppression de la CSS #screen-only
      var screenstyle = document.querySelector('#screen-only');
      screenstyle.parentElement.removeChild(screenstyle);
      // insertion de Paged.js
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/paged.polyfill.js";
      document.getElementsByTagName("head")[0].appendChild(script);        
    })
  }

  return <button
  onClick={onPressLearnMore}
  title="Print as a book"
/>
}

PagedJSPrint.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}

@page {
  size: 148mm 210mm;
}
@page :left{ 
  margin: 15mm 12mm 32mm 22mm;  
  @bottom-left {
      content: counter(page)  ;
  }
}
@page :right{ 
  margin: 15mm 22mm 32mm 12mm; 
  @bottom-right {
      content: counter(page);
  }
}
@page macouverture {
  background: black;
}
.couverture { 
  page: macouverture;
  color: white;
}
`

export default (() => PagedJSPrint) satisfies QuartzComponentConstructor