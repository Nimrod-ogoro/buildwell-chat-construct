import { Hammer, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-gray text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Hammer className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">BuildWell</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Professional construction services for residential and commercial projects. 
              Building excellence since 1998 with quality craftsmanship and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Residential Construction</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Commercial Building</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Renovations</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Project Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-background/80">(555) 123-4567</li>
              <li className="text-background/80">info@buildwell.com</li>
              <li className="text-background/80">123 Construction Ave<br />Suite 100, City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 BuildWell Construction. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;