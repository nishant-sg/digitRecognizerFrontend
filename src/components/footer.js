import './footer.css';
import l from './icons8-linkedin-circled.svg';
import m from './icons8-gmail-logo.svg';
import g from './icons8-github (1).svg';
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
          <div>Connect with me    </div>
          <div className="spacer"/> 
          <div><a href="https://www.linkedin.com/in/nishant-garg-968205208/"><div className="img"><img src={l}/></div></a></div>
          <div className="spacer"/> 
          <div><a href="https://github.com/nishant-sg"><div className="img"><img src={g}/></div></a></div>
          <div className="spacer"/> 
          <div><a href="mailto:nishantgarg.sg@gmail.com"><div className="img"><img src={m}/></div></a></div>
          <div className="spacer"/> 
      </div>
      <br/>
      <div className="footer-bottom">Submit <a style={{textDecoration: 'none', color: 'blue'}} href="https://forms.gle/cjJVgbkPJF3jqa7V6">Feedback</a></div>
      
    </div>
  );
}

export default Footer;
