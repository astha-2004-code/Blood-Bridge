import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/layeout";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <Layout>
      {error && alert(error)}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Home Page</h1>
        </>
      )}
    </Layout>
  );
};

export default HomePage;