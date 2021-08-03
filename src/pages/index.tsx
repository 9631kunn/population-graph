import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import Layout from '../components/Layout'
import Prefectures from '../components/Prefectures'
import Chart from '../components/Chart'

import { ResponsePrefectures } from '../models/Api'
import { getPrefectures } from '../lib/getData'

export default function Home(props: ResponsePrefectures): JSX.Element {
  return (
    <div>
      <Head>
        <title>人口推移</title>
        <meta property="og:title" content="人口推移をグラフで確認" />
        <meta
          property="og:description"
          content="都道府県別の人口推移情報がグラフで視覚的に確認できるWebアプリです"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://population-graph-lime.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://population-graph-lime.vercel.app/ogp.png"
        />
        <meta property="og:site_name" content="人口推移" />
        <meta property="og:locale" content="ja_JP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <Layout>
          <Prefectures {...props} />
          <Chart />
        </Layout>
      </RecoilRoot>
    </div>
  )
}

Home.getInitialProps = () => {
  return getPrefectures()
}
