import { CopyBlock,dracula,googlecode,github } from "react-code-blocks";
import "./code.css"
function Coder(props) {
    return (
      <div className="code-container">
      <CopyBlock
        text={props.code}
        language={"python"}
        theme={github}
        showLineNumbers={false}
        wrapLines={true}
        codeBlock
      /></div>
    );
  }

  export default Coder;