"use client";

import { useEffect, useState } from "react";
import CollegeCard from "../components/CollegeCard";
import Navbar from "../components/Navbar";


type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function Home() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [maxFees, setMaxFees] = useState("");
  const [selectedColleges, setSelectedColleges] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedColleges((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : prev.length < 3
          ? [...prev, id]
          : prev
    );
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-db`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const filtered = colleges.filter((college) => {
    return (
      college.name.toLowerCase().includes(search.toLowerCase()) &&
      college.location.toLowerCase().includes(location.toLowerCase()) &&
      (maxFees === "" || college.fees <= Number(maxFees))
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search college..."
            className="p-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="text"
            placeholder="Filter by location..."
            className="p-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Fees"
            className="p-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={maxFees}
            onChange={(e) => setMaxFees(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
          onClick={() => {
            const selected = colleges.filter((c) =>
              selectedColleges.includes(c.id)
            );
            localStorage.setItem("compare", JSON.stringify(selected));
            window.location.href = "/compare";
          }}
        >
          Compare Selected ({selectedColleges.length})
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              selected={selectedColleges.includes(college.id)}
              onSelect={toggleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}