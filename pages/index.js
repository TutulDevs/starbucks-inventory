import Head from "next/head";
import Image from "next/image";
import { SearchBar } from "../components/SearchBar";
import { SectionHeader } from "../components/SectionHeader";
import { Status } from "../components/Status";
import { PageLayout } from "../layout";
import { tableData } from "../mock/tableData";

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
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="pl-[19px] pt-3 hidden sm:inline-flex">
                    <input className="checkbox" type="checkbox" name="" id="" />
                  </th>

                  <th className="clickable hidden sm:table-cell">
                    <span className="mr-1">Date Updated</span>
                    <Image
                      src={"/arrow-down.svg"}
                      alt="down"
                      width={11}
                      height={10}
                    />
                  </th>

                  <th className="clickable pl-4 sm:pl-0">
                    <span className="mr-1">title</span>

                    <Image
                      src={"/arrow-up-down.svg"}
                      alt="down"
                      width={11}
                      height={10}
                    />
                  </th>
                  <th className="hidden md:table-cell">details</th>
                  <th>
                    <span className="invisible sm:visible">status</span>
                  </th>
                  <th className="text-right pr-2">
                    <span className="invisible md:visible">quantity</span>
                  </th>
                  <th className="text-right pr-2 hidden md:table-cell">
                    unit price
                  </th>
                  <th className="pr-3 clickable text-right">
                    <span className="mr-1">amount</span>
                    <Image
                      src={"/arrow-up-down.svg"}
                      alt="down"
                      width={11}
                      height={10}
                    />
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((item) => (
                  <tr key={item.id} className="h-16">
                    <td className="pl-[19px] pt-2 hidden sm:table-cell">
                      <input
                        className="checkbox"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </td>
                    <td className="hidden sm:table-cell">{item.date}</td>
                    <td className="pl-4 sm:pl-0">{item.title}</td>
                    <td className="hidden md:table-cell">{item.details}</td>

                    <td>
                      <Status status={item.status} />
                    </td>

                    <td className="text-right pr-2">
                      <span className="font-bold">
                        {item.quantity.collected}
                      </span>
                      /<span>{item.quantity.total}</span>
                    </td>
                    <td className="text-right pr-2 hidden md:table-cell">
                      ${item.price}
                    </td>
                    <td className="pr-3 text-right">
                      ${(item.quantity.collected * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
