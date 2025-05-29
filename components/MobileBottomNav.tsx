import { Home, Users, Plus, User } from "lucide-react"

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around py-2">
        <button className="flex flex-col items-center py-2 px-4 text-orange-500">
          <Home className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button className="flex flex-col items-center py-2 px-4 text-gray-400">
          <Users className="w-5 h-5 mb-1" />
          <span className="text-xs">Community</span>
        </button>

        <button className="flex flex-col items-center py-2 px-4 text-gray-400">
          <Plus className="w-5 h-5 mb-1" />
          <span className="text-xs">New Opportunity</span>
        </button>

        <button className="flex flex-col items-center py-2 px-4 text-gray-400">
          <User className="w-5 h-5 mb-1" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  )
}
