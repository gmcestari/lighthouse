import Head from 'next/head'
import Lighthouse from '../components/Lighthouse'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>St. Mary's Lighthouse Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        <img src="lighthouse-icon.png" />History of Forte de Santo Antônio da Barra<img src="lighthouse-icon.png"/>
        </h1>

        <p className="description">
        The Barra lighthouse is located at Forte de Santo Antônio da Barra in Salvador, Bahia, Brazil.
        </p>

        <p className="description">
        The fort was built in 1501 and the lighthouse in 1702, to guard the entrance to the Bay of all Saints during the period of the Portuguese Empire.
        The black and white striped lighthouse is one of the oldest military structures in Brazil and an iconic Salvador's landmarks. 
        The interior of the fort has been transformed into a maritime museum and there is also an exhibit about
        the Portuguese colony's brutal slave trade, which brought millions across the Atlantic from Africa.
        </p>

        <div className="grid">
          <a className="card">
          <p>Click on the Lighthouse to switch between Day / Night</p>
          <Lighthouse />  
          </a>
        </div>
      </main>

      <footer>
          Developed by Luigi Macedo, 4th Class Ms Daly
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.14rem;
          line-height: 1.5;
          font-weight: bold;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
