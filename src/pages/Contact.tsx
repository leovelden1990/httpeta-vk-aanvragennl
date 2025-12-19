import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Building2, Shield, CheckCircle } from "lucide-react";
import amsterdamHero from "@/assets/amsterdam-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Amsterdam Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src={amsterdamHero} 
          alt="Amsterdam skyline met grachten" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground drop-shadow-lg">
              Contact
            </h1>
            <p className="text-xl text-foreground/90 drop-shadow-md">
              Gevestigd in het hart van Amsterdam
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* Trust Indicators */}
          <div className="mb-12 grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Betrouwbaar</p>
                <p className="text-sm text-muted-foreground">Geregistreerd bedrijf</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Professioneel</p>
                <p className="text-sm text-muted-foreground">Snelle service</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Nederlands Bedrijf</p>
                <p className="text-sm text-muted-foreground">Amsterdam</p>
              </div>
            </div>
          </div>

          {/* Company Info Card */}
          <Card className="mb-8 overflow-hidden">
            <div className="bg-primary/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">IBO Exclusive</h2>
                  <p className="text-muted-foreground">Uw betrouwbare partner voor UK ETA aanvragen</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Bedrijfsgegevens</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Bedrijfsnaam:</strong> IBO Exclusive</p>
                    <p><strong className="text-foreground">KVK-nummer:</strong> 96242302</p>
                    <p><strong className="text-foreground">Vestiging:</strong> Amsterdam, Nederland</p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Over ons</h3>
                  <p className="text-muted-foreground">
                    IBO Exclusive is een Nederlands bedrijf gespecialiseerd in professionele bemiddelings- 
                    en ondersteuningsdiensten bij het indienen van ETA-aanvragen. Wij helpen u snel en 
                    betrouwbaar op weg naar uw reis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  E-mail
                </CardTitle>
                <CardDescription>
                  Voor algemene vragen en ondersteuning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@uketaservice.nl" 
                  className="text-lg font-medium text-primary hover:underline"
                >
                  info@uketaservice.nl
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Wij reageren binnen 24 uur op werkdagen.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Telefoon
                </CardTitle>
                <CardDescription>
                  Direct telefonisch contact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+31686490091" 
                  className="text-lg font-medium text-primary hover:underline"
                >
                  +31 6 86 49 00 91
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bereikbaar op werkdagen van 9:00 tot 17:00 uur.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Bezoekadres
                </CardTitle>
                <CardDescription>
                  Ons kantoor in Amsterdam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-lg font-medium">Slotermeerlaan 58</p>
                  <p className="text-lg font-medium">1064 HC Amsterdam</p>
                  <p className="text-muted-foreground">Nederland</p>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Openingstijden
                </CardTitle>
                <CardDescription>
                  Wanneer zijn wij bereikbaar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-medium">Maandag - Vrijdag</p>
                  <p className="text-muted-foreground">09:00 - 17:00 uur</p>
                  <p className="mt-3 font-medium">Weekend</p>
                  <p className="text-muted-foreground">Gesloten</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-xl bg-primary/5 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold">Heeft u vragen?</h3>
            <p className="mb-4 text-muted-foreground">
              Ons team staat voor u klaar om al uw vragen over de UK ETA aanvraag te beantwoorden.
            </p>
            <a 
              href="mailto:info@uketaservice.nl"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Stuur ons een e-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;