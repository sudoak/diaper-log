import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return <Navbar />;
};

export default Home;
