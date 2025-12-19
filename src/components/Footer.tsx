import { Link } from "react-router-dom";
import { Plane, Mail, Phone, MapPin, Shield, Facebook, Twitter, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Plane className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">UK ETA Service</span>
                <span className="text-xs text-muted-foreground">Officiële aanvraag partner</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Uw betrouwbare partner voor UK Electronic Travel Authorisation aanvragen. 
              Snel, veilig en professioneel.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/application" className="text-muted-foreground transition-colors hover:text-foreground">
                  UK ETA aanvragen
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Voorwaarden
                </Link>
              </li>
              <li>
                <a href="#tracking" className="text-muted-foreground transition-colors hover:text-foreground">
                  Status volgen
                </a>
              </li>
              <li>
                <a href="#support" className="text-muted-foreground transition-colors hover:text-foreground">
                  Klantenservice
                </a>
              </li>
            </ul>
          </div>

          {/* Informatie */}
          <div className="space-y-4">
            <h3 className="font-semibold">Informatie</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacyverklaring
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground transition-colors hover:text-foreground">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Algemene voorwaarden
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Retour- en annuleringsbeleid
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a href="mailto:info@uketaservice.nl" className="text-muted-foreground transition-colors hover:text-foreground">
                  info@uketaservice.nl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a href="tel:+31686490091" className="text-muted-foreground transition-colors hover:text-foreground">
                  +31 6 86 49 00 91
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Slotermeerlaan 58, 1064HC Amsterdam
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UK ETA Service. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>SSL Beveiligd | KVK: 12345678</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
