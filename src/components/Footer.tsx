import { Leaf, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-serif">PlantDoc</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm">Contact</span>
            </a>
          </div>

          {/* Credit */}
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for Final Year Project</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © 2026 Plant Disease Classifier. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
