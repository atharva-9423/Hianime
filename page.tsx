import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { AnimeGrid } from "@/components/anime-grid"
import { CategorySection } from "@/components/category-section"
import { ScheduleSection } from "@/components/schedule-section"
import { CommunityPosts } from "@/components/community-posts"

// Sample data for featured animes
const featuredAnimes = [
  {
    id: "solo-leveling-season-2-arise-from-the-shadow-19413",
    title: "Solo Leveling Season 2: Arise from the Shadow",
    image: "https://ext.same-assets.com/949451364/319845798.jpeg",
    description: "Sung Jin-Woo, dubbed the weakest hunter of all mankind, grows stronger by the day with the supernatural powers he has gained. However, keeping his skills hidden becomes more difficult as dungeon-related incidents pile up around him.",
    type: "TV",
    year: 2025,
    genre: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: "dragon-ball-daima-19328",
    title: "Dragon Ball Daima",
    image: "https://ext.same-assets.com/949451364/1075412290.jpeg",
    description: "After saving the world from the destructive might of Majin Buu, Gokuu Son and his allies look forward to a well-earned rest. However, unbeknownst to them, their battle was recorded and observed by Gomah, an evil being who assumes the title of King in the Demon Realm.",
    type: "TV",
    year: 2024,
    genre: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: "the-100-girlfriends-who-really-really-really-really-really-love-you-season-2-19435",
    title: "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You Season 2",
    image: "https://ext.same-assets.com/949451364/338866239.jpeg",
    description: "Rentarou Aijou has it all: looks, intelligence, athletic skill, and popularity with peers and mentors alike. Unfortunately, none of these qualities help Rentarou with his love life.",
    type: "TV",
    year: 2025,
    genre: ["Comedy", "Romance", "Harem"]
  }
]

// Sample data for popular animes
const popularAnimes = [
  {
    id: "one-piece-100",
    title: "One Piece",
    image: "https://ext.same-assets.com/949451364/2111934836.jpeg",
    episodeCount: 1122,
    type: "TV",
    duration: "24m",
    rating: 9.2
  },
  {
    id: "naruto-shippuden-355",
    title: "Naruto: Shippuden",
    image: "https://ext.same-assets.com/949451364/1611652922.jpeg",
    episodeCount: 500,
    type: "TV",
    duration: "24m",
    rating: 8.8
  },
  {
    id: "bleach-806",
    title: "Bleach",
    image: "https://ext.same-assets.com/949451364/4228398240.jpeg",
    episodeCount: 366,
    type: "TV",
    duration: "24m",
    rating: 8.7
  },
  {
    id: "black-clover-2404",
    title: "Black Clover",
    image: "https://ext.same-assets.com/949451364/1160092395.jpeg",
    episodeCount: 170,
    type: "TV",
    duration: "24m",
    rating: 8.5
  },
  {
    id: "jujutsu-kaisen-2nd-season-18413",
    title: "Jujutsu Kaisen 2nd Season",
    image: "https://ext.same-assets.com/949451364/1926245408.png",
    episodeCount: 23,
    type: "TV",
    duration: "24m",
    rating: 9.0
  }
]

// Sample data for latest episodes
const latestEpisodes = [
  {
    id: "the-red-ranger-becomes-an-adventurer-in-another-world-19463",
    title: "The Red Ranger Becomes an Adventurer in Another World",
    image: "https://ext.same-assets.com/949451364/1249706871.jpeg",
    episodeCount: 13,
    episodesWatched: 12,
    type: "TV",
    duration: "24m"
  },
  {
    id: "loner-life-in-another-world-19337",
    title: "Loner Life in Another World",
    image: "https://ext.same-assets.com/949451364/2586356209.jpeg",
    episodeCount: 12,
    episodesWatched: 7,
    type: "TV",
    duration: "23m"
  },
  {
    id: "yakuza-fiance-raise-wa-tanin-ga-ii-19336",
    title: "Yakuza Fiancé: Raise wa Tanin ga Ii",
    image: "https://ext.same-assets.com/949451364/2039121250.jpeg",
    episodeCount: 11,
    episodesWatched: 1,
    type: "TV",
    duration: "23m"
  },
  {
    id: "ranma-1-2-19335",
    title: "Ranma 1/2",
    image: "https://ext.same-assets.com/949451364/716039599.jpeg",
    episodeCount: 12,
    episodesWatched: 12,
    type: "TV",
    duration: "23m"
  },
  {
    id: "ill-become-a-villainess-who-goes-down-in-history-19334",
    title: "I'll Become a Villainess Who Goes Down in History",
    image: "https://ext.same-assets.com/949451364/3590858092.jpeg",
    episodeCount: 13,
    episodesWatched: 13,
    type: "TV",
    duration: "23m"
  }
]

