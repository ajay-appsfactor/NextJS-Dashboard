import Link from "next/link";
import AdminTable from "../../components/AdminTable";


export default async function Admin() {
  const res = await fetch("http://localhost:3000/api/admin/get-admin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const { adminData } = await res.json();
  // console.log(adminData);

  const adminDelete = async (id) => {
    // console.log("Button clicked!", id);
    try {
      await fetch(`http://localhost:3000/api/admin/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Failed to delete admin", error);
    }
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl text-blue-800 mt-2">
        Admin Page
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Link
          href="/login"
          className="w-full text-center sm:w-auto text-sm cursor-pointer bg-red-500 text-white font-semibold px-4 py-2 hover:bg-red-400 transition"
        >
          LOGOUT
        </Link>
        <Link
          href="/admin/add-admin"
          className="w-full text-sm sm:w-auto cursor-pointer text-center bg-yellow-500 font-semibold text-white px-4 py-2 transition hover:bg-yellow-400"
        >
          ADD NEW ADMIN
        </Link>
      </div>
      <AdminTable data={adminData} />
    </div>
  );
}

// Hydration is React's process for attaching event handlers to the DOM, to make the static HTML interactive.
// "use client" is used to declare a boundary between the Server and Client module graphs (trees).
