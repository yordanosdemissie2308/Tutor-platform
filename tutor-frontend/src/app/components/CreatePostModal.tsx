import { useState } from "react";
import { X, Image, Link as LinkIcon, Award, Eye, EyeOff, Users, GraduationCap, Globe } from "lucide-react";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [visibility, setVisibility] = useState<"public" | "tutors-only" | "students-only">("public");
  const [attachmentType, setAttachmentType] = useState<"none" | "image" | "link" | "certificate">("none");

  const suggestedTags = [
    "Learning", "Teaching", "Milestone", "Certification", 
    "Achievement", "Progress", "Workshop", "Course", 
    "Study", "Tutorial", "Project", "Skills"
  ];

  const handleAddTag = (tag: string) => {
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    if (!content.trim()) {
      alert("Please write something before posting!");
      return;
    }

    // Simulate post creation
    console.log({
      content,
      tags,
      visibility,
      attachmentType,
      timestamp: new Date().toISOString()
    });

    // Reset form
    setContent("");
    setTags([]);
    setTagInput("");
    setVisibility("public");
    setAttachmentType("none");
    
    alert("Post created successfully! 🎉");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-semibold text-slate-900">Create Post</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
              alt="Current user"
              className="size-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-slate-900">Your Name</p>
              <p className="text-sm text-slate-500">Share with the community</p>
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <textarea
              placeholder="What's on your mind? Share your learning progress, achievements, or teaching milestones..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            />
            <p className="text-xs text-slate-500 mt-1">
              {content.length}/500 characters
            </p>
          </div>

          {/* Attachment Options */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-3">Add to your post</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setAttachmentType(attachmentType === "image" ? "none" : "image")}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors ${
                  attachmentType === "image"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Image className="size-5" />
                <span className="text-sm font-medium">Image</span>
              </button>
              <button
                onClick={() => setAttachmentType(attachmentType === "link" ? "none" : "link")}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors ${
                  attachmentType === "link"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <LinkIcon className="size-5" />
                <span className="text-sm font-medium">Link</span>
              </button>
              <button
                onClick={() => setAttachmentType(attachmentType === "certificate" ? "none" : "certificate")}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors ${
                  attachmentType === "certificate"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Award className="size-5" />
                <span className="text-sm font-medium">Certificate</span>
              </button>
            </div>

            {/* Attachment Input */}
            {attachmentType === "image" && (
              <div className="mt-3">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
            )}
            {attachmentType === "link" && (
              <div className="mt-3">
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            )}
            {attachmentType === "certificate" && (
              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  placeholder="Certificate Title"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Issuing Organization"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-3">
              Add tags (up to 5)
            </label>
            
            {/* Tag Input */}
            <div className="flex space-x-2 mb-3">
              <input
                type="text"
                placeholder="Type a tag..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTag(tagInput);
                  }
                }}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                disabled={tags.length >= 5}
              />
              <button
                onClick={() => handleAddTag(tagInput)}
                disabled={tags.length >= 5}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                Add
              </button>
            </div>

            {/* Selected Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                  >
                    <span>#{tag}</span>
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-indigo-900"
                    >
                      <X className="size-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Suggested Tags */}
            <div>
              <p className="text-xs text-slate-500 mb-2">Suggested tags:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedTags
                  .filter(tag => !tags.includes(tag))
                  .slice(0, 8)
                  .map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleAddTag(tag)}
                      disabled={tags.length >= 5}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      #{tag}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Visibility */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-3">
              Who can see this post?
            </label>
            <div className="space-y-2">
              <button
                onClick={() => setVisibility("public")}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  visibility === "public"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Globe className="size-5 text-slate-600" />
                  <div className="text-left">
                    <p className="font-medium text-slate-900">Public</p>
                    <p className="text-xs text-slate-500">Anyone can see this post</p>
                  </div>
                </div>
                {visibility === "public" && (
                  <div className="size-5 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="size-2 bg-white rounded-full" />
                  </div>
                )}
              </button>

              <button
                onClick={() => setVisibility("tutors-only")}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  visibility === "tutors-only"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Users className="size-5 text-slate-600" />
                  <div className="text-left">
                    <p className="font-medium text-slate-900">Tutors Only</p>
                    <p className="text-xs text-slate-500">Only teachers can see this</p>
                  </div>
                </div>
                {visibility === "tutors-only" && (
                  <div className="size-5 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="size-2 bg-white rounded-full" />
                  </div>
                )}
              </button>

              <button
                onClick={() => setVisibility("students-only")}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  visibility === "students-only"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <GraduationCap className="size-5 text-slate-600" />
                  <div className="text-left">
                    <p className="font-medium text-slate-900">Students Only</p>
                    <p className="text-xs text-slate-500">Only students can see this</p>
                  </div>
                </div>
                {visibility === "students-only" && (
                  <div className="size-5 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="size-2 bg-white rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end space-x-3 sticky bottom-0">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
