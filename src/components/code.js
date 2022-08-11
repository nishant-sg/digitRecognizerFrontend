import { CopyBlock,dracula,googlecode,github } from "react-code-blocks";

function Coder(props) {
    return (
      <CopyBlock
        text={props.code}
        language={"python"}
        theme={dracula}
        showLineNumbers={true}
        //wrapLines
        codeBlock
      />
    );
  }

  export default Coder;