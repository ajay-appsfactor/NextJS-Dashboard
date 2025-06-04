
import { DatePickerComponent } from "../components/DatePicker";

const Page = () => {
  return (
    <div className="flex items-center justify-center p-4 mt-20">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Date Picker Page</h2>
        {/* DatePickerComponent  */}
        <DatePickerComponent />
      </div>
    </div>
  );
};

export default Page;
