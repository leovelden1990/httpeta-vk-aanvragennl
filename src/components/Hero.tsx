import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Officiële UK ETA Service</span>
          </div>
          
          <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Uw UK Electronic Travel Authorisation in minuten
          </h1>
          
          <p className="mb-10 max-w-2xl text-lg text-white/90 md:text-xl">
            Veilig, snel en betrouwbaar. Vraag uw UK ETA aan met onze gestroomlijnde 
            online service. Goedgekeurd binnen 24 uur.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/application">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start uw aanvraag
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              Meer informatie
            </Button>
          </div>
          
          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <Clock className="h-8 w-8 text-white" />
              <h3 className="text-lg font-semibold text-white">Snelle verwerking</h3>
              <p className="text-sm text-white/80">Binnen 24 uur goedgekeurd</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-white" />
              <h3 className="text-lg font-semibold text-white">100% veilig</h3>
              <p className="text-sm text-white/80">SSL-versleutelde verbinding</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <CheckCircle2 className="h-8 w-8 text-white" />
              <h3 className="text-lg font-semibold text-white">98% goedkeuring</h3>
              <p className="text-sm text-white/80">Expert ondersteuning 24/7</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
