import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference, default to false
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return false; // Default to light mode
  });
  
  const location = useLocation();

  useEffect(() => {
    // Apply dark mode immediately to prevent flash
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Force immediate DOM update
    const root = document.documentElement;
    if (newDarkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  };
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Certificates", path: "/certificates" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Gallery", path: "/hobbies" },
  ];

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 md:py-6">
        
        {/* Left side - Name */}
        <Link to="/" className="group">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            - 𝓢𝓱𝓾𝓫𝓱𝓪𝓶 𝓢𝓲𝓷𝓰𝓱
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-lg font-medium items-center">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <button className={`
                px-4 lg:px-5 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group
                ${isActiveRoute(item.path)
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md hover:scale-105"
                }
              `}>
                <span className="relative z-10">{item.name}</span>
                {!isActiveRoute(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-2 lg:ml-4 p-2 lg:p-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 group"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5 lg:w-6 lg:h-6">
              <Sun 
                size={20} 
                className={`absolute inset-0 text-amber-500 transition-all duration-500 ${
                  darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <Moon 
                size={20} 
                className={`absolute inset-0 text-blue-400 transition-all duration-500 ${
                  darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-8 h-8">
            <Menu 
              size={32} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`}
            />
            <X 
              size={32} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-100/95 dark:bg-gray-800/95 backdrop-blur-sm
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <nav className="flex flex-col items-center gap-4 py-6 px-6 text-lg font-medium">
          {navItems.map((item, index) => (
            <Link key={item.path} to={item.path} className="w-full max-w-xs">
              <button 
                className={`
                  w-full px-5 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105
                  ${isActiveRoute(item.path)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md"
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            </Link>
          ))}

          {/* Dark Mode Toggle (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="w-full max-w-xs mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white font-medium hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            {darkMode ? (
              <>
                <Sun size={18} className="text-amber-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={18} className="text-blue-400" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;