import { useState } from "react";
import { X, Star } from "lucide-react";

interface RatingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileName: string;
}

export default function RatingsModal({ isOpen, onClose, profileName }: RatingsModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [familyName, setFamilyName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0 || !familyName.trim() || !comment.trim()) {
      alert("Please fill in all fields and select a rating.");
      return;
    }

    // Simulate submission
    console.log({
      rating,
      familyName,
      comment,
      profileName,
      date: new Date().toISOString()
    });

    setSubmitted(true);
    
    // Reset and close after showing success message
    setTimeout(() => {
      setRating(0);
      setFamilyName("");
      setComment("");
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    if (!submitted) {
      setRating(0);
      setFamilyName("");
      setComment("");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">
            {submitted ? "Thank You!" : "Leave a Review"}
          </h2>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="size-8 text-green-600 fill-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Review Submitted!</h3>
              <p className="text-slate-600">Thank you for sharing your feedback.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Info */}
              <div>
                <p className="text-sm text-slate-600 mb-1">Reviewing</p>
                <p className="text-lg font-medium text-slate-900">{profileName}</p>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`size-10 ${
                          star <= (hoveredRating || rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-sm text-slate-600 mt-2">
                    You selected {rating} star{rating !== 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Family Name */}
              <div>
                <label htmlFor="familyName" className="block text-sm font-medium text-slate-900 mb-2">
                  Family Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="familyName"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  placeholder="Enter your family name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Comment */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-slate-900 mb-2">
                  Your Review <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience..."
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  required
                />
                <p className="text-xs text-slate-500 mt-1">
                  {comment.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
