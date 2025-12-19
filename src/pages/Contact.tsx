import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Contact</h1>
          <p className="text-lg text-muted-foreground">
            Heeft u vragen over uw UK ETA aanvraag? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
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

          <Card>
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Adres
              </CardTitle>
              <CardDescription>
                Ons kantooradres
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">
                Slotermeerlaan 58
              </p>
              <p className="text-lg font-medium">
                1064HC Amsterdam
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Nederland
              </p>
            </CardContent>
          </Card>

          <Card>
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

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Over IBO Exclusive</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              IBO Exclusive is gevestigd te Amsterdam, Nederland en verleent commerciële bemiddelings- 
              en ondersteuningsdiensten bij het indienen van ETA-aanvragen. Wij zijn geen overheidsinstantie 
              maar een onafhankelijke dienstverlener die u helpt bij het aanvraagproces.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
