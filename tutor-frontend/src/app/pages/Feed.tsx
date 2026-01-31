import { useState, useEffect } from "react";
import CreatePostModal from "../components/CreatePostModal";
import PostCard from "../components/PostCard";
// ... (keep lucide imports)

export default function Feed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  // 1. Fetch Posts from Backend
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/posts?visibility=${visibilityFilter}`,
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [visibilityFilter]); // Refetch when filter changes

  // 2. Filter by Tag (Local filter for performance)
  const filteredPosts = posts.filter((post) => {
    return !tagFilter || post.tags.includes(tagFilter);
  });

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* ... keep the UI layout the same ... */}

      {/* Posts Section */}
      <div className="space-y-6">
        {loading ? (
          <div className="text-center py-10">Loading feed...</div>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="bg-white p-12 text-center rounded-xl border">
            No posts found.
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => {
          setIsCreatePostOpen(false);
          fetchPosts(); // Refresh feed after creating a post
        }}
      />
    </div>
  );
}
