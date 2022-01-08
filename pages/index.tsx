import Image from "next/image";
import Layout from "../components/layout";
import waffleMobile from "../public/images/mobile/waffle.png";
import berriesMobile from "../public/images/mobile/berries.png";
import logo from "../public/logo-square-colour.svg";
import coffeeBeansMobile from "../public/images/mobile/coffee-beans.png";
import Button from "../components/shared/button";
import { Map, Phone } from "iconoir-react";
import ExternalLink from "../components/shared/external-link";
import flowers from "../public/flowers.svg";
import Card from "../components/shared/card";
import Link from "next/link";
import Heading, { HeadingType } from "../components/shared/heading";
import childsEating from "../public/images/mobile/childs-eating.png";

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
            placeholder="blur"
          />
        </div>
        <div className="relative w-2/5 top-4 right-4">
          <Image
            src={berriesMobile}
            width={2348}
            height={2508}
            layout="responsive"
            alt="Blaubeeren"
            placeholder="blur"
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
            placeholder="blur"
          />
        </div>
      </div>
      <div className="z-10 flex flex-wrap justify-center gap-4 -mt-24">
        <ExternalLink href="tel:+4939812293575">
          <Button>
            <Phone width={24} height={24} />
            <span>Anrufen</span>
          </Button>
        </ExternalLink>
        <ExternalLink href="https://g.page/anna-otto-neustrelitz?share">
          <Button>
            <Map width={24} height={24} />
            <span>Route anzeigen</span>
          </Button>
        </ExternalLink>
      </div>
      <div className="flex justify-center mt-6 text-center">
        täglich von 8:00 - 17:30 Uhr geöffnet
      </div>
      <div className="mt-24">
        <Image src={flowers} width={195} height={81} alt="Blumen" />
      </div>
      <div className="flex flex-col self-start mt-12">
        <Card className="z-10 ml-4">
          <Heading type={HeadingType.H2}>Das Café</Heading>
          <p>
            Duftender, selbst gebackener Kuchen oder ausgiebiges Faxen machen –
            genau das lässt unser Familiencafé zum Wohlfühlort werden.
          </p>
          <Link href="/cafe">
            <a>
              <Button type="secondary">Mehr erfahren</Button>
            </a>
          </Link>
        </Card>
        <div className="w-screen -mt-56 -ml-4">
          <Image
            src={childsEating}
            width={923}
            height={1355}
            layout="responsive"
            alt="Kinder essen Apfelkuchen"
            placeholder="blur"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
