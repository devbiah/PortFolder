import linkedin from '../assets/imgs/linkedin.png';
import github from '../assets/imgs/github.png';
import email from '../assets/imgs/email.png'; 
import instagram from '../assets/imgs/instagram.png';
import whatsapp from '../assets/imgs/whatsapp.png';

export default function Contact() {
  return (
    <div id="contact" className="bg-[#282c34] text-white py-5 text-center">
      <div className="mb-5">
        <h3 className="text-2xl mb-3">Contact Me:</h3>
        <div className="flex justify-center gap-4 mb-5">
          <a href="https://github.com/devbiah/" target="_blank">
            <img src={github} alt="GitHub" className="w-7 h-7 transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="mailto:emmyisilva@gmail.com">
            <img src={email} alt="Email" className="w-7 h-7 transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/beatriz-silva-65230b2b0/" target="_blank">
            <img src={linkedin} alt="LinkedIn" className="w-7 h-7 transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/imthebiah" target="_blank">
            <img src={instagram} alt="Instagram" className="w-7 h-7 transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5548998625708" target="_blank">
            <img src={whatsapp} alt="WhatsApp" className="w-7 h-7 transition-transform duration-200 hover:scale-110" />
          </a>
        </div>
      </div>
      <p className="mt-3 text-sm">
        Repository Link:
        <a href="https://github.com/devbiah/PortFolder" target="_blank" className="text-[#61dafb] no-underline hover:underline">
          github
        </a>
      </p>
    </div>
  );
}