// Sample data for upcoming animes
const upcomingAnimes = [
  {
    id: "zenshu-19445",
    title: "Zenshu",
    image: "https://ext.same-assets.com/949451364/2071622505.jpeg",
    episodeCount: 12,
    type: "TV",
    duration: "24m"
  },
  {
    id: "im-getting-married-to-a-girl-i-hate-in-my-class-19439",
    title: "I'm Getting Married to a Girl I Hate in My Class",
    image: "https://ext.same-assets.com/949451364/3590858092.jpeg",
    episodeCount: 12,
    type: "TV",
    duration: "24m"
  },
  {
    id: "blue-lock-season-2-19318",
    title: "Blue Lock Season 2",
    image: "https://ext.same-assets.com/949451364/1442087067.jpeg",
    episodeCount: 14,
    type: "TV",
    duration: "25m"
  },
  {
    id: "the-apothecary-diaries-season-2-19429",
    title: "The Apothecary Diaries Season 2",
    image: "https://ext.same-assets.com/949451364/2071622505.jpeg",
    episodeCount: 13,
    type: "TV",
    duration: "24m"
  },
  {
    id: "arifureta-from-commonplace-to-worlds-strongest-season-3-19321",
    title: "Arifureta: From Commonplace to World's Strongest Season 3",
    image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/ebb78f8688b59abf0409b8799159127a.jpg",
    episodeCount: 16,
    type: "TV",
    duration: "23m"
  }
]

// Sample data for genre/categories
const genres = [
  { name: "Action", href: "/genre/action" },
  { name: "Adventure", href: "/genre/adventure" },
  { name: "Comedy", href: "/genre/comedy" },
  { name: "Drama", href: "/genre/drama" },
  { name: "Fantasy", href: "/genre/fantasy" },
  { name: "Horror", href: "/genre/horror" },
  { name: "Isekai", href: "/genre/isekai" },
  { name: "Magic", href: "/genre/magic" },
  { name: "Mecha", href: "/genre/mecha" },
  { name: "Romance", href: "/genre/romance" },
  { name: "School", href: "/genre/school" },
  { name: "Sci-Fi", href: "/genre/sci-fi" },
  { name: "Slice of Life", href: "/genre/slice-of-life" },
  { name: "Sports", href: "/genre/sports" },
  { name: "Supernatural", href: "/genre/supernatural" },
  { name: "Thriller", href: "/genre/thriller" },
  { name: "Mystery", href: "/genre/mystery" },
  { name: "Psychological", href: "/genre/psychological" }
]

