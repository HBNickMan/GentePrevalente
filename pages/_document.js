import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'/>      
        <script src='https://kit.fontawesome.com/a22b30f69a.js' async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}