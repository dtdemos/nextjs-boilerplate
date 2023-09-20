import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <script
            type="text/javascript"
            src="https://js-cdn.dynatrace.com/jstag/157944990f8/bf83471ois/3d03307895552e3e_complete.js"
            crossOrigin="anonymous"
            async
          ></script>
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

/*import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <head>
        <script
          type="text/javascript"
          src="https://js-cdn.dynatrace.com/jstag/157944990f8/bf83471ois/3d03307895552e3e_complete.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
*/