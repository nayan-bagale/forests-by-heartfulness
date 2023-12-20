import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import './utils/globals.css';
import '@contentful/live-preview/style.css';
import { Poppins } from 'next/font/google';

import { Layout } from '@src/components/templates/layout';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main className={`${poppins.className} max-w-[2560px] `}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
};

export default appWithTranslation(App);
