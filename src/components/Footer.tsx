import facebokIcon from "@assets/Facebook.svg";
import instgramIcon from "@assets/instgram.png";
import twitterIcon from "@assets/twitter.png";
import playStore from "@assets/playStore.svg";
import appStore from "@assets/appStore.svg";
const Footer = () => {
  return (
    <footer className="bg-lime-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4">EcoCare</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Location
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Helpful Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Help and support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Great products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Perfect care
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <ul>
            <li className="mb-2">
              <a href="tel:+201012818288" className="hover:underline">
                (+20) 1012818288
              </a>
            </li>
            <li className="mb-2">
              <a href="mailto:ecocare@gmail.com" className="hover:underline">
                ecocare@gmail.com
              </a>
            </li>
            <li className="mb-2">Dakahlia, Egypt</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#">
              <img src={facebokIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#">
              <img src={instgramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 text-center ">
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={appStore} alt="Download on the App Store" />
            </a>
            <a href="#">
              <img src={playStore} alt="Download on the play Store" />
            </a>
          </div>
          <p className="mt-4">&copy; 2024 EcoCare, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
