import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import './utils/globals.css';
import '@contentful/live-preview/style.css';

import { Layout } from '@src/components/templates/layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
};

export default appWithTranslation(App);
