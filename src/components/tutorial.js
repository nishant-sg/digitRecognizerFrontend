import './tutorial.css';
import Coder from './code';
function Tutorial() {
  return (
    <div className="tutorial">
      <div className="tutorial-header">
        Important Information: 
      </div>
      <div className="tutorial-content">
        <div className="tutorial-text">
        <div className="tutorial-content-subheading">
          Steps to use
        </div>
        <ul>
          <li>
          <div className="tutorial-content-data">
            Draw a number using your mouse on the grid.
          </div>
          </li>
          <li>
          <div className="tutorial-content-data">
                Click on "Predict". The graph on the right hand side should show the results.
          </div>
          </li>
          <li>
          <div className="tutorial-content-data">Click on "Reset" to reset the grid.
          </div>
          </li>
        </ul>
       </div>
       <br/>
       <div className="tutorial-text">
        <div className="tutorial-content-subheading">
          Resolve Error
        </div>
        <ul>
          <li>
          <div className="tutorial-content-data">The website is best viewed on desktop. Avoid use of screen in portrait mode.
          </div>
          </li>
          <li>
          <div className="tutorial-content-data">
            In case the graph doesn't update, try refreshing the page.
          </div>
          </li>
          <li>
          <div className="tutorial-content-data">In case of wrong output, try again.
          </div>
          </li>
          <li>
          <div className="tutorial-content-data"> The Neural Network is not perfect and gets easily confused between 1,8,9.
           </div>
          </li>
         <li>
          <div className="tutorial-content-data">In case of any other error, kindly contact me directly.
          </div>
          </li>
        </ul>
       </div>

      </div>

        </div>
    //</div>
  );
}

export default Tutorial;
