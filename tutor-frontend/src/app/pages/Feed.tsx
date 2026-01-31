import { useState } from "react";
import { Filter, Plus } from "lucide-react";
import { mockPosts } from "../data/mockPosts";
import PostCard from "../components/PostCard";
import CreatePostModal from "..//components/CreatePostModal";

export default function Feed() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState<
    "all" | "public" | "tutors-only" | "students-only"
  >("all");
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(mockPosts.flatMap((post) => post.tags)));

  // Filter posts
  const filteredPosts = mockPosts.filter((post) => {
    const matchesVisibility =
      visibilityFilter === "all" || post.visibility === visibilityFilter;
    const matchesTag = !tagFilter || post.tags.includes(tagFilter);
    return matchesVisibility && matchesTag;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Community Feed
              </h1>
              <p className="text-slate-600 mt-1">
                Share your learning journey and celebrate achievements
              </p>
            </div>
          </div>

          {/* Create Post Button */}
          <button
            onClick={() => setIsCreatePostOpen(true)}
            className="w-full flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="size-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Plus className="size-5 text-indigo-600" />
            </div>
            <span className="text-slate-600">
              Share your progress or achievement...
            </span>
          </button>

          {/* Filter Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Filter className="size-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-900">
                Filters
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setVisibilityFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  visibilityFilter === "all"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Posts
              </button>
              <button
                onClick={() => setVisibilityFilter("public")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  visibilityFilter === "public"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Public
              </button>
              <button
                onClick={() => setVisibilityFilter("tutors-only")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  visibilityFilter === "tutors-only"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Tutors Only
              </button>
              <button
                onClick={() => setVisibilityFilter("students-only")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  visibilityFilter === "students-only"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Students Only
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <p className="text-slate-500 text-lg">
                  No posts found matching your filters.
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Try adjusting your filters or create a new post!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Trending Tags */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Trending Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 12).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setTagFilter(tagFilter === tag ? null : tag)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    tagFilter === tag
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            {tagFilter && (
              <button
                onClick={() => setTagFilter(null)}
                className="w-full mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Community Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Community Stats
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Posts</span>
                <span className="text-sm font-semibold text-slate-900">
                  {mockPosts.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Active Today</span>
                <span className="text-sm font-semibold text-slate-900">
                  {
                    mockPosts.filter((p) => {
                      const postDate = new Date(p.timestamp);
                      const today = new Date();
                      return postDate.toDateString() === today.toDateString();
                    }).length
                  }
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Engagement</span>
                <span className="text-sm font-semibold text-slate-900">
                  {mockPosts.reduce(
                    (sum, p) => sum + p.likes + p.comments.length + p.shares,
                    0,
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              📚 Post Ideas
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Share your latest course completion</li>
              <li>• Celebrate teaching milestones</li>
              <li>• Post study tips and resources</li>
              <li>• Announce upcoming workshops</li>
              <li>• Share certification achievements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
      />
    </div>
  );
}
