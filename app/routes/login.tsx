import { redirect, useNavigate } from "react-router";

// routes/login.tsx
export default function Login() {
    const navigate = useNavigate();

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/");
    }
  return (
    <main className="p-4 max-w-md mx-auto mt-24">
      <h1 className="text-xl mb-4">Login</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={submitForm}
      >
        <input name="email" placeholder="Email" className="border p-2" />
        <input name="password" type="password" placeholder="Password" className="border p-2" />
        <button type="submit" className="bg-black text-white p-2 cursor-pointer">
          Sign In
        </button>
      </form>
    </main>
  );
}