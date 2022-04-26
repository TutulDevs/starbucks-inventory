import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex h-main">
        {/* sidebar */}
        <Sidebar />

        {/* content */}
        <section className="flex-1">{children}</section>
      </main>
    </div>
  );
};
