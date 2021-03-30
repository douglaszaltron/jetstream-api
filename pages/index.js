import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Jetstream API</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <main>
        <div>
          <img src="/jetstream.png" className="logo" alt="Jetstream" />
        </div>

        <div>
          <a
            href="https://vercel.com/?utm_source=jetstreamapi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/powered-by-vercel.svg"
              width="175"
              alt="Powered by Vercel"
            />
          </a>
        </div>

        <style jsx global>
          {`
            * {
              box-sizing: border-box;
              margin: 0;
              outline: 0;
              padding: 0;
            }

            html,
            body {
              height: 100%;
            }

            body {
              color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
            }

            main > a {
              color: #fff;
              font-size: 2em;
              text-decoration: none;
            }

            .logo {
              padding: 2em;
            }
          `}
        </style>
      </main>
    </>
  );
}
