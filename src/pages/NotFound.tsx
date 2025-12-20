import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import ukPatternBg from "@/assets/uk-pattern-bg.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${ukPatternBg})` }}
      />
      <div className="fixed inset-0 bg-background/90 -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-md rounded-xl bg-card/80 backdrop-blur-sm p-12 shadow-lg">
          <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">Pagina niet gevonden</h2>
          <p className="mb-8 text-muted-foreground">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home className="h-5 w-5" />
              Terug naar home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
