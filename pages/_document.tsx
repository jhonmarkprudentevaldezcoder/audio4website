import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="The Company has a team of people passionate about their work & dedicated to excellence. It has engaged the services of capable and skillful manpower"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="tags"
          content="web,app,ui,maintenance,company,AUDIO4,profile"
        />
        <link rel="shortcut icon" href="/images/4.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
