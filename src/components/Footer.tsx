import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Newspaper, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">About Al-Hadi</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Al-Hadi Quran Center provides comprehensive online Quran education with qualified Shia tutors from around the world. We are dedicated to making Quranic knowledge accessible to everyone, regardless of location.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-accent transition-smooth flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-smooth flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/courses/qaida" className="hover:text-accent transition-smooth flex items-center">
                  <span className="mr-2">›</span> Courses
                </Link>
              </li>
              <li>
                <Link to="/fee" className="hover:text-accent transition-smooth flex items-center">
                  <span className="mr-2">›</span> Fee Structure
                </Link>
              </li>
              <li>
                <Link to="/tutors/male" className="hover:text-accent transition-smooth flex items-center">
                  <span className="mr-2">›</span> Our Tutors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-smooth flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">Contact Info</h3>
            <ul className="space-y-4">
             <li className="flex items-start">
  <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
  <div>
    <p className="font-semibold">Pakistan:</p>
    <a
      href="tel:+923143592092"
      className="text-primary-foreground/90 hover:underline"
    >
      +92 314 3592092
    </a>
  </div>
</li>

              
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                 
                  <p className="text-primary-foreground/90"><a href="mailto:alhadiqurancenter.com@gmail.com">alhadiqurancenter.com@gmail.com</a></p>
                </div>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=923143592092&text=Aslamo+Alaikum%2C+I+have+a+query+about+Al-Hadi+Quran+Center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-smooth font-semibold"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <p className="text-center text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Al-Hadi Quran Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
