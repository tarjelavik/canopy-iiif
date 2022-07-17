import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
