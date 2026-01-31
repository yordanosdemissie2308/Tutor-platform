import {
  ArrowLeft,
  Star,
  Heart,
  MessageCircle,
  UserPlus,
  Award,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { useParams, Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import RatingsModal from "../components/RatingsModal";
import { mockProfiles } from "../data/mockData";

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const [isRatingsModalOpen, setIsRatingsModalOpen] = useState(false);

  const profile = mockProfiles.find((p) => p.id === id);

  if (!profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Profile not found
          </h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
          <div className="md:flex">
            {/* Avatar */}
            <div className="md:w-1/3">
              <ImageWithFallback
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    {profile.name}
                  </h1>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      profile.type === "student"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {profile.type === "student" ? "Student" : "Teacher"}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < Math.floor(profile.rating)
                          ? "fill-amber-400 text-amber-400"
                          : i < profile.rating
                            ? "fill-amber-200 text-amber-400"
                            : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  {profile.rating.toFixed(1)}
                </span>
                <span className="text-slate-600">
                  ({profile.reviewCount} reviews)
                </span>
              </div>

              {/* Bio */}
              <p className="text-slate-700 mb-6">{profile.bio}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors">
                  <Heart className="size-4" />
                  <span className="font-medium">Like</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <MessageCircle className="size-4" />
                  <span className="font-medium">Message</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <UserPlus className="size-4" />
                  <span className="font-medium">Connect</span>
                </button>
                <button
                  onClick={() => setIsRatingsModalOpen(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <Star className="size-4" />
                  <span className="font-medium">Leave Review</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            {profile.achievements && profile.achievements.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                  <Award className="size-5 text-amber-500" />
                  <span>Achievements</span>
                </h2>
                <ul className="space-y-3">
                  {profile.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="size-2 bg-indigo-600 rounded-full mt-2" />
                      <span className="text-slate-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reviews Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Reviews from Families
              </h2>
              {profile.reviews && profile.reviews.length > 0 ? (
                <div className="space-y-4">
                  {profile.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-slate-200 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-900">
                          {review.familyName}
                        </span>
                        <span className="text-sm text-slate-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
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
                      </div>
                      <p className="text-slate-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 text-center py-8">
                  No reviews yet. Be the first to leave a review!
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Get in Touch
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <Mail className="size-4" />
                  <span className="font-medium">Send Message</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                  <UserPlus className="size-4" />
                  <span className="font-medium">Request Connection</span>
                </button>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-medium text-slate-900 mb-3">
                  Profile Stats
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Rating</span>
                    <span className="text-sm font-medium text-slate-900">
                      {profile.rating.toFixed(1)}/5.0
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">
                      Total Reviews
                    </span>
                    <span className="text-sm font-medium text-slate-900">
                      {profile.reviewCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Skills</span>
                    <span className="text-sm font-medium text-slate-900">
                      {profile.skills.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Modal */}
      <RatingsModal
        isOpen={isRatingsModalOpen}
        onClose={() => setIsRatingsModalOpen(false)}
        profileName={profile.name}
      />
    </div>
  );
}
