import { Link } from "react-router";
import { Star, Heart, MessageCircle, UserPlus } from "lucide-react";
import type { Profile } from "../data/mockData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Avatar and Type Badge */}
      <div className="relative">
        <ImageWithFallback
          src={profile.avatar}
          alt={profile.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              profile.type === "student"
                ? "bg-blue-100 text-blue-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {profile.type === "student" ? "Student" : "Teacher"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name and Rating */}
        <div className="mb-3">
          <Link
            to={`/profile/${profile.id}`}
            className="hover:text-indigo-600 transition-colors"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              {profile.name}
            </h3>
          </Link>
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < Math.floor(profile.rating)
                      ? "fill-amber-400 text-amber-400"
                      : i < profile.rating
                        ? "fill-amber-200 text-amber-400"
                        : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-slate-600">
              {profile.rating.toFixed(1)} ({profile.reviewCount})
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {profile.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {profile.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button
            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors"
            title="Like"
          >
            <Heart className="size-4" />
            <span className="text-sm font-medium">Like</span>
          </button>
          <button
            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            title="Message"
          >
            <MessageCircle className="size-4" />
            <span className="text-sm font-medium">Message</span>
          </button>
          <button
            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            title="Interested"
          >
            <UserPlus className="size-4" />
            <span className="text-sm font-medium">Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}
