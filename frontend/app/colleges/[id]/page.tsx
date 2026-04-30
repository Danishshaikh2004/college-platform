"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";

type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placement_percentage?: number;
};

export default function CollegeDetail() {
  const { id } = useParams();
  const [college, setCollege] = useState<College | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-db`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c: College) => c.id === Number(id));
        setCollege(found);
      });
  }, [id]);

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 text-black">
        <Navbar />
        <div className="p-6 text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto">
        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back
        </button>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            {college.name}
          </h1>

          <p className="text-lg text-gray-700 mb-2">
            📍 {college.location}
          </p>

          <p className="text-lg mb-2">
            💰 Fees: <strong>₹{college.fees}</strong>
          </p>

          <p className="text-lg mb-2">
            ⭐ Rating: <strong>{college.rating}</strong>
          </p>

          <p className="text-lg">
            📊 Placement:{" "}
            <strong>
              {college.placement_percentage ?? "N/A"}%
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}