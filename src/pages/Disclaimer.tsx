import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Disclaimer</h1>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Algemene informatie</h2>
            <p className="text-muted-foreground">
              Deze website biedt een betaalde bemiddelings- en ondersteuningsdienst voor het indienen van ETA-aanvragen. 
              Onze dienstverlening is erop gericht om reizigers te helpen bij het correct, zorgvuldig en efficiënt 
              aanleveren en indienen van hun aanvraag.
            </p>
            <p className="mt-4 text-muted-foreground">
              Wij handelen onder de handelsnaam IBO Exclusive en zijn gevestigd te Amsterdam, Nederland.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Onze dienstverlening</h2>
            <p className="text-muted-foreground">
              Wij begeleiden klanten bij het invullen, controleren en indienen van ETA-aanvragen op basis van de 
              door de klant verstrekte informatie. Wij zijn geen overheidsinstantie, ambassade of immigratiedienst 
              en vertegenwoordigen geen officiële autoriteit.
            </p>
            <p className="mt-4 text-muted-foreground">
              De uiteindelijke beoordeling en beslissing van een ETA-aanvraag wordt altijd genomen door de 
              bevoegde overheidsinstanties.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Verwerking en zorgvuldigheid</h2>
            <p className="text-muted-foreground">
              Wij streven ernaar om iedere aanvraag met de grootst mogelijke zorgvuldigheid te verwerken. 
              Correcte en volledige gegevens vergroten de kans op een soepele afhandeling van de aanvraag.
            </p>
            <p className="mt-4 text-muted-foreground">
              De klant blijft verantwoordelijk voor het juist en volledig aanleveren van alle benodigde informatie.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Verwerkingstermijnen</h2>
            <p className="text-muted-foreground">
              Eventueel op de website genoemde verwerkingstermijnen, waaronder spoedverwerking (bijvoorbeeld 
              verwerking binnen 1 uur), verwerking binnen 24 uur of vergelijkbare termijnen, hebben uitsluitend 
              betrekking op onze interne verwerking en indiening van de aanvraag.
            </p>
            <p className="mt-4 text-muted-foreground">
              Deze termijnen vormen geen toezegging of garantie met betrekking tot:
            </p>
            <ul className="mt-2 list-disc pl-6 text-muted-foreground">
              <li>de beoordelingsduur;</li>
              <li>de goedkeuring;</li>
              <li>of de uiteindelijke afgifte van een ETA door bevoegde autoriteiten.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              De daadwerkelijke verwerking door overheidsinstanties kan per aanvraag verschillen en is afhankelijk 
              van individuele omstandigheden en officiële beoordelingscriteria.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Resultaat van de aanvraag</h2>
            <p className="text-muted-foreground">
              Hoewel wij ons inspannen om iedere aanvraag correct in te dienen, kunnen wij geen garanties geven 
              over de uitkomst van een ETA-aanvraag. De beslissing ligt altijd bij de bevoegde autoriteiten.
            </p>
            <p className="mt-4 text-muted-foreground">
              Het gebruik van onze dienst houdt geen garantie in op goedkeuring, maar biedt professionele 
              ondersteuning bij het aanvraagproces.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Aansprakelijkheid</h2>
            <p className="text-muted-foreground">
              Wij zijn niet aansprakelijk voor beslissingen, vertragingen of beleidswijzigingen van overheidsinstanties. 
              Onze aansprakelijkheid is in alle gevallen beperkt tot het bedrag dat de klant heeft betaald voor 
              onze dienstverlening.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Gebruik van de website</h2>
            <p className="text-muted-foreground">
              De informatie op deze website is bedoeld voor algemene informatiedoeleinden en kan zonder 
              voorafgaande kennisgeving worden gewijzigd. Aan de inhoud van deze website kunnen geen rechten 
              worden ontleend.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
            <p className="text-muted-foreground">
              Voor vragen over onze dienstverlening of deze disclaimer kunt u contact met ons opnemen via:
            </p>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:support@jouwdomein.nl" className="text-primary hover:underline">
                support@jouwdomein.nl
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
