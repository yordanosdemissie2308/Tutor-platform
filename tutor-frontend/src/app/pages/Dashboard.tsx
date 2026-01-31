import { useState } from "react";
import { Search } from "lucide-react";
import { mockProfiles } from "../data/mockData";
import ProfileCard from "../components/ProfileCard";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "student" | "teacher">(
    "all",
  );

  const filteredProfiles = mockProfiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      profile.bio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = filterType === "all" || profile.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Family Dashboard
        </h1>
        <p className="text-slate-600">
          Discover talented students and teachers in your community
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, skills, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterType === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType("student")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterType === "student"
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setFilterType("teacher")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterType === "teacher"
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
            }`}
          >
            Teachers
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-slate-600">
          {filteredProfiles.length}{" "}
          {filteredProfiles.length === 1 ? "result" : "results"} found
        </p>
      </div>

      {/* Profile Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProfiles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">
            No profiles found matching your search.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
