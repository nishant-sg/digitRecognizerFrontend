import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
          <div>Connect with me    </div>
          <div className="spacer"/> 
          <div><a href="https://www.linkedin.com/in/nishant-garg-968205208/">LinkedIn</a></div>
          <div className="spacer"/> 
          <div><a href="https://github.com/nishant-sg">Github</a></div>
          <div className="spacer"/> 
          <div><a href="mailto:nishantgarg.sg@gmail.com">MailID</a></div>
          <div className="spacer"/> 
      </div>
      <br/>
      <div className="footer-bottom">Submit <a href="https://forms.gle/cjJVgbkPJF3jqa7V6">Feedback</a></div>
      
    </div>
  );
}

export default Footer;
