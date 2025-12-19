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
              <li><strong className="text-foreground">Dienst:</strong> de commerciële bemiddelings- en ondersteuningsdienst bij het invullen en indienen van een ETA-aanvraag.</li>
              <li><strong className="text-foreground">Klant:</strong> de natuurlijke persoon die gebruikmaakt van de Dienst.</li>
              <li><strong className="text-foreground">Wij/Ons:</strong> de onderneming handelend onder de handelsnaam IBO Exclusive, gevestigd te Amsterdam, Nederland.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Toepasselijkheid</h2>
            <p className="text-muted-foreground">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en 
              overeenkomsten met betrekking tot onze Dienst, ongeacht via welk kanaal deze tot stand komen.
            </p>
            <p className="mt-4 text-muted-foreground">
              Door gebruik te maken van onze website en dienstverlening stemt de Klant in met deze 
              algemene voorwaarden.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Onze Dienst</h2>
            <p className="text-muted-foreground">
              Wij bieden professionele bemiddeling en ondersteuning bij het invullen, controleren en 
              indienen van ETA-aanvragen namens de Klant.
            </p>
            <p className="mt-4 text-muted-foreground">
              Wij zijn geen overheidsinstantie, ambassade of immigratiedienst en hebben geen invloed 
              op de uiteindelijke beoordeling van een aanvraag door bevoegde autoriteiten.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Vergoeding</h2>
            <p className="text-muted-foreground">
              De door de Klant betaalde prijs betreft een vergoeding voor onze bemiddelings- en 
              ondersteuningsdiensten, waaronder administratieve verwerking, controle van gegevens 
              en indiening van de aanvraag.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Betaling</h2>
            <p className="text-muted-foreground">
              Betaling vindt plaats via de aangeboden betaalmethoden in de online checkout.
            </p>
            <p className="mt-4 text-muted-foreground">
              De uitvoering van de Dienst start nadat de betaling volledig is ontvangen.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Spoedverwerking en verwerkingstermijnen</h2>
            <p className="text-muted-foreground">
              Indien op de website wordt geadverteerd met verwerking binnen 24 uur, spoedverwerking 
              of vergelijkbare termijnen, betreft dit uitsluitend onze interne verwerking en indiening 
              van de aanvraag.
            </p>
            <p className="mt-4 text-muted-foreground">
              Deze termijnen zijn bedoeld als indicatie van onze dienstverlening en hebben geen 
              betrekking op de beoordeling, goedkeuring of afgifte van een ETA door bevoegde autoriteiten.
            </p>
            <p className="mt-4 text-muted-foreground">
              Het overschrijden van een geadverteerde verwerkingstermijn geeft geen automatisch recht 
              op terugbetaling. De Klant blijft gehouden de uitkomst van de lopende aanvraag af te wachten.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">7. Annulering en restitutie</h2>
            <p className="text-muted-foreground">
              Annulering is mogelijk zolang de aanvraag nog niet is ingediend.
            </p>
            <p className="mt-4 text-muted-foreground">
              Na indiening van de aanvraag is restitutie niet mogelijk, aangezien de Dienst dan 
              volledig of grotendeels is uitgevoerd.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">8. Verantwoordelijkheid van de Klant</h2>
            <p className="text-muted-foreground">
              De Klant is verantwoordelijk voor het correct, volledig en waarheidsgetrouw aanleveren 
              van alle benodigde gegevens.
            </p>
            <p className="mt-4 text-muted-foreground">
              Wij zijn niet aansprakelijk voor gevolgen die voortvloeien uit onjuiste, onvolledige 
              of onduidelijk aangeleverde informatie.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">9. Aansprakelijkheid</h2>
            <p className="text-muted-foreground">
              Wij leveren een professionele bemiddelingsdienst, maar kunnen geen garanties geven 
              over de uitkomst van een ETA-aanvraag.
            </p>
            <p className="mt-4 text-muted-foreground">
              Wij zijn niet aansprakelijk voor beslissingen, vertragingen of beleidswijzigingen 
              van bevoegde overheidsinstanties.
            </p>
            <p className="mt-4 text-muted-foreground">
              Onze aansprakelijkheid is in alle gevallen beperkt tot het bedrag dat de Klant voor 
              de Dienst heeft betaald.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">10. Privacy</h2>
            <p className="text-muted-foreground">
              Persoonsgegevens worden verwerkt in overeenstemming met onze Privacyverklaring, zoals 
              gepubliceerd op onze website.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">11. Overmacht</h2>
            <p className="text-muted-foreground">
              In geval van overmacht, waaronder storingen bij overheidsinstanties, technische problemen 
              of andere omstandigheden buiten onze invloedssfeer, zijn wij niet gehouden tot het nakomen 
              van verplichtingen zolang deze situatie voortduurt.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">12. Wijzigingen</h2>
            <p className="text-muted-foreground">
              Wij behouden ons het recht voor deze algemene voorwaarden te wijzigen. De meest actuele 
              versie is steeds van toepassing en beschikbaar via onze website.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">13. Toepasselijk recht</h2>
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