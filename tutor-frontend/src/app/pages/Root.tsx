import { Outlet, Link } from "react-router";
import { Home, Users, Settings, Shield, Rss } from "lucide-react";

export default function Root() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="size-8 text-indigo-600" />
              <span className="text-xl font-semibold text-slate-900">FamilyConnect</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Home className="size-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
              <Link
                to="/feed"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Rss className="size-4" />
                <span className="hidden sm:inline">Feed</span>
              </Link>
              <Link
                to="/admin"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Shield className="size-4" />
                <span className="hidden sm:inline">Admin</span>
              </Link>
              <Link
                to="/my-profile"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Settings className="size-4" />
                <span className="hidden sm:inline">My Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}