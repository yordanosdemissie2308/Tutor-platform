import { useState } from "react";
import { Link } from "react-router";
import {
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  MoreHorizontal,
  Award,
} from "lucide-react";
import type { Post } from "../data/mockPosts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.likedByCurrentUser);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      console.log("New comment:", newComment);
      setNewComment("");
      setShowComments(true);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3">
            <Link to={`/profile/${post.userId}`}>
              <ImageWithFallback
                src={post.userAvatar}
                alt={post.userName}
                className="size-12 rounded-full object-cover"
              />
            </Link>
            <div>
              <div className="flex items-center space-x-2">
                <Link
                  to={`/profile/${post.userId}`}
                  className="font-semibold text-slate-900 hover:text-indigo-600"
                >
                  {post.userName}
                </Link>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    post.userRole === "student"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {post.userRole === "student" ? "Student" : "Teacher"}
                </span>
                {post.achievement && (
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium flex items-center space-x-1">
                    <span>{post.achievement.badge}</span>
                    <span>{post.achievement.title}</span>
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-500 mt-1">
                <span>{post.userSkills.slice(0, 2).join(", ")}</span>
                <span>•</span>
                <span>{formatTimestamp(post.timestamp)}</span>
                <span>•</span>
                <span className="capitalize">
                  {post.visibility.replace("-", " ")}
                </span>
              </div>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <MoreHorizontal className="size-5" />
          </button>
        </div>

        {/* Content */}
        <p className="text-slate-800 whitespace-pre-wrap mb-4">
          {post.content}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-indigo-600 hover:text-indigo-700 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Images */}
        {post.images && post.images.length > 0 && (
          <div
            className={`grid gap-2 mb-4 ${
              post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {post.images.map((image, index) => (
              <ImageWithFallback
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {/* Certificate */}
        {post.certificate && (
          <div className="mb-4 border border-slate-200 rounded-lg p-4 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="flex items-start space-x-3">
              <Award className="size-8 text-amber-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {post.certificate.title}
                </h4>
                <p className="text-sm text-slate-600">
                  Issued by {post.certificate.issuer}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Link Preview */}
        {post.link && (
          <a
            href={post.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-slate-200 rounded-lg p-4 mb-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {post.link.title}
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  {post.link.description}
                </p>
                <p className="text-xs text-indigo-600 flex items-center space-x-1">
                  <ExternalLink className="size-3" />
                  <span>Visit link</span>
                </p>
              </div>
            </div>
          </a>
        )}

        {/* Engagement Stats */}
        <div className="flex items-center space-x-4 text-sm text-slate-600 pt-3 border-t border-slate-200">
          <span>
            {likesCount} {likesCount === 1 ? "like" : "likes"}
          </span>
          <span>
            {post.comments.length}{" "}
            {post.comments.length === 1 ? "comment" : "comments"}
          </span>
          <span>
            {post.shares} {post.shares === 1 ? "share" : "shares"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-3 border-t border-slate-200 flex items-center justify-around">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            isLiked
              ? "text-pink-600 bg-pink-50"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Heart className={`size-5 ${isLiked ? "fill-pink-600" : ""}`} />
          <span className="font-medium text-sm">Like</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <MessageCircle className="size-5" />
          <span className="font-medium text-sm">Comment</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <Share2 className="size-5" />
          <span className="font-medium text-sm">Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
          {/* Add Comment */}
          <div className="flex items-start space-x-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
              alt="Current user"
              className="size-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleComment()}
                className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Existing Comments */}
          {post.comments.length > 0 && (
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-3">
                  <ImageWithFallback
                    src={comment.userAvatar}
                    alt={comment.userName}
                    className="size-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="bg-white rounded-lg px-4 py-2 border border-slate-200">
                      <p className="font-medium text-sm text-slate-900">
                        {comment.userName}
                      </p>
                      <p className="text-sm text-slate-700 mt-1">
                        {comment.content}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-1 px-2">
                      <button className="text-xs text-slate-500 hover:text-indigo-600 font-medium">
                        Like
                      </button>
                      <button className="text-xs text-slate-500 hover:text-indigo-600 font-medium">
                        Reply
                      </button>
                      <span className="text-xs text-slate-400">
                        {formatTimestamp(comment.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
