import React from "react";
import ListResult from "./components/list-result";
import MainLayout from "./components/main-layout";
import SearchBar from "./components/search-bar";

function App() {
  return (
    <MainLayout>
      <SearchBar />
      <ListResult />
    </MainLayout>
  );
}

export default App;
