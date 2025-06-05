"use client";
import React from "react";
import { useModal } from "@/app/hooks/useModal";
import { Modal } from "@/app/components/ui/modal";
import { MdOutlineEdit } from "react-icons/md";

const Home = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <div>
      Home Page
      <div>
        <button
          onClick={openModal}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
        >
          <MdOutlineEdit className="text-xl" />
          Edit
        </button>
      </div>
      {/* Modal check  */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Address
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1 ">
                    Country
                  </label>
                  <input type="text" defaultValue="United States" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1 ">
                    City/State
                  </label>
                  <input type="text" defaultValue="Arizona, United States." />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1 ">
                    Postal Code
                  </label>
                  <input type="text" defaultValue="ERT 2489" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1 ">
                    TAX ID
                  </label>
                  <input type="text" defaultValue="AS4568384" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <button
                size="sm"
                className="rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                size="sm"
                className="rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
