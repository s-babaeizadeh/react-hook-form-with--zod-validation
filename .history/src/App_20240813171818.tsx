import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be at least 8 chars" });
      return;
    }

    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="form gap-2 mt-20">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div className="text-red-500">{errors.email}</div>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <div className="text-red-500">{errors.password}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
