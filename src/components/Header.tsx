import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-soft">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-serif text-foreground">PlantDoc</span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#classifier" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Classifier
            </a>
            <a href="#diseases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Diseases
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden w-9 h-9" />
        </div>
      </div>
    </header>
  );
};

export default Header;
