import { useState } from "react";
import { useRouter } from "next/router";  // 🔹 Import Next.js router

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();  // 🔹 Initialize router

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!email) {
      newErrors.email = "Dholiest3105@gmail";
    }
    if (!password) {
      newErrors.password = "12345678";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Logging in with:", { email, password });

      // 🔹 Simple redirect after "successful login"
      router.push("/landingpage");  
    
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-purple-900">
      <div className="w-full max-w-md bg-black rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login to BlockVerify</h1>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
            />
            {errors.password && (
              <p id="password-error" className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
