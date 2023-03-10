// import { Layout } from 'antd'
import Head from 'next/head'
import Main from './home'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Pong Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}
