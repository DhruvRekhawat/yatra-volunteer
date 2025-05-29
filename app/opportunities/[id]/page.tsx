"use client"

import { useState, useEffect, SetStateAction } from "react"
import { ArrowLeft, Share, Heart, Star, MapPin, Users, Building, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Mock data for the opportunity detail
const mockOpportunityDetail = {
  id: "1",
  title: "Volunteer In Uttarkashi",
  location: "Himachal Pradesh",
  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  stayAtLeast: "4 Week/s",
  stayUpTo: "4 Week/s",
  skillsRequired: [
    "UI/UX",
    "Content Creation",
    "UI/UX",
    "Content Creation",
    "UI/UX",
    "UI/UX",
    "Content Creation",
    "UI/UX",
    "Content Creation",
    "UI/UX",
  ],
  description: `We Expect Videographers To Capture Every Aspect Of Our Property, From Daily Activities To The Surrounding Tourist Attractions, Events, And Nightlife. Their Role Is To Create Engaging And High-Quality Content That Reflects The True Experience Of Staying At Our Place. This Includes Filming Not Just Within The Property But Also Exploring The Diverse Visitors A Complete Picture Of What To Expect.

For Salespersons, Strong English Communication Skills Are Essential. We Need Individuals Who Can Confidently Interact With Guests, Explain Services, And Effectively Handle Inquiries.

Our Expectation From A Web Developer Is Expertise In Website Development And SEO.

We're Seeking Someone Who Is Proactive, Adaptable, And Enthusiastic About Creating Memorable Experiences. If You're Passionate About Nature, Hospitality, And Community, You'll Find A Rewarding Opportunity Here.`,
  whatYouGet: [
    { icon: "🏠", title: "Team Dorm", description: "" },
    { icon: "🍽️", title: "3 Meals/Day", description: "" },
    { icon: "🏍️", title: "Motor Bikes", description: "" },
    { icon: "🎯", title: "Free Tours, Free Events, Internet Access", description: "" },
    { icon: "📅", title: "1 Days Off", description: "" },
  ],
  aboutExperience: `I'm Looking For A Dedicated Volunteer To Join Us, Who Can Enhance Our Guest Relations And Support Property Operations. Ideally, This Person Should Have A Warm And Welcoming Demeanor, Ensuring That Every Guest Feels Valued And At Home In Our Serene Setting.

Your Role Will Involve Engaging With Guests, Assisting With Check-ins, And Providing Them With Information About The Area And Activities Available. We Hope You Can Create A Positive Atmosphere By Fostering Connections Among Guests And Encouraging Them To Share Their Experiences.

Additionally, Your Support In Day-To-Day Operations Will Be Invaluable. Whether It's Helping With Maintenance Tasks, Organizing Events, Or Keeping Communal Spaces Inviting, Your Contributions Will Help Us Maintain The Property's Charm And Comfort.

We're Seeking Someone Who Is Proactive, Adaptable, And Enthusiastic About Creating Memorable Experiences. If You're Passionate About Nature, Hospitality.`,
  rating: 4.89,
  reviewCount: 47,
  reviews: [
    {
      id: "1",
      rating: 5,
      date: "April 2025",
      text: "We're Seeking Someone Who Is Proactive, Adaptable, And Enthusiastic About Creating Memorable Experiences. If You're Passionate About Nature & You're Passionate About Nature",
      author: "John",
      authorSince: "Member Since 2021",
    },
    {
      id: "2",
      rating: 5,
      date: "April 2025",
      text: "We're Seeking Someone Who Is Proactive, Adaptable, And Enthusiastic About Creating Memorable Experiences. If You're Passionate About Nature & You're Passionate About Nature",
      author: "Sarah",
      authorSince: "Member Since 2022",
    },
    {
      id: "3",
      rating: 5,
      date: "April 2025",
      text: "We're Seeking Someone Who Is Proactive, Adaptable, And Enthusiastic About Creating Memorable Experiences. If You're Passionate About Nature & You're Passionate About Nature",
      author: "Mike",
      authorSince: "Member Since 2021",
    },
  ],
  host: {
    name: "Amit Kumar",
    rating: 4.88,
    opportunities: 98,
    yearsHosting: 5,
    description:
      "This Profile Is Curated By Team Volunteer Yatra To Assist Hosts And Volunteers, Help In Creating Better Experience And Design Better Volunteering Program. If You Apply Here, Our Team Will Get In Touch And Assist You For The Opportunities. Apply Now To Be A Part Of Amazing Opportunities",
  },
  accommodationType: "Hostel",
  capacity: "3 People Can Volunteer Together",
}

export default function OpportunityDetailPage() {
  const [isFavorited, setIsFavorited] = useState(false)
  const [showFullScreenImage, setShowFullScreenImage] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const opportunity = mockOpportunityDetail

  // Auto-advance carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % opportunity.images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [opportunity.images.length])

  const handleImageClick = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index)
    setShowFullScreenImage(true)
  }

  const navigateImage = (direction: string) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % opportunity.images.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + opportunity.images.length) % opportunity.images.length)
    }
  }

  const goToSlide = (index: SetStateAction<number>) => {
    setCarouselIndex(index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="md:hidden relative">
        {/* Mobile Image Carousel */}
        <div className="relative h-64 overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {opportunity.images.map((image, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img
                  src={image}
                  alt={`${opportunity.title} ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation overlay */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <button className="w-10 h-10 bg-black bg-opacity-80 rounded-full flex items-center justify-center shadow-lg hover:cursor-pointer">
              <Link href="/">
              <ArrowLeft className="h-5 w-5 text-gray-700" />
              </Link>
            </button>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
                <Share className="h-4 w-4 text-gray-700" />
              </button>
              <button 
                className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
              </button>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {opportunity.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === carouselIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Curved white section */}
        <div className="relative -mt-6 bg-white rounded-t-3xl pt-6 px-4">
          {/* Location and Title */}
          <div className="text-center mb-6">
            <p className="text-teal-600 font-medium mb-1">{opportunity.location}</p>
            <h1 className="text-xl font-bold text-gray-900">{opportunity.title}</h1>
          </div>

          {/* Duration */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Stay At Least</h3>
              <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-2 rounded-full text-sm font-medium">
                {opportunity.stayAtLeast}
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Stay Up To</h3>
              <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-2 rounded-full text-sm font-medium">
                {opportunity.stayUpTo}
              </span>
            </div>
          </div>

          {/* Skills Required */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {opportunity.skillsRequired.slice(0, 6).map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* What You Offer */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Offer</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">5hrs/Day</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">Your Skills</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{opportunity.description}</p>
          </div>

          {/* What You Get */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Get</h3>
            <div className="space-y-3">
              {opportunity.whatYouGet.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Experience */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About Experience</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{opportunity.aboutExperience}</p>
          </div>

          {/* Reviews */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">
                {opportunity.rating} • {opportunity.reviewCount} Reviews
              </span>
            </div>

            <div className="space-y-4 mb-4">
              {opportunity.reviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{review.text}</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">{review.author}</p>
                      <p className="text-xs text-gray-500">{review.authorSince}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 font-medium">
              Show All {opportunity.reviewCount} Reviews
            </button>
          </div>

          {/* Meet Your Host */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet Your Host</h3>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full mb-2"></div>
                  <h4 className="font-semibold text-sm">{opportunity.host.name}</h4>
                  <div className="text-xs text-gray-600 space-y-1 mt-2">
                    <div className="font-bold text-lg">{opportunity.host.opportunities}</div>
                    <div className="text-green-600">Opportunities</div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">{opportunity.host.rating}</span>
                    </div>
                    <div className="text-green-600">Rating</div>
                    <div className="font-bold">{opportunity.host.yearsHosting}</div>
                    <div className="text-green-600">Years Hosting</div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">{opportunity.host.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with accommodation info */}
        <div className="bg-white px-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Building className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{opportunity.accommodationType}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm">3 People Can</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-4">Volunteer Together</div>
          
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold">
            APPLY NOW
          </button>
        </div>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden md:block">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Link href={"/"}>
                  <ArrowLeft className="h-5 w-5" />
                  </Link>
                </button>
                <h1 className="text-xl font-semibold text-gray-900">{opportunity.title}</h1>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => setIsFavorited(!isFavorited)}
                >
                  <Heart className={`h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="col-span-2 md:col-span-1 md:row-span-2">
                  <img
                    src={opportunity.images[0]}
                    alt={opportunity.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick(0)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {opportunity.images.slice(1, 5).map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`${opportunity.title} ${index + 2}`}
                        className="w-full h-24 md:h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => handleImageClick(index + 1)}
                      />
                      {index === 3 && (
                        <button
                          onClick={() => handleImageClick(index + 1)}
                          className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center text-white text-sm font-medium hover:bg-opacity-60 transition-colors"
                        >
                          Show All Photos
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Stay At Least</h3>
                  <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {opportunity.stayAtLeast}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Stay Up To</h3>
                  <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {opportunity.stayUpTo}
                  </span>
                </div>
              </div>

              {/* Skills Required */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {opportunity.skillsRequired.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{opportunity.description}</p>
              </div>

              {/* What You Get */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Get</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {opportunity.whatYouGet.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-sm text-gray-700 font-medium">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Experience */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About Experience</h3>
                <p className="text-gray-700 leading-relaxed">{opportunity.aboutExperience}</p>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">
                    {opportunity.rating} • {opportunity.reviewCount} Reviews
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {opportunity.reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{review.text}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">{review.author}</p>
                          <p className="text-xs text-gray-500">{review.authorSince}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-50 transition-colors">
                  Show All {opportunity.reviewCount} Reviews
                </button>
              </div>

              {/* Meet Your Host */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet Your Host</h3>
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-900 rounded-full mb-2"></div>
                      <h4 className="font-semibold">{opportunity.host.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>{opportunity.host.opportunities}</div>
                        <div className="text-green-600">Opportunities</div>
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{opportunity.host.rating}</span>
                        </div>
                        <div className="text-green-600">Rating</div>
                        <div>{opportunity.host.yearsHosting}</div>
                        <div className="text-green-600">Years Hosting</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">{opportunity.host.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                {/* What You Offer */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What You Offer</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">Strategy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">Your Skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="font-medium">{opportunity.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-gray-400" />
                  <span>{opportunity.accommodationType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span>{opportunity.capacity}</span>
                </div>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-lg transition-colors">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {showFullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setShowFullScreenImage(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              <X className="h-6 w-6 text-black" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-black" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-black" />
            </button>

            {/* Image */}
            <img
              src={opportunity.images[currentImageIndex]}
              alt={`${opportunity.title} ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {opportunity.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}