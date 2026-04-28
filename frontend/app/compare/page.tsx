"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placement_percentage?: number;
};

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("compare");
    if (data) {
      setColleges(JSON.parse(data));
    }
  }, []);

  // 🏆 Best college logic (based on highest rating)
  const bestCollegeId =
    colleges.length > 0
      ? colleges.reduce((best, current) =>
          current.rating > best.rating ? current : best
        ).id
      : null;

  const removeCollege = (id: number) => {
    const updated = colleges.filter((c) => c.id !== id);
    setColleges(updated);
    localStorage.setItem("compare", JSON.stringify(updated));
  };

  // ✅ Improved empty state
  if (colleges.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 text-black">
        <Navbar />
        <div className="text-center mt-20">
          <p className="text-xl font-semibold">No colleges selected</p>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Compare Colleges
        </h1>

        {/* Back Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back
        </button>

        {/* Improved container */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-2">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            
            {/* HEADER */}
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Feature</th>

                {colleges.map((c) => (
                  <th
                    key={c.id}
                    className={`p-3 text-center ${
                      c.id === bestCollegeId
                        ? "bg-green-500 text-white"
                        : ""
                    }`}
                  >
                    {c.name}

                    {/* 🏆 Best Badge */}
                    {c.id === bestCollegeId && (
                      <div className="text-xs mt-1">🏆 Best</div>
                    )}

                    <br />
                    <button
                      onClick={() => removeCollege(c.id)}
                      className="text-xs text-red-200 hover:text-white"
                    >
                      Remove
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              <tr className="border-t hover:bg-gray-100 transition">
                <td className="p-3 font-semibold bg-gray-100">
                  Location
                </td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 text-center">
                    {c.location}
                  </td>
                ))}
              </tr>

              <tr className="border-t hover:bg-gray-100 transition">
                <td className="p-3 font-semibold bg-gray-100">
                  Fees
                </td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 text-center">
                    ₹{c.fees}
                  </td>
                ))}
              </tr>

              <tr className="border-t hover:bg-gray-100 transition">
                <td className="p-3 font-semibold bg-gray-100">
                  Rating
                </td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 text-center">
                    ⭐ {c.rating}
                  </td>
                ))}
              </tr>

              <tr className="border-t hover:bg-gray-100 transition">
                <td className="p-3 font-semibold bg-gray-100">
                  Placement %
                </td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 text-center">
                    {c.placement_percentage ?? "N/A"}%
                  </td>
                ))}
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}