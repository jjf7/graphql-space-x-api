import React, { useState } from "react";
import { useLaunchesPast } from "./hooks/useLaunches";
import ListLaunches from "./components/ListLaunches";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Error from "./components/Error";

const App = () => {
  const [page, setPage] = useState(0);
  const { loading, error, data } = useLaunchesPast(page);

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <div style={{ padding: "50px" }}>
      <h1>GraphQL SpaceX</h1>
      <h3>By JFdeSousa</h3>
      <Nav page={page} setPage={setPage} />
      <ListLaunches list={data.launchesPast} />
    </div>
  );
};

export default App;
