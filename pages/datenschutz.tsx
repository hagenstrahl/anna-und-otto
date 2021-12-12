import Heading, { HeadingType } from "../components/heading";
import Layout from "../components/layout";

const Datenschutz = (): JSX.Element => (
  <Layout heading="Datenschutz" title="Datenschutz">
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2}>Allgemeine Hinweise</Heading>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
        besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
        persönlich identifiziert werden können. Ausführliche Informationen zum
        Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Datenerfassung auf unserer Website
      </Heading>
      <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
      <p className="mt-4">
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
        Website entnehmen.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Wie erfassen wir Ihre Daten?
      </Heading>
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </p>
      <p className="mt-4">
        Andere Daten werden automatisch beim Besuch der Website durch unsere
        IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
        Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
        Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
        betreten.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Wofür nutzen wir Ihre Daten?
      </Heading>
      <p>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Welche Rechte haben Sie bezüglich Ihrer Daten?
      </Heading>
      <p>
        Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder
        Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum
        Thema Datenschutz können Sie sich jederzeit unter der im Impressum
        angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Allgemeine Hinweise und Pflichtinformationen Datenschutz
      </Heading>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>
      <p className="mt-4">
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>
      <p className="mt-4">
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>
    </section>
  </Layout>
);

export default Datenschutz;
