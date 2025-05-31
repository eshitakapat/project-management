// app/admin/page.tsx

export default function MemberDashboardPage() {
  return (
    <div className="pl-2 py-8">
      <h2 className="text-3xl font-bold mb-2 pt-10 ">Welcome back, Member User</h2>
      <p className="text-gray-400 mb-6">
        View and work on your assigned projects
      </p>
      {/* Your dashboard stats and other content go here */}

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-[#4d4d53] border border-gray-600 rounded-lg p-6">
          <div className="text-white text-sm font-semibold mb-2">Total Projects</div>
          <div className="text-white text-2xl font-bold">12</div>
          <div className="text-white text-xs">Across All Domain</div>
        </div>

        

        

        

        
        
      </div>
      <div>
          <h2 className="text-2xl font-bold mb-2 pt-10">Your Domains </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-lg border border-gray-600">
            <div className="bg-blue-700 rounded-t-lg p-4 flex items-center gap-2">
              <span className="text-2xl mr-2">{"</>"}</span>
              <span className="text-white text-lg font-bold">Web Development</span>

            </div>
            <div className="p-6 bg-[#4d4d53] rounded-b-lg">
              <div className="text-white mb-4 flex justify-center">Acess Projects and Resources in Web</div>
              <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded flex items-center gap-2 w-full justify-center">View Domain
                <span>→</span>
              </button>
            </div>

          </div>

          

          

        </div>

    </div>
  );
}
