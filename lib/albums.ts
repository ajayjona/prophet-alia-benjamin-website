export interface AlbumPhoto {
  src: string
  alt: string
  albumId: string
}

export interface Album {
  id: string
  title: string
  subtitle: string
  description: string
  cover: string
  photos: AlbumPhoto[]
}

export const ALBUMS: Album[] = [
  {
    id: "prophet",
    title: "Prophet Alia Benjamin",
    subtitle: "Portraits & Ministry Moments",
    description: "Official portraits and ministry moments of Prophet Alia Benjamin.",
    cover: "/prophet/prophet_2.jpeg",
    photos: [
      { src: "/prophet/prophet_2.jpeg", alt: "Prophet Alia Benjamin", albumId: "prophet" },
      { src: "/prophet/prophet_cutout.png", alt: "Prophet Alia Benjamin Portrait", albumId: "prophet" },
      { src: "/prophet/prophet_cutout_mic.png", alt: "Prophet Alia Benjamin Ministering", albumId: "prophet" },
      { src: "/prophet/banner.jpeg", alt: "Prophet Alia Benjamin Studio Banner", albumId: "prophet" }
    ]
  },
  {
    id: "fellowship",
    title: "Fellowship Gatherings",
    subtitle: "Worship, Prayer & Impartation",
    description: "Atmospheres of deep worship, intense prayer, miracles, and communion during our announced fellowship meetings.",
    cover: "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.20%20AM.jpeg",
    photos: [
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.20%20AM.jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.20%20AM%20(1).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.20%20AM%20(2).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.20%20AM%20(3).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.21%20AM.jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.21%20AM%20(1).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.22%20AM.jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.22%20AM%20(1).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.22%20AM%20(2).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.22%20AM%20(3).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.23%20AM.jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.23%20AM%20(1).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.23%20AM%20(2).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.23%20AM%20(3).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.23%20AM%20(4).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.24%20AM.jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.24%20AM%20(1).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.24%20AM%20(2).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.24%20AM%20(3).jpeg",
      "/fellowship/WhatsApp%20Image%202026-09-30%20at%202.15.25%20AM.jpeg"
    ].map((src, i) => ({
      src,
      alt: `Fellowship Gathering Moment ${i + 1}`,
      albumId: "fellowship"
    }))
  },
  {
    id: "fellowship_poster",
    title: "Fellowship Posters",
    subtitle: "Past Themes & Gatherings",
    description: "Official promotional banners and posters from past powerful fellowship meetings and revival nights.",
    cover: "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.36%20AM.jpeg",
    photos: [
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.36%20AM.jpeg",
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.36%20AM%20(1).jpeg",
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.37%20AM.jpeg",
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.37%20AM%20(1).jpeg",
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.37%20AM%20(2).jpeg",
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.37%20AM%20(3).jpeg",
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.37%20AM%20(4).jpeg",
      "/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.38%20AM.jpeg"
    ].map((src, i) => ({
      src,
      alt: `Past Fellowship Poster ${i + 1}`,
      albumId: "fellowship_poster"
    }))
  },
  {
    id: "outreaches",
    title: "Community Outreaches",
    subtitle: "Serving & Touching Lives",
    description: "Taking the love of Jesus beyond walls into communities, serving families and sharing the Gospel.",
    cover: "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.17.48%20AM.jpeg",
    photos: [
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.17.48%20AM.jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.17.48%20AM%20(1).jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.17.48%20AM%20(2).jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.18.36%20AM.jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.18.36%20AM%20(1).jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.18.37%20AM.jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.18.37%20AM%20(1).jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.18.37%20AM%20(2).jpeg",
      "/outreaches/WhatsApp%20Image%202026-09-30%20at%202.18.38%20AM.jpeg"
    ].map((src, i) => ({
      src,
      alt: `Outreach Ministry Photo ${i + 1}`,
      albumId: "outreaches"
    }))
  },
  {
    id: "school_outreach",
    title: "School Outreaches",
    subtitle: "Impacting Young Generations",
    description: "Ministering faith, purpose, and hope in high schools and colleges, empowering the next generation of leaders.",
    cover: "/school_outreach/WhatsApp%20Image%202026-09-30%20at%202.21.29%20AM.jpeg",
    photos: [
      "/school_outreach/WhatsApp%20Image%202026-09-30%20at%202.21.29%20AM.jpeg",
      "/school_outreach/WhatsApp%20Image%202026-09-30%20at%202.21.29%20AM%20(1).jpeg",
      "/school_outreach/WhatsApp%20Image%202026-09-30%20at%202.21.29%20AM%20(2).jpeg",
      "/school_outreach/WhatsApp%20Image%202026-09-30%20at%202.21.29%20AM%20(3).jpeg",
      "/school_outreach/WhatsApp%20Image%202026-09-30%20at%202.21.30%20AM.jpeg",
      "/school_outreach/WhatsApp%20Image%202026-09-30%20at%202.18.38%20AM.jpeg"
    ].map((src, i) => ({
      src,
      alt: `School Outreach Photo ${i + 1}`,
      albumId: "school_outreach"
    }))
  }
]
