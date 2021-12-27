import Link from "next/link";
import Image from "next/image";
import logo from "/public/fao-web-assets-logo-vertical-colour.svg";
import { Facebook, Instagram, Mail, Map, Phone } from "iconoir-react";
import Head from "next/head";
import Heading, { HeadingType } from "./heading";
import ExternalLink from "./external-link";

interface LayoutProps {
  heading: string;
  title?: string;
  children: JSX.Element[] | JSX.Element | string;
}

const Layout = ({ heading, title, children }: LayoutProps): JSX.Element => (
  <div className="px-8">
    <Head>
      <title>{title ? title + " - " : ""}ANNA & OTTO - Das Familiencafé</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <div className="flex justify-center mt-8">
        <Link href="/">
          <a className="w-2/3 max-w-xs">
            <Image
              src={logo}
              width={46}
              height={47}
              layout="responsive"
              alt="ANNA & OTTO - Das Familiencafé"
            />
          </a>
        </Link>
      </div>
    </header>
    <Heading type={HeadingType.H1} className="mt-8">
      {heading}
    </Heading>
    <main className="flex flex-col items-center text-lg font-text text-grau">
      {children}
    </main>
    <footer className="mt-8">
      <div className="flex justify-center gap-4 mb-20"></div>
      <div className="fixed bottom-0 left-0 flex justify-around w-full gap-4 p-2 text-lg bg-white text-grau font-text">
        <ExternalLink href="tel:+4939812293575" className="w-12 h-12">
          <Phone width={24} height={24} />
        </ExternalLink>
        <ExternalLink href="mailto:post@anna-otto.de" className="w-12 h-12">
          <Mail width={24} height={24} />
        </ExternalLink>
        <ExternalLink
          href="https://g.page/anna-otto-neustrelitz?share"
          className="w-12 h-12"
        >
          <Map width={24} height={24} />
        </ExternalLink>
        <ExternalLink
          href="https://www.facebook.com/annaundotto/"
          className="w-12 h-12"
        >
          <Facebook width={24} height={24} />
        </ExternalLink>
        <ExternalLink
          href="https://www.instagram.com/anna_und_otto/"
          className="w-12 h-12"
        >
          <Instagram width={24} height={24} />
        </ExternalLink>
      </div>
    </footer>
  </div>
);

export default Layout;
