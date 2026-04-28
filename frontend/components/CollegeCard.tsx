"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function CollegeCard({
  college,
  selected,
  onSelect,
}: {
  college: College;
  selected: boolean;
  onSelect: (id: number) => void;
}) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  // 🔁 Load saved state (user-specific)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user) return;

    const key = `saved_${user.email}`;
    const savedList = JSON.parse(localStorage.getItem(key) || "[]");

    setSaved(savedList.includes(college.id));
  }, [college.id]);

  // ❤️ Toggle Save
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();

    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
      alert("Please login first");
      return;
    }

    const key = `saved_${user.email}`;
    const savedList = JSON.parse(localStorage.getItem(key) || "[]");

    if (savedList.includes(college.id)) {
      const updated = savedList.filter((id: number) => id !== college.id);
      localStorage.setItem(key, JSON.stringify(updated));
      setSaved(false);
    } else {
      savedList.push(college.id);
      localStorage.setItem(key, JSON.stringify(savedList));
      setSaved(true);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 relative">

      {/* Checkbox (Compare) */}
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(college.id)}
        className="absolute top-3 right-3 cursor-pointer"
      />

      {/* College Info */}
      <h2 className="text-xl font-semibold text-black">
        {college.name}
      </h2>

      <p className="text-gray-700">{college.location}</p>

      <p className="mt-2">💰 Fees: ₹{college.fees}</p>

      <p>⭐ Rating: {college.rating}</p>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-3">

        {/* View Details */}
        <button
          onClick={() => router.push(`/colleges/${college.id}`)}
          className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          View Details →
        </button>

        {/* Save */}
        <button
          onClick={handleSave}
          className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          {saved ? "❤️ Saved" : "🤍 Save"}
        </button>
      </div>

      {/* Optional badge */}
      {saved && (
        <div className="text-green-600 text-xs mt-1">
          Saved
        </div>
      )}
    </div>
  );
}