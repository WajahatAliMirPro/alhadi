import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png"; // ✅ Adjust path if needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [tutorsOpen, setTutorsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img src={logo} alt="Al-Hadi Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-xl text-primary">Al-Hadi</h1>
              <p className="text-xs text-muted-foreground">Quran Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-smooth ${
                isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-smooth ${
                isActive("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-smooth flex items-center">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-card rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50">
                <div className="py-2">
                  <Link to="/courses/qaida" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Noorani Qaida
                  </Link>
                  <Link to="/courses/tajweed" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Tajweed Course
                  </Link>
                  <Link to="/courses/hifz" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Hifz Program
                  </Link>
                  <Link to="/courses/translation" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Quran Translation
                  </Link>
                  <Link to="/courses/tafseer" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Tafseer Course
                  </Link>
                  <Link to="/courses/nahjul-balagha" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Nahjul Balagha
                  </Link>
                </div>
              </div>
            </div>

            {/* Tutors Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-smooth flex items-center">
                Tutors <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50">
                <div className="py-2">
                  <Link to="/tutors/male" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Male Tutors
                  </Link>
                  <Link to="/tutors/female" className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                    Female Tutors
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/fee"
              className={`text-sm font-medium transition-smooth ${
                isActive("/fee") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Fee
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-smooth ${
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/admission"
              className="btn-hero text-sm"
            >
              Quick Admission
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-smooth">
                Home
              </Link>
              <Link to="/about" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-smooth">
                About
              </Link>

              {/* Mobile Courses */}
              <div>
                <button
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="w-full px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-smooth flex items-center justify-between"
                >
                  Courses <ChevronDown className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                </button>
                {coursesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/courses/qaida" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Noorani Qaida
                    </Link>
                    <Link to="/courses/tajweed" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Tajweed Course
                    </Link>
                    <Link to="/courses/hifz" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Hifz Program
                    </Link>
                    <Link to="/courses/translation" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Quran Translation
                    </Link>
                    <Link to="/courses/tafseer" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Tafseer Course
                    </Link>
                    <Link to="/courses/nahjul-balagha" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Nahjul Balagha
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Tutors */}
              <div>
                <button
                  onClick={() => setTutorsOpen(!tutorsOpen)}
                  className="w-full px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-smooth flex items-center justify-between"
                >
                  Tutors <ChevronDown className={`h-4 w-4 transition-transform ${tutorsOpen ? "rotate-180" : ""}`} />
                </button>
                {tutorsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/tutors/male" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Male Tutors
                    </Link>
                    <Link to="/tutors/female" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg">
                      Female Tutors
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/fee" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-smooth">
                Fee
              </Link>
              <Link to="/contact" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-smooth">
                Contact
              </Link>
              <Link to="/admission" className="mx-4 btn-hero text-sm text-center">
                Quick Admission
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
