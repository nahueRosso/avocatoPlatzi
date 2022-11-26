import type { AppProps } from 'next/app'
import Layout from '../component/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  //provaiders
  //layout
  //props adiccionales a todos
  return (
    <>
    <Layout>
  <Component {...pageProps} />
    </Layout>
    </>
  )
}