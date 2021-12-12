import Layout from "../components/layout";
import Heading, { HeadingType } from "../components/heading";

const Custom404 = (): JSX.Element => (
  <Layout heading="Hoppla!" title="Hoppla!">
    <Heading type={HeadingType.H3}>
      Diese Seite konnte nicht gefunden werden.
    </Heading>
    <p>Es sieht so aus, als ob an diesem Ort nichts gefunden werden konnte.</p>
  </Layout>
);

export default Custom404;
