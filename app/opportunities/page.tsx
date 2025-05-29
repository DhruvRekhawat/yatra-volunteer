"use client"

import CategoryFilter from "@/components/CategoryFilter"
import Header from "@/components/Header"
import MobileBottomNav from "@/components/MobileBottomNav"
import OpportunityCard from "@/components/OpportunityCard"
import SearchBar from "@/components/SearchBar"
import { mockCategories } from "@/data/mock-filters"
import { mockOpportunities } from "@/data/mock-oppurtunities"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"



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
