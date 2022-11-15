import '#/styles/globals.css';
import type { AppProps } from 'next/app';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
export default function MyApp({ Component, pageProps }: AppProps) {
return (
    <Component {...pageProps}/>
  );
}
