import Head from "next/head";
import { PageLayout } from "../layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starbucks Inventory</title>
        <meta name="description" content="inventory description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>content</PageLayout>
    </>
  );
}
