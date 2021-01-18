import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import { io } from 'socket.io-client';

export default function App({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    const socket = io();
    socket.on('now', (data: string) => {
        console.log('message:', data);
    });

    return (
        <ApolloProvider client={ apolloClient }>
            <Component { ...pageProps } />
        </ApolloProvider>
    );
}
