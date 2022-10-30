import fb from "./../images/icon_facebook.png";
import ig from "./../images/icon_instagram.png";
import tw from "./../images/icon_twitter.png";
import mail from "./../images/icon_mail.png";
import twitch from "./../images/icon_twitch.png";

const Footer = () => {
    return (
      <footer className="text-center text-lg-start" id="footerkolom">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

            <ul className="list-unstyled mb-0">
              <li>
                <p className="text-dark">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              </li>
              <li>
                <p className="text-dark">binarcarrental@gmail.com</p>
              </li>
              <li>
                <p className="text-dark">081-233-334-808</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0" id="linkfooter">
            <ul className="list-unstyled">
              <li>
                <a href="\ourservice.html" target="_blank" className="text-dark">Our services</a>
              </li>
              <li>
                <a href="\whyus.html" target="_blank" className="text-dark">Why Us</a>
              </li>
              <li>
                <a href="\testi.html" target="_blank" className="text-dark">Testimonial</a>
              </li>
              <li>
                <a href="\faq.html" target="_blank" className="text-dark">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li>
                <p className="text-dark">Connect With us</p>
              </li>
            </ul>
            <div>
              <a href="https://facebook.com" target="_blank"><img src={fb} className="img-fluid" alt="seocial-media"/></a>
              <a href="https://instagram.com" target="_blank"><img src={ig} className="img-fluid" alt="seocial-media"/></a>
              <a href="https://twitter.com" target="_blank"><img src={tw} className="img-fluid" alt="seocial-media"/></a>
              <a href="https://gmail.com" target="_blank"><img src={mail} className="img-fluid" alt="seocial-media"/></a>
              <a href="https://twitch.com" target="_blank"><img src={twitch} className="img-fluid" alt="seocial-media"/></a>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-0">Copyright Binar 2022</h5>

            <ul className="list-unstyled"/>
              <li>
                <a className="navbar-brand" href="#">Logo</a>
              </li>
          </div>
        </div>
      </div>
    </footer>

    )

}
export default Footer;
