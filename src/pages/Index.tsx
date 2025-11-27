import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Globe, Shield, Users, Zap } from "lucide-react";

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
    </div>
  );
};

export default Index;
