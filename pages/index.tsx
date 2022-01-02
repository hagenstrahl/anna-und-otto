import Image from "next/image";
import Layout from "../components/layout";
import waffleMobile from "../public/images/mobile/waffle.png";
import berriesMobile from "../public/images/mobile/berries.png";
import logo from "../public/logo-square-colour.svg";
import coffeeBeansMobile from "../public/images/mobile/coffee-beans.png";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <div className="flex justify-between w-screen">
        <div className="relative w-1/2">
          <Image
            src={waffleMobile}
            width={1031}
            height={1210}
            layout="responsive"
            alt="Waffel"
          />
        </div>
        <div className="relative w-2/5 top-4 right-4">
          <Image
            src={berriesMobile}
            width={2348}
            height={2508}
            layout="responsive"
            alt="Blaubeeren"
          />
        </div>
      </div>
      <div className="w-2/3">
        <Image
          src={logo}
          width={46}
          height={47}
          layout="responsive"
          alt="ANNA & OTTO - Das Familiencafé"
        />
      </div>
      <div className="flex justify-end w-screen">
        <div className="relative w-1/2">
          <Image
            src={coffeeBeansMobile}
            width={1103}
            height={1379}
            layout="responsive"
            alt="Kaffeebohnen"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
