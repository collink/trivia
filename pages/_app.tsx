import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import '../styles.scss';

import { useApollo } from '../lib/apollo';

export default function App({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    const getDisplayModeClassName = (): string => {
      return 'light';
    };

    return (
        <ApolloProvider client={ apolloClient }>
            <div className='app-container' display-mode={getDisplayModeClassName()}>
                <Component { ...pageProps } />
            </div>
        </ApolloProvider>
    );
}
