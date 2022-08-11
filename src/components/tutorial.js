import './tutorial.css';
import Coder from './code';
function Tutorial() {
  return (
    <div className="tutorial">
      <div>lets see how the code works</div>
        <Coder code={`print ("hello")\nprint ("hello world")\n`}/>
        </div>
    //</div>
  );
}

export default Tutorial;
