import React from 'react';

// Components & Utils
  import Head from 'next/head';
  import type { AppProps } from 'next/app'

// Layouts
  import DefaultLayout from '../layout/DefaultLayout';

// Styles
  import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';
import { hygraph } from '../lib/hygraph';
import { CatsAPIProvider } from '../context/CatsAPIFetch';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={hygraph}>
      <CatsAPIProvider>
        <DefaultLayout>
          <Head>
            <link rel="shortcut icon" href={'/favicon.svg'} />
            <title>Guilherme Dunguel | Front-End Developer</title>
          </Head>
          <div>
            <Component {...pageProps} />
          </div>
        </DefaultLayout>
      </CatsAPIProvider>
    </ApolloProvider>
  )
}

