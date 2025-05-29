"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("Mcleodganj, Himachal Pradesh")
  const [role, setRole] = useState("Content Creator")
  const [dates, setDates] = useState("24 Sep 2024 - 12 Oct 2024")

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm)
    }
  }

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchTerm)
    }
  }

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-full shadow-sm border border-gray-200 p-2">
          <div className="flex items-center">
            {/* Mobile search */}
            <form onSubmit={handleMobileSearch} className="md:hidden flex-1 flex items-center px-4 py-2">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Start Your Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-gray-900 placeholder-gray-500"
              />
            </form>

            {/* Desktop search */}
            <div className="hidden md:flex flex-1 items-center divide-x divide-gray-200">
              <div className="flex-1 px-6 py-2">
                <div className="text-xs font-medium text-gray-500 mb-1">Where?</div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-sm text-gray-900 outline-none w-full"
                />
              </div>
              <div className="flex-1 px-6 py-2">
                <div className="text-xs font-medium text-gray-500 mb-1">What?</div>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-sm text-gray-900 outline-none w-full"
                />
              </div>
              <div className="flex-1 px-6 py-2">
                <div className="text-xs font-medium text-gray-500 mb-1">When?</div>
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="text-sm text-gray-900 outline-none w-full"
                />
              </div>
            </div>

            <Button size="icon" className="bg-teal-600 hover:bg-teal-700 rounded-full" onClick={handleSearch}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
