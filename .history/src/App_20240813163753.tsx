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
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="text" />
    </form>
  );
};

export default App;
