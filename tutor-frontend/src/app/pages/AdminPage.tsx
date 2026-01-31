import { useState } from "react";
import {
  Users,
  GraduationCap,
  Star,
  TrendingUp,
  Ban,
  CheckCircle,
  XCircle,
  Search,
  MoreVertical,
} from "lucide-react";
import { mockProfiles } from "../data/mockData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<
    "overview" | "users" | "reviews"
  >("overview");

  // Calculate statistics
  const totalUsers = mockProfiles.length;
  const students = mockProfiles.filter((p) => p.type === "student").length;
  const teachers = mockProfiles.filter((p) => p.type === "teacher").length;
  const averageRating = (
    mockProfiles.reduce((sum, p) => sum + p.rating, 0) / totalUsers
  ).toFixed(1);
  const totalReviews = mockProfiles.reduce((sum, p) => sum + p.reviewCount, 0);

  const filteredProfiles = mockProfiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-slate-600">
          Manage users, reviews, and platform settings
        </p>
      </div>

      {/* Stats Cards */}
      {selectedTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-indigo-600" />
              </div>
              <TrendingUp className="size-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {totalUsers}
            </h3>
            <p className="text-sm text-slate-600">Total Users</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="size-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {students}
            </h3>
            <p className="text-sm text-slate-600">Students</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {teachers}
            </h3>
            <p className="text-sm text-slate-600">Teachers</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Star className="size-6 text-amber-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {averageRating}
            </h3>
            <p className="text-sm text-slate-600">
              Avg Rating ({totalReviews} reviews)
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-slate-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setSelectedTab("overview")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === "overview"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedTab("users")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === "users"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              User Management
            </button>
            <button
              onClick={() => setSelectedTab("reviews")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === "reviews"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Overview Tab */}
      {selectedTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                <div className="size-2 bg-green-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-slate-900">
                    New user registration
                  </p>
                  <p className="text-xs text-slate-500">
                    Emma Johnson joined as a student
                  </p>
                  <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                <div className="size-2 bg-blue-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-slate-900">New review posted</p>
                  <p className="text-xs text-slate-500">
                    Smith Family rated Dr. Amanda Lee 5 stars
                  </p>
                  <p className="text-xs text-slate-400 mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                <div className="size-2 bg-purple-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-slate-900">Profile updated</p>
                  <p className="text-xs text-slate-500">
                    Michael Chen updated his skills
                  </p>
                  <p className="text-xs text-slate-400 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Rated Users */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Top Rated Users
            </h2>
            <div className="space-y-3">
              {mockProfiles
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 5)
                .map((profile) => (
                  <div
                    key={profile.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <ImageWithFallback
                        src={profile.avatar}
                        alt={profile.name}
                        className="size-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {profile.name}
                        </p>
                        <p className="text-xs text-slate-500 capitalize">
                          {profile.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="size-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium text-slate-900">
                        {profile.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* User Management Tab */}
      {selectedTab === "users" && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          {/* Search */}
          <div className="p-6 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search users by name or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Reviews
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredProfiles.map((profile) => (
                  <tr key={profile.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <ImageWithFallback
                          src={profile.avatar}
                          alt={profile.name}
                          className="size-10 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900">
                            {profile.name}
                          </div>
                          <div className="text-sm text-slate-500">
                            {profile.skills[0]}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          profile.type === "student"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {profile.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="size-4 fill-amber-400 text-amber-400 mr-1" />
                        <span className="text-sm text-slate-900">
                          {profile.rating.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {profile.reviewCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="size-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reviews Tab */}
      {selectedTab === "reviews" && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Recent Reviews
            </h2>
            <div className="space-y-4">
              {mockProfiles
                .flatMap((profile) =>
                  (profile.reviews || []).map((review) => ({
                    ...review,
                    profileName: profile.name,
                    profileAvatar: profile.avatar,
                  })),
                )
                .slice(0, 10)
                .map((review) => (
                  <div
                    key={review.id}
                    className="border border-slate-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <ImageWithFallback
                          src={review.profileAvatar}
                          alt={review.profileName}
                          className="size-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {review.familyName}
                          </p>
                          <p className="text-xs text-slate-500">
                            reviewed {review.profileName}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <CheckCircle className="size-5" />
                        </button>
                        <button
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <XCircle className="size-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-600 ml-2">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{review.comment}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
