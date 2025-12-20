import { Separator } from "@/components/ui/separator";
import ukPatternBg from "@/assets/uk-pattern-bg.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${ukPatternBg})` }}
      />
      <div className="fixed inset-0 bg-background/95 -z-10" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Hero Header */}
          <div className="mb-8 rounded-xl bg-primary p-8 text-center text-primary-foreground">
            <h1 className="mb-2 text-4xl font-bold tracking-tight">Privacybeleid</h1>
            <p className="text-primary-foreground/80">Laatst bijgewerkt: 1 januari 2025</p>
          </div>

          <div className="rounded-xl bg-card/80 backdrop-blur-sm p-8 shadow-lg">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <p className="lead text-lg text-muted-foreground">
                Wij respecteren de privacy van onze bezoekers en klanten. In dit privacybeleid leggen wij uit 
                hoe wij omgaan met persoonsgegevens die wij verzamelen via onze website en onze dienstverlening.
              </p>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">1. Wie zijn wij?</h2>
                <p className="text-muted-foreground">
                  Wij zijn gevestigd te Amsterdam, Nederland en verlenen commerciële bemiddelings- en 
                  ondersteuningsdiensten bij het indienen van ETA-aanvragen. Wij handelen onder de 
                  handelsnaam IBO Exclusive.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">2. Welke persoonsgegevens verzamelen wij?</h2>
                <p className="mb-4 text-muted-foreground">
                  Wanneer u gebruikmaakt van onze website of dienstverlening, kunnen wij de volgende 
                  persoonsgegevens verwerken:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>voor- en achternaam;</li>
                  <li>e-mailadres;</li>
                  <li>telefoonnummer;</li>
                  <li>geboortedatum en nationaliteit;</li>
                  <li>paspoortgegevens (zoals paspoortnummer en vervaldatum);</li>
                  <li>reisgerelateerde informatie;</li>
                  <li>betalingsgegevens (betalingen worden verwerkt via Shopify en haar betaalproviders).</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">3. Doeleinden van de verwerking</h2>
                <p className="mb-4 text-muted-foreground">
                  Wij verwerken persoonsgegevens uitsluitend voor de volgende doeleinden:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>het uitvoeren van onze bemiddelings- en ondersteuningsdiensten;</li>
                  <li>communicatie met betrekking tot uw aanvraag;</li>
                  <li>het afhandelen van betalingen;</li>
                  <li>het voldoen aan wettelijke verplichtingen.</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">4. Rechtsgrond voor verwerking</h2>
                <p className="mb-4 text-muted-foreground">
                  Wij verwerken persoonsgegevens op basis van:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>de uitvoering van een overeenkomst, namelijk het leveren van onze bemiddelings- en ondersteuningsdiensten;</li>
                  <li>wettelijke verplichtingen, zoals administratieve en fiscale verplichtingen;</li>
                  <li>uw toestemming, voor zover deze wettelijk vereist is.</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">5. Delen van persoonsgegevens</h2>
                <p className="mb-4 text-muted-foreground">
                  Wij delen persoonsgegevens uitsluitend wanneer dit noodzakelijk is voor:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>het uitvoeren van onze dienstverlening;</li>
                  <li>het verwerken van betalingen;</li>
                  <li>het naleven van wettelijke verplichtingen.</li>
                </ul>
                <p className="mt-4 font-medium text-foreground">
                  Wij verkopen, verhuren of verhandelen persoonsgegevens nooit aan derden.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">6. Bewaartermijnen</h2>
                <p className="text-muted-foreground">
                  Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor 
                  zij zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht is.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">7. Beveiliging</h2>
                <p className="text-muted-foreground">
                  Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te 
                  beschermen tegen verlies, misbruik, onbevoegde toegang, ongewenste openbaarmaking en 
                  ongeoorloofde wijziging.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">8. Uw rechten</h2>
                <p className="mb-4 text-muted-foreground">
                  U heeft het recht om:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>inzage te krijgen in uw persoonsgegevens;</li>
                  <li>uw persoonsgegevens te laten corrigeren of verwijderen;</li>
                  <li>bezwaar te maken tegen de verwerking van uw persoonsgegevens, voor zover dit wettelijk is toegestaan.</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  U kunt een verzoek indienen door contact op te nemen via{" "}
                  <a href="mailto:info@uketaservice.nl" className="text-primary hover:underline">
                    info@uketaservice.nl
                  </a>.
                  Wij reageren zo spoedig mogelijk, maar uiterlijk binnen de wettelijke termijn.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">9. Wijzigingen in dit privacybeleid</h2>
                <p className="text-muted-foreground">
                  Wij behouden ons het recht voor dit privacybeleid te wijzigen. De meest actuele versie 
                  is altijd beschikbaar op onze website.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">10. Verwerkingsverantwoordelijke</h2>
                <p className="text-muted-foreground">
                  IBO Exclusive, gevestigd te Amsterdam, Nederland, is de verwerkingsverantwoordelijke 
                  zoals bedoeld in de Algemene Verordening Gegevensbescherming (AVG) voor de verwerking 
                  van persoonsgegevens zoals beschreven in dit privacybeleid.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">11. Externe dienstverleners (verwerkers)</h2>
                <p className="text-muted-foreground">
                  Voor het uitvoeren van onze dienstverlening maken wij gebruik van externe dienstverleners, 
                  zoals Shopify en aangesloten betaalproviders. Deze partijen verwerken persoonsgegevens 
                  uitsluitend namens ons en in overeenstemming met de geldende privacywetgeving. Met deze 
                  partijen zijn passende verwerkersovereenkomsten gesloten conform de AVG.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">12. Cookies en analytische diensten</h2>
                <p className="text-muted-foreground">
                  Onze website maakt gebruik van functionele en, indien van toepassing, analytische cookies 
                  om de werking en gebruiksvriendelijkheid van de website te verbeteren. Voor zover wettelijk 
                  vereist vragen wij vooraf toestemming voor het plaatsen van cookies. U kunt uw cookievoorkeuren 
                  te allen tijde aanpassen via uw browserinstellingen.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">13. Klachtrecht</h2>
                <p className="text-muted-foreground">
                  Indien u van mening bent dat wij niet correct omgaan met uw persoonsgegevens, heeft u het 
                  recht een klacht in te dienen bij de Autoriteit Persoonsgegevens. Uiteraard stellen wij het 
                  op prijs indien u eerst contact met ons opneemt, zodat wij samen naar een passende oplossing 
                  kunnen zoeken.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
