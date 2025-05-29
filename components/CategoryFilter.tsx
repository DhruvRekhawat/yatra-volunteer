"use client"

import type { FilterCategory } from "@/types"

interface CategoryFilterProps {
  categories: FilterCategory[]
  onCategoryChange: (categoryId: string) => void
}

export default function CategoryFilter({ categories, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex flex-col items-center min-w-4 pb-2 ${
                  category.isActive ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <div className="w-8 h-8 mb-1 flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>

          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 ml-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
              />
            </svg>
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>
      </div>
    </div>
  )
}
