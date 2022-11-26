import Document, { DocumentContext, DocumentInitialProps ,Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }

  render() {
    return (
      <Html>
        <Head>
            {/* favicon */}
            {/* boostrrap */}
            {/* etc */}
        </Head>
        <body style={{margin:"0px",padding:"0px"}}>
          <Main />
          <NextScript />
        </body>
        {/* <style jsx global>{`
          .body-class {
          margin:0;
          padding:0;
        }
      `}</style> */}
      </Html>
    )
  }
}

export default MyDocument