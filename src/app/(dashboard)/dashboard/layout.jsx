

export default function DashboardLayout({children, analytics, notifications,}) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard Home</h1>

      <div className="mt-4">
        {/* Content for the main dashboard page */}
        {children}
        {analytics}
        {notifications}
      </div>
    </div>
  )
}
