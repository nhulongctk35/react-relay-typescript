import * as React from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import Newsfeed from "./Newsfeed";
import LoadingSpinner from "./LoadingSpinner";
import Sidebar from "./Sidebar";

export default function App(): React.ReactElement {
  return (
    <RelayEnvironment>
      <div className="app">
        <React.Suspense fallback={<LoadingSpinner />}>
          <Newsfeed />
        </React.Suspense>
        <Sidebar />
      </div>
    </RelayEnvironment>
  );
}
