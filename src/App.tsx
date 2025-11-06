import Main from "./components/main/Main";
import TestMain from "./components/main/TestMain";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="container">
      <div className="my-10 flex gap-6">
        <Sidebar />
        <Main>
          <TestMain />
        </Main>
      </div>
    </div>
  );
}
