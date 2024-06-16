import Layout from "../components/layout";

const Home = (): JSX.Element => {
  return (
    <Layout heading="Coming Soon!">
      <section className="max-w-3xl text-center">
        Whether it's the warming rays of the first spring sun 
        or a cloudy sky with drizzle – from now on, there is at 
        least one good reason to go outside even in lousy weather. 
        The destination: our sweet, cozy café at the Neustrelitz market. 
        At ANNA & OTTO, you'll finally find time 
        for the little things in life again. Fragrant, homemade cake, 
        conversations about the small and big wonders of everyday life, 
        or extensive fun in our large play area.
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
