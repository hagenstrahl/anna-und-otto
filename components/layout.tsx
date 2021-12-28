import { Facebook, Instagram, Mail, Map, Phone } from "iconoir-react";
import Head from "next/head";
import Heading, { HeadingType } from "./shared/heading";
import ExternalLink from "./shared/external-link";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Menu from "./menu";

interface LayoutProps {
  heading: string;
  title?: string;
  children: JSX.Element[] | JSX.Element | string;
}

const Layout = ({ heading, title, children }: LayoutProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-8">
      <Head>
        <title>
          {title ? title + " - " : ""}ANNA & OTTO - Das Familiencafé
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav
          className="fixed p-2 right-8 top-12"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon className="w-10 h-10 text-orange hover:text-dark-orange" />
        </nav>
        {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
      </header>
      <Heading type={HeadingType.H1} className="mt-8">
        {heading}
      </Heading>
      <main className="flex flex-col items-center text-lg font-text text-grau">
        {children}
      </main>
      <footer className="mt-24">
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
};

export default Layout;
