import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Disclaimer</h1>
          <p className="text-muted-foreground">Laatst bijgewerkt: 1 januari 2025</p>
        </div>

        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-200">Belangrijke mededeling</h3>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Wij zijn geen overheidsinstantie. IBO Exclusive is een commerciële dienstverlener 
                die bemiddelings- en ondersteuningsdiensten aanbiedt bij het indienen van ETA-aanvragen.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Algemeen</h2>
            <p className="text-muted-foreground">
              De informatie op deze website is met de grootst mogelijke zorgvuldigheid samengesteld. 
              Desondanks kan IBO Exclusive geen garanties geven met betrekking tot de volledigheid, 
              juistheid of actualiteit van de verstrekte informatie.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Geen overheidsinstantie</h2>
            <p className="text-muted-foreground">
              IBO Exclusive is uitdrukkelijk geen overheidsinstantie en is niet gelieerd aan enige 
              overheidsinstantie. Wij bieden commerciële bemiddelings- en ondersteuningsdiensten aan 
              om het aanvraagproces voor een UK ETA te vereenvoudigen.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Geen garantie op goedkeuring</h2>
            <p className="text-muted-foreground">
              Wij kunnen geen garanties geven ten aanzien van de goedkeuring, afwijzing of 
              verwerkingstijd van een ETA-aanvraag door de bevoegde autoriteiten. Beslissingen 
              hieromtrent worden uitsluitend door de betreffende autoriteiten genomen.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Aansprakelijkheid</h2>
            <p className="text-muted-foreground">
              IBO Exclusive is niet aansprakelijk voor schade die voortvloeit uit het gebruik van 
              deze website of de daarop verstrekte informatie, noch voor schade die voortvloeit uit 
              beslissingen, vertragingen of afwijzingen door overheidsinstanties.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Externe links</h2>
            <p className="text-muted-foreground">
              Deze website kan links bevatten naar websites van derden. IBO Exclusive is niet 
              verantwoordelijk voor de inhoud of het privacybeleid van deze externe websites.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Intellectueel eigendom</h2>
            <p className="text-muted-foreground">
              Alle content op deze website, inclusief teksten, afbeeldingen, logo's en grafisch 
              materiaal, is eigendom van IBO Exclusive en is beschermd door intellectuele 
              eigendomsrechten. Ongeautoriseerd gebruik is niet toegestaan.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">7. Wijzigingen</h2>
            <p className="text-muted-foreground">
              IBO Exclusive behoudt zich het recht voor om deze disclaimer op elk moment te 
              wijzigen. De meest actuele versie is altijd beschikbaar op deze pagina.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">8. Contact</h2>
            <p className="text-muted-foreground">
              Voor vragen over deze disclaimer kunt u contact opnemen via{" "}
              <a href="mailto:info@uketaservice.nl" className="text-primary hover:underline">
                info@uketaservice.nl
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
