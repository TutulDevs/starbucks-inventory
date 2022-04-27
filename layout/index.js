import React from "react";
import { FooterNav } from "../components/FooterNav";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const PageLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        <main className="flex h-main">
          {/* sidebar */}
          <Sidebar />

          {/* content */}
          <section className="flex-1">
            {children}

            {/* to lift the main section */}
            <div className="sm:hidden h-footer mt-2" />
          </section>
        </main>
      </div>

      {/* footer nav - fixed position */}
      <FooterNav />
    </>
  );
};
