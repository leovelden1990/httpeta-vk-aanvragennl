import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Globe, Shield, Users, Zap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Snelle verwerking",
      description: "Uw aanvraag wordt binnen 24 uur verwerkt en goedgekeurd",
    },
    {
      icon: Shield,
      title: "100% veilig",
      description: "SSL-versleutelde verbinding en veilige betalingsmethoden",
    },
    {
      icon: Users,
      title: "Expert support",
      description: "24/7 klantenservice in het Nederlands",
    },
    {
      icon: CheckCircle2,
      title: "Hoge goedkeuring",
      description: "98% van onze aanvragen wordt goedgekeurd",
    },
    {
      icon: Globe,
      title: "2 jaar geldig",
      description: "Uw UK ETA is geldig voor meerdere reizen",
    },
    {
      icon: Zap,
      title: "Direct resultaat",
      description: "Ontvang uw ETA direct na goedkeuring",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Waarom kiezen voor onze service?</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Wij maken het aanvragen van uw UK ETA eenvoudig, snel en zorgeloos
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <feature.icon className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hoe werkt het?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              In 4 eenvoudige stappen naar uw UK ETA
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl gap-8">
            {[
              {
                step: "1",
                title: "Vul uw gegevens in",
                description: "Voer uw persoonlijke gegevens en paspoortinformatie in",
              },
              {
                step: "2",
                title: "Upload documenten",
                description: "Upload een foto van uw paspoort en een recente pasfoto",
              },
              {
                step: "3",
                title: "Betaal veilig online",
                description: "Voltooi de betaling via onze beveiligde betaalomgeving",
              },
              {
                step: "4",
                title: "Ontvang uw ETA",
                description: "Uw UK ETA wordt binnen 24 uur per e-mail verstuurd",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Veelgestelde vragen</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Antwoorden op de meest gestelde vragen over UK ETA
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Wat is een UK ETA?</AccordionTrigger>
              <AccordionContent>
                Een UK ETA (Electronic Travel Authorisation) is een digitale reisvergunning die vereist is voor reizigers die visumloos naar het Verenigd Koninkrijk reizen. Het is gekoppeld aan uw paspoort en geldig voor meerdere reizen gedurende 2 jaar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Hoe lang duurt het aanvraagproces?</AccordionTrigger>
              <AccordionContent>
                De meeste aanvragen worden binnen 24 uur verwerkt en goedgekeurd. U ontvangt uw UK ETA direct per e-mail zodra deze is goedgekeurd. In drukke periodes kan het soms iets langer duren.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Wat zijn de kosten?</AccordionTrigger>
              <AccordionContent>
                De totale kosten voor uw UK ETA bedragen €35. Dit bedrag omvat de officiële aanvraagkosten en onze servicekosten voor het verwerken van uw aanvraag en het bieden van 24/7 support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Hoe lang is een UK ETA geldig?</AccordionTrigger>
              <AccordionContent>
                Een UK ETA is 2 jaar geldig vanaf de datum van uitgifte of tot uw paspoort verloopt, afhankelijk van wat eerder is. U kunt gedurende deze periode meerdere keren naar het VK reizen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Welke documenten heb ik nodig?</AccordionTrigger>
              <AccordionContent>
                U heeft een geldig paspoort nodig dat nog minstens 6 maanden geldig is, een recente pasfoto, en een gescande kopie of foto van uw paspoort. Alle documenten kunnen digitaal worden geüpload tijdens het aanvraagproces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Kan ik mijn ETA wijzigen na aanvraag?</AccordionTrigger>
              <AccordionContent>
                Zodra een ETA is goedgekeurd, kunnen de gegevens niet meer worden gewijzigd. Als er een fout in uw aanvraag zit, moet u een nieuwe aanvraag indienen. Controleer daarom alle gegevens zorgvuldig voordat u uw aanvraag indient.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Neem contact met ons op</h2>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Heeft u vragen over uw UK ETA aanvraag? Ons team staat 24/7 voor u klaar
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <Card className="border-0 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm">
              <CardHeader>
                <Mail className="mb-2 h-8 w-8" />
                <CardTitle className="text-primary-foreground">E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@uketa-aanvragen.nl" className="hover:underline">
                  info@uketa-aanvragen.nl
                </a>
                <p className="mt-2 text-sm opacity-90">
                  Reactie binnen 2 uur
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm">
              <CardHeader>
                <Phone className="mb-2 h-8 w-8" />
                <CardTitle className="text-primary-foreground">Telefoon</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+31207776543" className="hover:underline">
                  +31 20 777 65 43
                </a>
                <p className="mt-2 text-sm opacity-90">
                  24/7 bereikbaar
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm">
              <CardHeader>
                <MapPin className="mb-2 h-8 w-8" />
                <CardTitle className="text-primary-foreground">Adres</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Herengracht 123</p>
                <p>1015 BG Amsterdam</p>
                <p className="mt-2 text-sm opacity-90">
                  Nederland
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/application">
              <Button size="lg" variant="secondary" className="font-semibold">
                Start uw aanvraag nu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
