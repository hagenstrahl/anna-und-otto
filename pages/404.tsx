import Layout from "../components/layout";
import Heading, { HeadingType } from "../components/shared/heading";

const Custom404 = (): JSX.Element => (
  <Layout title="Hoppla!">
    <Heading className="mt-28" type={HeadingType.H1}>
      Hoppla!
    </Heading>
    <Heading type={HeadingType.H3}>
      Diese Seite konnte nicht gefunden werden.
    </Heading>
    <p className="text-center">
      Es sieht so aus, als ob an diesem Ort nichts gefunden werden konnte.
    </p>
  </Layout>
);

export default Custom404;
