import { useState } from "react";
import { User, Mail, Phone, MapPin, Bell, Lock, Globe, Save, Camera } from "lucide-react";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState<"profile" | "account" | "notifications" | "privacy">("profile");
  
  // Mock user data
  const [userData, setUserData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Parent of two wonderful children. Looking for quality educational opportunities and tutoring services.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    newMessages: true,
    newReviews: false,
    weeklyDigest: true,
    promotions: false
  });

  const handleSaveProfile = () => {
    // Simulate saving
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Profile</h1>
        <p className="text-slate-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "profile"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <User className="size-5" />
                <span>Profile Info</span>
              </button>
              <button
                onClick={() => setActiveTab("account")}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "account"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Lock className="size-5" />
                <span>Account</span>
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "notifications"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Bell className="size-5" />
                <span>Notifications</span>
              </button>
              <button
                onClick={() => setActiveTab("privacy")}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "privacy"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Globe className="size-5" />
                <span>Privacy</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Profile Info Tab */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Profile Information</h2>
              
              {/* Avatar */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-900 mb-3">Profile Photo</label>
                <div className="flex items-center space-x-4">
                  <img
                    src={userData.avatar}
                    alt="Profile"
                    className="size-20 rounded-full object-cover"
                  />
                  <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                    <Camera className="size-4" />
                    <span className="text-sm font-medium">Change Photo</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={userData.firstName}
                      onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={userData.lastName}
                      onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    <Mail className="size-4 inline mr-1" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                    <Phone className="size-4 inline mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={userData.phone}
                    onChange={(e) => setUserData({...userData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-900 mb-2">
                    <MapPin className="size-4 inline mr-1" />
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={userData.location}
                    onChange={(e) => setUserData({...userData, location: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-slate-900 mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={4}
                    value={userData.bio}
                    onChange={(e) => setUserData({...userData, bio: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleSaveProfile}
                    className="flex items-center space-x-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Save className="size-4" />
                    <span className="font-medium">Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                {/* Change Password */}
                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-3">Change Password</h3>
                  <div className="space-y-3">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-slate-600 mt-1">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
                      Enable
                    </button>
                  </div>
                </div>

                {/* Delete Account */}
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-medium text-red-600 mb-2">Danger Zone</h3>
                  <p className="text-sm text-slate-600 mb-3">Once you delete your account, there is no going back.</p>
                  <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-slate-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {key === 'emailNotifications' && 'Receive email notifications for important updates'}
                        {key === 'newMessages' && 'Get notified when you receive new messages'}
                        {key === 'newReviews' && 'Notifications when someone leaves a review'}
                        {key === 'weeklyDigest' && 'Weekly summary of platform activity'}
                        {key === 'promotions' && 'Promotional offers and announcements'}
                      </p>
                    </div>
                    <button
                      onClick={() => setNotifications({...notifications, [key]: !value})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? 'bg-indigo-600' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-6">
                <button className="flex items-center space-x-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <Save className="size-4" />
                  <span className="font-medium">Save Preferences</span>
                </button>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === "privacy" && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Privacy Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-3">Profile Visibility</h3>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>Public - Anyone can see my profile</option>
                    <option>Private - Only connections can see my profile</option>
                    <option>Hidden - Profile is not searchable</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-3">Show Online Status</h3>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="onlineStatus" className="size-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" defaultChecked />
                    <label htmlFor="onlineStatus" className="text-sm text-slate-700">Let others see when I'm online</label>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-3">Data Sharing</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="analytics" className="size-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
                      <label htmlFor="analytics" className="text-sm text-slate-700">Share usage data for analytics</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="personalization" className="size-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" defaultChecked />
                      <label htmlFor="personalization" className="text-sm text-slate-700">Allow personalized recommendations</label>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-medium text-slate-900 mb-3">Download Your Data</h3>
                  <p className="text-sm text-slate-600 mb-3">Request a copy of your personal data</p>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
                    Request Data Export
                  </button>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="flex items-center space-x-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Save className="size-4" />
                    <span className="font-medium">Save Settings</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