// Sample data for schedule
const scheduleDays = [
  {
    name: "Mon",
    value: "mon",
    animes: [
      {
        id: "solo-leveling-season-2-arise-from-the-shadow-19413",
        title: "Solo Leveling Season 2: Arise from the Shadow",
        image: "https://ext.same-assets.com/949451364/319845798.jpeg",
        episode: 14,
        time: "18:00"
      },
      {
        id: "jujutsu-kaisen-2nd-season-18413",
        title: "Jujutsu Kaisen 2nd Season",
        image: "https://ext.same-assets.com/949451364/1926245408.png",
        episode: 24,
        time: "19:30"
      }
    ]
  },
  {
    name: "Tue",
    value: "tue",
    animes: [
      {
        id: "dragon-ball-daima-19328",
        title: "Dragon Ball Daima",
        image: "https://ext.same-assets.com/949451364/1075412290.jpeg",
        episode: 21,
        time: "20:00"
      }
    ]
  },
  {
    name: "Wed",
    value: "wed",
    animes: [
      {
        id: "the-100-girlfriends-who-really-really-really-really-really-love-you-season-2-19435",
        title: "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You Season 2",
        image: "https://ext.same-assets.com/949451364/338866239.jpeg",
        episode: 13,
        time: "21:00"
      }
    ]
  },
  {
    name: "Thu",
    value: "thu",
    animes: []
  },
  {
    name: "Fri",
    value: "fri",
    animes: [
      {
        id: "one-piece-100",
        title: "One Piece",
        image: "https://ext.same-assets.com/949451364/2111934836.jpeg",
        episode: 1123,
        time: "22:00"
      }
    ]
  },
  {
    name: "Sat",
    value: "sat",
    animes: [
      {
        id: "arifureta-from-commonplace-to-worlds-strongest-season-3-19321",
        title: "Arifureta: From Commonplace to World's Strongest Season 3",
        image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/ebb78f8688b59abf0409b8799159127a.jpg",
        episode: 17,
        time: "18:30"
      }
    ]
  },
  {
    name: "Sun",
    value: "sun",
    animes: [
      {
        id: "zenshu-19445",
        title: "Zenshu",
        image: "https://ext.same-assets.com/949451364/2071622505.jpeg",
        episode: 13,
        time: "17:00"
      }
    ]
  }
]

// Sample data for community posts
const communityPosts = [
  {
    id: "258673",
    title: "My birthday",
    content: "Hey guys today is my birthday. I hope this post don't get removed.",
    timeAgo: "29 minutes ago",
    likes: 4,
    comments: 0,
    tag: "General",
    user: {
      id: "4934236",
      name: "Troll_vo",
      avatar: "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-11.png",
      level: "Dolphin"
    }
  },
  {
    id: "258672",
    title: "Can anyone suggest some anime's like these? prefer Dub but will watch sub if its worth it",
    content: "Am I Actually the Strongest? The World's Finest Assassin Gets Reincarnated in a Different World as an Aristocrat, Berserk of Gluttony, The Aristocrat's Otherworldly Adventure: Serving Gods Who Go Too Far...",
    timeAgo: "an hour ago",
    likes: 3,
    comments: 1,
    tag: "Suggestion",
    user: {
      id: "8410873",
      name: "joe",
      avatar: "https://ext.same-assets.com/949451364/3218982792.jpeg"
    }
  },
  {
    id: "258669",
    title: "PLEASE if you haven't watched samurai champloo WATCH IT",
    content: "I was hesitant at first, but it ended up being a masterpiece. Wish I could erase my memory to rewatch it PLS give it a try",
    timeAgo: "2 hours ago",
    likes: 1,
    comments: 1,
    tag: "Suggestion",
    user: {
      id: "7584222",
      name: "MEHDI",
      avatar: "https://ext.same-assets.com/949451364/2062741263.png"
    }
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-hianime-background">
      <Navbar />

      <div className="pt-16">
        {/* Featured Carousel */}
        <div className="container mx-auto px-4 mt-6">
          <FeaturedCarousel items={featuredAnimes} />
        </div>

        {/* Latest Episodes Section */}
        <div className="container mx-auto px-4">
          <AnimeGrid
            title="Latest Episodes"
            viewMoreHref="/latest-episodes"
            animes={latestEpisodes}
          />
        </div>

        {/* Popular Anime Section */}
        <div className="container mx-auto px-4">
          <AnimeGrid
            title="Most Popular"
            viewMoreHref="/most-popular"
            animes={popularAnimes}
          />
        </div>

        {/* Upcoming Anime Section */}
        <div className="container mx-auto px-4">
          <AnimeGrid
            title="Upcoming Anime"
            viewMoreHref="/upcoming"
            animes={upcomingAnimes}
          />
        </div>

        {/* Genre Section */}
        <div className="container mx-auto px-4">
          <CategorySection
            title="Genres"
            viewMoreHref="/genres"
            categories={genres}
          />
        </div>

        {/* Schedule Section */}
        <div className="container mx-auto px-4">
          <ScheduleSection
            days={scheduleDays}
            viewMoreHref="/schedule"
          />
        </div>

        {/* Community Posts Section */}
        <div className="container mx-auto px-4">
          <CommunityPosts
            posts={communityPosts}
            viewMoreHref="/community/board"
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
