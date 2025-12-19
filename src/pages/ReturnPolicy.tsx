import { Separator } from "@/components/ui/separator";

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Retour- en Annuleringsbeleid</h1>
          <p className="text-muted-foreground">Laatst bijgewerkt: 1 januari 2025</p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="lead text-lg text-muted-foreground">
            Onze dienstverlening betreft digitale en op maat gemaakte bemiddelings- en 
            ondersteuningsdiensten bij het indienen van ETA-aanvragen.
          </p>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Geen fysiek product</h2>
            <p className="text-muted-foreground">
              Wij leveren geen fysieke producten. Onze diensten worden digitaal geleverd en starten 
              na ontvangst van de betaling.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Annulering</h2>
            <p className="text-muted-foreground">
              Na het plaatsen van een bestelling en het starten van de dienstverlening is annulering 
              niet mogelijk, aangezien de dienst direct wordt uitgevoerd en persoonsgegevens worden verwerkt.
            </p>
            <p className="mt-4 text-muted-foreground">
              Indien u uw aanvraag annuleert voordat de dienstverlening is gestart, kunt u contact 
              met ons opnemen via{" "}
              <a href="mailto:info@uketaservice.nl" className="text-primary hover:underline">
                info@uketaservice.nl
              </a>.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Terugbetalingen</h2>
            <p className="mb-4 text-muted-foreground">
              Terugbetalingen worden uitsluitend overwogen indien:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>de dienstverlening nog niet is gestart; of</li>
              <li>sprake is van een aantoonbare fout aan onze zijde.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Eventuele terugbetalingen worden uitgevoerd via dezelfde betaalmethode als waarmee 
              de betaling is voldaan.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Afwijzing van aanvragen</h2>
            <p className="text-muted-foreground">
              Wij zijn niet verantwoordelijk voor besluiten van bevoegde autoriteiten en kunnen geen 
              garanties geven op goedkeuring van een ETA-aanvraag. Een afwijzing geeft geen automatisch 
              recht op terugbetaling.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Verwerkingstermijnen en terugbetalingen</h2>
            <p className="text-muted-foreground">
              Geadverteerde verwerkingstermijnen, waaronder spoedverwerking (zoals verwerking binnen 
              1 uur), verwerking binnen 24 uur of vergelijkbare termijnen, betreffen uitsluitend onze 
              interne verwerking en indiening van de aanvraag.
            </p>
            <p className="mt-4 text-muted-foreground">
              Vertragingen in verwerking of besluitvorming door bevoegde autoriteiten geven geen recht 
              op terugbetaling. Na start van de dienstverlening blijft de klant gehouden de uitkomst 
              van de aanvraag af te wachten.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Contact</h2>
            <p className="text-muted-foreground">
              Voor vragen over annulering of terugbetalingen kunt u contact opnemen via:{" "}
              <a href="mailto:info@uketaservice.nl" className="text-primary hover:underline">
                info@uketaservice.nl
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
