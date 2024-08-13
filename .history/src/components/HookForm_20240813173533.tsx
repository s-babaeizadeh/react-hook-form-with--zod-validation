import React from "react";

const HookForm = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="form gap-2 max-w-[450px] p-6 bg-white shadow-md rounded-md">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
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
