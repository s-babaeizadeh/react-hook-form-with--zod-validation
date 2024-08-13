import { useForm } from "react-hook-form";

const HookForm = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="form gap-2 max-w-[450px] p-6 bg-white shadow-md rounded-md">
        <input
          type="text"
          placeholder="Email"
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="border rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookForm;
