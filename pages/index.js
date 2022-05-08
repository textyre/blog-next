import Head from "next/head";
import { MainPage } from "@components/MainPage";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </div>
  );
}
