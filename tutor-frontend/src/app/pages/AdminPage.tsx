import { Users, GraduationCap, Ban, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
// ... (keep your lucide-react imports)

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]); // State for real backend data
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<
    "overview" | "users" | "reviews"
  >("overview");

  // 1. Fetch Data from NestJS
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Handle Approval Action
  const handleApproveTutor = async (userId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/admin/approve-tutor/${userId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        },
      );
      if (response.ok) {
        // Refresh data after approval
        fetchUsers();
        alert("Tutor Approved Successfully!");
      }
    } catch (error) {
      console.error("Error approving tutor:", error);
    }
  };

  // 3. Map Backend Data to Stats (Adjusting for your NestJS schema names)
  const stats = {
    total: users.length,
    families: users.filter((u) => u.role === "FAMILY").length,
    tutors: users.filter((u) => u.role === "TUTOR").length,
    pendingTutors: users.filter(
      (u) => u.role === "TUTOR" && !u.tutorProfile?.isApproved,
    ).length,
  };

  if (loading)
    return (
      <div className="p-10 text-center text-indigo-600 font-bold">
        Loading Dashboard...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Update your Stats Cards to use 'stats' object instead of mock data */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Users />} label="Total Users" value={stats.total} />
        <StatCard
          icon={<GraduationCap />}
          label="Families"
          value={stats.families}
        />
        <StatCard icon={<Users />} label="Tutors" value={stats.tutors} />
        <StatCard
          icon={<Ban />}
          label="Pending Approval"
          value={stats.pendingTutors}
          color="text-red-500"
        />
      </div>

      {/* User Table (Updated for NestJS structure) */}
      {selectedTab === "users" && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Role</th>
                <th className="p-4">Details</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${user.role === "TUTOR" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-500">
                    {user.role === "TUTOR"
                      ? user.tutorProfile?.subjects?.join(", ")
                      : user.familyProfile?.studentName}
                  </td>
                  <td className="p-4">
                    {user.role === "TUTOR" ? (
                      user.tutorProfile?.isApproved ? (
                        <span className="text-green-600 flex items-center gap-1">
                          <CheckCircle size={14} /> Approved
                        </span>
                      ) : (
                        <span className="text-amber-600 flex items-center gap-1">
                          <Ban size={14} /> Pending
                        </span>
                      )
                    ) : (
                      "Active"
                    )}
                  </td>
                  <td className="p-4 text-right">
                    {user.role === "TUTOR" &&
                      !user.tutorProfile?.isApproved && (
                        <button
                          onClick={() => handleApproveTutor(user.id)}
                          className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
                        >
                          Approve
                        </button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Simple internal helper component for stats
function StatCard({ icon, label, value, color = "text-indigo-600" }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div
        className={`size-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 ${color}`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-slate-500 text-sm">{label}</p>
    </div>
  );
}
