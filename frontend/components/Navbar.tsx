"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1
        className="font-bold text-lg cursor-pointer"
        onClick={() => router.push("/")}
      >
        🎓 College Finder
      </h1>

      {user ? (
        <div className="flex gap-3 items-center">
          <span>{user.email}</span>
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
}