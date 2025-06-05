import Siderbar from "../control-panel/components/Siderbar";
import Topbar from "../control-panel/components/Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* Sidebar */}
        <Siderbar />
      </div>

      {/* Main content */}
      {/* <div className="flex flex-col flex-1"> */}
      {/* Top Navbar */}
      {/* <Topbar /> */}

      {/* Page Content */}
      <main className="flex-grow p-3 md:p-6">
        <Topbar />
        {children}
      </main>
      {/* </div> */}
    </div>
  );
}
