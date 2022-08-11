import './tutorial.css';
import Coder from './code';
function Tutorial() {
  return (
    <div className="tutorial">
      <div className="tutorial-header">
        Lets see how the code works
      </div>
      <div className="tutorial-content">
        <div className="tutorial-text">
        <div className="tutorial-content-subheading">
          Making Neural Network
        </div><br/>
        <div className="tutorial-content-data">
          Lets understand how the neural network is made
        </div>
        <div className="tutorial-content-code">
        <Coder code={`print ("hello world")\nprint ("hello world")\n`}/>
        </div></div></div>

      <div className="tutorial-content">
        <div className="tutorial-text">
        <div className="tutorial-content-subheading">
          Making Neural Network
        </div><br/>
        <div className="tutorial-content-data">
          Lets understand how the neural network is made
        </div>
        <div className="tutorial-content-code">
        <Coder code={`print ("hello world")\nprint ("hello world")\n`}/>
        </div></div></div>

      <div className="tutorial-content">
        <div className="tutorial-text">
        <div className="tutorial-content-subheading">
          Making Neural Network
        </div><br/>
        <div className="tutorial-content-data">
          Lets understand how the neural network is made
        </div>
        <div className="tutorial-content-code">
        <Coder code={`print ("hello world")\nprint ("hello world")\n`}/>
        </div></div></div>
        </div>
    //</div>
  );
}

export default Tutorial;
