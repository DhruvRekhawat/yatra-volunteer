"use client"

import Image from "next/image"
import { Heart, MapPin } from "lucide-react"
import type { Opportunity } from "@/types"

interface OpportunityCardProps {
  opportunity: Opportunity
  onToggleFavorite: (id: string) => void
}

export default function OpportunityCard({ opportunity, onToggleFavorite }: OpportunityCardProps) {
  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-80">
          <Image src={opportunity.image || "/placeholder.svg"} alt={opportunity.title} fill className="object-cover" />

          {opportunity.isNew && (
            <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
              NEW
            </div>
          )}

          <button
            onClick={() => onToggleFavorite(opportunity.id)}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
          >
            <Heart className={`w-4 h-4 ${opportunity.isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>

          {/* Glass effect overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-4">
            <div className="text-white">
              <div className="flex items-center text-orange-400 text-sm mb-2">
                <MapPin className="w-3 h-3 mr-1" />
                {opportunity.location}
              </div>

              <h3 className="font-medium text-white mb-3 line-clamp-2">{opportunity.title}</h3>

              <div className="text-sm text-gray-200 mb-3">
                <div>{opportunity.duration}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <span>{opportunity.workType}</span>
                  <span>•</span>
                  <span>{opportunity.amenities.join(" • ")}</span>
                </div>
              </div>

              <div className="flex items-center text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-200">Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
          <Image
            src={opportunity.image || "/placeholder.svg"}
            alt={opportunity.title}
            width={400}
            height={240}
            className="w-full h-48 object-cover"
          />

          {opportunity.isNew && (
            <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
              NEW
            </div>
          )}

          <button
            onClick={() => onToggleFavorite(opportunity.id)}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
          >
            <Heart className={`w-4 h-4 ${opportunity.isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center text-orange-500 text-sm mb-2">
            <MapPin className="w-3 h-3 mr-1" />
            {opportunity.location}
          </div>

          <h3 className="font-medium text-gray-900 mb-3 line-clamp-2">{opportunity.title}</h3>

          <div className="text-sm text-gray-600 mb-3">
            <div>{opportunity.duration}</div>
            <div className="flex items-center space-x-2 mt-1">
              <span>{opportunity.workType}</span>
              <span>•</span>
              <span>{opportunity.amenities.join(" • ")}</span>
            </div>
          </div>

          <div className="flex items-center text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Sustainability</span>
          </div>
        </div>
      </div>
    </>
  )
}
