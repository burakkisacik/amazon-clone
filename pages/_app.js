import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client';
import { store } from '../app/store';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider session={pageProps.session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AuthProvider>
    );
}

export default MyApp;
