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
      <main className="flex flex-col flex-grow overflow-y-auto">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
