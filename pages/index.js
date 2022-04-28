import Head from "next/head";
import { Pagination } from "../components/Pagination";
import { SearchBar } from "../components/SearchBar";
import { SectionHeader } from "../components/SectionHeader";
import { Table } from "../components/Table";
import { PageLayout } from "../layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starbucks Inventory</title>
        <meta name="description" content="inventory description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        {/* section header */}
        <SectionHeader title="Inventory" />

        {/* wrapper */}
        <section className="p-2 sm:p-6">
          <div className="bg-white min-h-[50vh] rounded shadow-mainContent">
            {/* Search bar */}
            <div className="px-4 py-6">
              <SearchBar />
            </div>

            {/* table */}
            <Table />

            {/* Pagination */}
            <Pagination />
          </div>
        </section>
      </PageLayout>
    </>
  );
}
