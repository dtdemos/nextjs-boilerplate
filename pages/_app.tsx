import type { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

/*
import "../app/globals.css";
import type { Metadata } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo Next App",
  description: "Monitored with Dynatrace",
};

//export default function App({ children }: { children: React.ReactNode }) {
export default function App({ Component, pageProps }: AppProps) {
  return (
    <html>
      <head>
        <script
          type="text/javascript"
          src="https://js-cdn.dynatrace.com/jstag/157944990f8/bf83471ois/3d03307895552e3e_complete.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
*/

/*
export default function App({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
            <script
            type="text/javascript"
            src="https://js-cdn.dynatrace.com/jstag/157944990f8/bf83471ois/3d03307895552e3e_complete.js"
            crossOrigin="anonymous"
            ></script>
      </head>
        <body>{children}</body>
      </html>
    )
  }
  */