// import Sidebar from "../control-panel/components/Siderbar";

const Page = () => {
  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
          <p className="text-gray-700">Here is the main content area.</p>
        </div>
      </div>
    </>
  );
};

export default Page;
