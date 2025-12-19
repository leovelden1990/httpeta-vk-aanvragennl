import { Separator } from "@/components/ui/separator";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Algemene Voorwaarden</h1>
          <p className="text-muted-foreground">Laatst bijgewerkt: 1 januari 2025</p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Definities</h2>
            <p className="mb-4 text-muted-foreground">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Dienst:</strong> de bemiddelings- en ondersteuningsdienst bij het indienen van een ETA-aanvraag.</li>
              <li><strong>Klant:</strong> de natuurlijke persoon die gebruikmaakt van de Dienst.</li>
              <li><strong>Wij/Ons:</strong> gevestigd te Amsterdam, Nederland.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Toepasselijkheid</h2>
            <p className="text-muted-foreground">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en 
              overeenkomsten met betrekking tot onze Dienst, ongeacht via welk kanaal deze tot stand komen.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Onze Dienst</h2>
            <p className="text-muted-foreground">
              Wij bieden bemiddeling en ondersteuning bij het indienen van ETA-aanvragen namens de klant. 
              Wij zijn geen overheidsinstantie.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Vergoeding</h2>
            <p className="text-muted-foreground">
              De door de klant betaalde prijs betreft een vergoeding voor onze bemiddelings- en 
              ondersteuningsdiensten.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Betaling</h2>
            <p className="text-muted-foreground">
              Betaling vindt plaats via de aangeboden betaalmethoden in de online checkout. De Dienst 
              wordt pas uitgevoerd nadat de betaling volledig is ontvangen.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Spoedverwerking en verwerkingstermijnen</h2>
            <p className="text-muted-foreground">
              Indien op de website wordt geadverteerd met verwerking binnen 24 uur of vergelijkbare 
              termijnen, betreft dit uitsluitend de verwerking en indiening van de aanvraag door ons.
            </p>
            <p className="mt-4 text-muted-foreground">
              Deze termijnen hebben geen betrekking op de beoordeling, goedkeuring of afgifte van een 
              ETA door bevoegde autoriteiten. Verwerkingstermijnen zijn indicatief en kunnen afwijken 
              door onvoorziene omstandigheden.
            </p>
            <p className="mt-4 text-muted-foreground">
              Het overschrijden van een geadverteerde verwerkingstermijn geeft geen automatisch recht 
              op terugbetaling. De klant blijft verplicht de lopende aanvraag af te wachten.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">7. Annulering en restitutie</h2>
            <p className="text-muted-foreground">
              Annulering is mogelijk zolang de aanvraag nog niet is ingediend. Na indiening van de 
              aanvraag is restitutie niet mogelijk, aangezien de Dienst volledig is uitgevoerd.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">8. Verantwoordelijkheid van de Klant</h2>
            <p className="text-muted-foreground">
              De klant is verantwoordelijk voor het correct, volledig en waarheidsgetrouw aanleveren 
              van alle benodigde gegevens. Wij zijn niet aansprakelijk voor gevolgen die voortvloeien 
              uit onjuiste of onvolledige informatie.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">9. Aansprakelijkheid</h2>
            <p className="text-muted-foreground">
              Wij zijn niet aansprakelijk voor beslissingen, vertragingen of afwijzingen door 
              overheidsinstanties. Onze aansprakelijkheid is in alle gevallen beperkt tot het bedrag 
              dat de klant voor de Dienst heeft betaald.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">10. Privacy</h2>
            <p className="text-muted-foreground">
              Persoonsgegevens worden verwerkt conform onze Privacyverklaring.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">11. Wijzigingen</h2>
            <p className="text-muted-foreground">
              Wij behouden ons het recht voor om deze algemene voorwaarden te wijzigen. De meest 
              actuele versie is steeds van toepassing.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">12. Toepasselijk recht</h2>
            <p className="text-muted-foreground">
              Op deze algemene voorwaarden is Nederlands recht van toepassing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
