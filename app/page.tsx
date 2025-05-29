"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import CategoryFilter from "@/components/CategoryFilter"
import OpportunityCard from "@/components/OpportunityCard"
import MobileBottomNav from "@/components/MobileBottomNav"
import type { Opportunity, FilterCategory } from "@/types"

const mockCategories: FilterCategory[] = [
  { id: "sustainability", name: "Sustainability", icon: "🌱", isActive: true },
  { id: "homestay", name: "Homestay", icon: "🏠", isActive: false },
  { id: "school", name: "School", icon: "🏫", isActive: false },
  { id: "ashram", name: "Ashram", icon: "🕉️", isActive: false },
  { id: "treehouses", name: "Treehouses", icon: "🌳", isActive: false },
  { id: "domes", name: "Domes", icon: "⛺", isActive: false },
  { id: "farms", name: "Farms", icon: "🚜", isActive: false },
]

const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Volunteer In Nainital as Content Writer/ Support Manager",
    location: "Himachal Pradesh",
    image: "/images/image(1).jpg",
    duration: "20+/week",
    workType: "Kitchen Hand",
    amenities: ["Bartending"],
    isNew: true,
    isFavorited: false,
    tags: ["sustainability"],
  },
  {
    id: "2",
    title: "Volunteer In Uttarkashi as Web Developer",
    location: "Himachal Pradesh",
    image: "/images/image(2).jpg",
    duration: "15+/week",
    workType: "Web Development",
    amenities: ["WiFi", "Meals"],
    isNew: true,
    isFavorited: false,
    tags: ["sustainability"],
  },
  {
    id: "3",
    title: "Teaching Assistant at Mountain School",
    location: "Himachal Pradesh",
    image: "/images/image(3).jpg",
    duration: "25+/week",
    workType: "Teaching",
    amenities: ["Accommodation"],
    isNew: false,
    isFavorited: false,
    tags: ["school"],
  },
  {
    id: "4",
    title: "Yoga Instructor at Ashram",
    location: "Rishikesh",
    image: "/images/image(4).jpg",
    duration: "30+/week",
    workType: "Yoga Teaching",
    amenities: ["Meals", "Accommodation"],
    isNew: true,
    isFavorited: false,
    tags: ["ashram"],
  },
  {
    id: "5",
    title: "Farm Helper in Organic Farm",
    location: "Kerala",
    image: "/images/image(5).jpg",
    duration: "40+/week",
    workType: "Farming",
    amenities: ["Organic Meals"],
    isNew: false,
    isFavorited: false,
    tags: ["farms"],
  },
  {
    id: "6",
    title: "Treehouse Maintenance Volunteer",
    location: "Goa",
    image: "/images/image(6).jpg",
    duration: "20+/week",
    workType: "Maintenance",
    amenities: ["Unique Stay"],
    isNew: true,
    isFavorited: false,
    tags: ["treehouses"],
  },
  {
    id: "7",
    title: "Homestay Host Assistant",
    location: "Rajasthan",
    image: "/images/image(7).jpg",
    duration: "25+/week",
    workType: "Hospitality",
    amenities: ["Cultural Exchange"],
    isNew: false,
    isFavorited: false,
    tags: ["homestay"],
  },
  {
    id: "8",
    title: "Dome Construction Helper",
    location: "Auroville",
    image: "/images/image(1).jpg",
    duration: "35+/week",
    workType: "Construction",
    amenities: ["Skills Training"],
    isNew: true,
    isFavorited: false,
    tags: ["domes"],
  },
]

export default function OpportunitiesPage() {
  const router = useRouter()
  const [categories, setCategories] = useState(mockCategories)
  const [opportunities, setOpportunities] = useState(mockOpportunities)
  const [searchTerm, setSearchTerm] = useState("")

  const activeCategory = categories.find((cat) => cat.isActive)?.id || "sustainability"

  const filteredOpportunities = useMemo(() => {
    let filtered = opportunities

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((opp) => opp.tags.includes(activeCategory))
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (opp) =>
          opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opp.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opp.workType.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return filtered
  }, [opportunities, activeCategory, searchTerm])

  const handleCategoryChange = (categoryId: string) => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        isActive: cat.id === categoryId,
      })),
    )
  }

  const handleToggleFavorite = (opportunityId: string) => {
    setOpportunities((prev) =>
      prev.map((opp) => (opp.id === opportunityId ? { ...opp, isFavorited: !opp.isFavorited } : opp)),
    )
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleCardClick = (opportunityId: string) => {
    router.push(`/opportunities/${opportunityId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categories} onCategoryChange={handleCategoryChange} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
        {filteredOpportunities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No opportunities found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} onClick={() => handleCardClick(opportunity.id)} className="cursor-pointer">
                <OpportunityCard opportunity={opportunity} onToggleFavorite={handleToggleFavorite} />
              </div>
            ))}
          </div>
        )}
      </main>

      <MobileBottomNav />
    </div>
  )
}
