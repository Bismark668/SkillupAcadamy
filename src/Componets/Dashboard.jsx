import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";

export default function Dashboard() {
    // Dummy data for dashboard
    const stats = {
        totalStudents: 1200,
        activeCourses: 5,
        completionRate: 75,
        enrollments: [
            { month: "Jan", students: 150 },
            { month: "Feb", students: 180 },
            { month: "Mar", students: 210 },
            { month: "Apr", students: 170 },
            { month: "May", students: 220 },
        ],
    };

  return (
     <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 text-center mt-8">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Students</h2>
          <p className="text-2xl text-blue-600">{stats.totalStudents}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Active Courses</h2>
          <p className="text-2xl text-blue-600">{stats.activeCourses}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Completion Rate</h2>
          <p className="text-2xl text-blue-600">{stats.completionRate}%</p>
        </div>
      </div>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Enrollment Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.enrollments}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="students" fill="#3182ce" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <nav className="mt-6 text-center">
        <Link to="/" className="text-blue-500">Back to Landing Page</Link>
      </nav>
    </div>
  )
}
