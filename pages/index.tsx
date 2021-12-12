import Layout from "../components/layout";

const Home = (): JSX.Element => {
  return (
    <Layout heading="Coming Soon!">
      <section className="max-w-3xl text-center">
        Ob wärmende Strahlen der ersten Frühlingssonne oder bewölkter Himmel mit
        Nieselregen – bald gibt es mindestens einen guten Grund, auch bei
        Schietwetter vor die Tür zu gehen. Das Ziel: unser süßes, gemütliches
        Café am Neustrelitzer Markt. Bei Anna & Otto findet ihr endlich wieder
        Zeit für die kleinen Dinge des Lebens. Duftender, selbst gebackener
        Kuchen, Gespräche über die kleinen und großen Wunder des Alltags oder
        ausgiebiges Faxen machen in unserer großen Spielecke.
      </section>
      <section className="max-w-3xl mt-5 text-center">
        Übrigens: In einem separaten Beratungs- und Seminarraum erfahrt ihr
        alles rund um die Themen Schwangerschaft und Familie.
      </section>
      <section className="max-w-3xl mt-5 text-center">
        Wir freuen uns auf euch. Bis bald!
      </section>
    </Layout>
  );
};

export default Home;
