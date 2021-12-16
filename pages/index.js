import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <p className="main__text">
              Hello! My name is Uliyan and I am based in Moscow <span className="main__text__img"><Image src="/moscow.png" width={590} height={560} /></span>.
              Currently working at Ozon (russian e-commerce, like Amazon <span className="main__text__img"><Image src="/bezos.png" width={261} height={300} /></span>) as Frontend Devoloper.
              I specialise in creating scalable & complicity interfaces, and I develop CRM at last 2 years.
          </p>
        </div>
      </main>

      <style jsx>{`
        .main {
          padding: 24px;
        }
        .main__text {
          font-size: 4.9vw;
          color: #04060f;
          margin: 0;
        }
        .main__text__img {
          display: inline-block;
          height: 1.2em;
          width: 1em;
          vertical-align: text-top;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', Roboto, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
