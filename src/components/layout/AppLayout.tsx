import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";

export default function AppLayout() {
  return (
    <div className="container">
      <div className="my-10 flex gap-6">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
