const Topbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg bg-gray-100 border-b border-gray-200 ">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Welcome, User</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/300"
          alt="User Avatar"
        />
      </div>
    </header>
  );
};

export default Topbar;
