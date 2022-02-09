import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diaper Log | Home</title>
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
