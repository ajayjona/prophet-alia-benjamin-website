export interface YouTubeVideo {
  id: string
  title: string
  speaker: string
  category: "All" | "Prophecy" | "Partner Message" | "Global Warning"
  url: string
  thumbnail: string
  embedUrl: string
  description: string
}

export const FEATURED_VIDEO: YouTubeVideo = {
  id: "RkhrZ54KUks",
  title: "An Important Message to the Partners",
  speaker: "Prophet Alia Benjamin",
  category: "Partner Message",
  url: "https://youtu.be/RkhrZ54KUks?si=XY6CreZnJZm8MJV5",
  thumbnail: "https://img.youtube.com/vi/RkhrZ54KUks/hqdefault.jpg",
  embedUrl: "https://www.youtube-nocookie.com/embed/RkhrZ54KUks?autoplay=1",
  description: "Prophet Alia Benjamin shares a vital prophetic word, guidance, and encouragement for partners and believers across the globe."
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  FEATURED_VIDEO,
  {
    id: "DegmPQTFj3g",
    title: "Attack On The Ugandan Church - Prophecy",
    speaker: "Prophet Alia Benjamin",
    category: "Prophecy",
    url: "https://youtu.be/DegmPQTFj3g?si=JybWA5RXGdnNUsqc",
    thumbnail: "https://img.youtube.com/vi/DegmPQTFj3g/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/DegmPQTFj3g?autoplay=1",
    description: "A prophetic warning and prayer call regarding spiritual vigilance and standing fast in faith within the Ugandan church."
  },
  {
    id: "ySrx3w0rqE0",
    title: "Prophecy To America, Trump Assassination Attempt",
    speaker: "Prophet Alia Benjamin",
    category: "Global Warning",
    url: "https://youtu.be/ySrx3w0rqE0?si=S3hzfcnkJiS65HAb",
    thumbnail: "https://img.youtube.com/vi/ySrx3w0rqE0/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/ySrx3w0rqE0?autoplay=1",
    description: "Detailed prophetic declaration concerning America and the assassination attempt on Donald Trump."
  },
  {
    id: "hY-H0xFuZ4w",
    title: "South Africa Judgment - Prophecy",
    speaker: "Prophet Alia Benjamin",
    category: "Prophecy",
    url: "https://youtu.be/hY-H0xFuZ4w?si=8ai8cYwDulm5yFlj",
    thumbnail: "https://img.youtube.com/vi/hY-H0xFuZ4w/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/hY-H0xFuZ4w?autoplay=1",
    description: "A prophetic declaration concerning the spiritual climate, leadership shifts, and revival in South Africa."
  },
  {
    id: "ejtaQvThRHU",
    title: "Judgement Coming - Prophecy",
    speaker: "Prophet Alia Benjamin",
    category: "Global Warning",
    url: "https://youtu.be/ejtaQvThRHU?si=rExv1DO-7Uwy9mK1",
    thumbnail: "https://img.youtube.com/vi/ejtaQvThRHU/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/ejtaQvThRHU?autoplay=1",
    description: "Prophetic exhortation on righteousness, repentance, and standing firm in the righteous fear of God."
  },
  {
    id: "0T08squlogc",
    title: "Judgement Upon The Church - Prophecy",
    speaker: "Prophet Alia Benjamin",
    category: "Prophecy",
    url: "https://youtu.be/0T08squlogc?si=bbAXAPACPkpo8C5q",
    thumbnail: "https://img.youtube.com/vi/0T08squlogc/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/0T08squlogc?autoplay=1",
    description: "A clarion prophetic call for purity, revival, prayer, and apostolic alignment in the Body of Christ."
  },
  {
    id: "2sXDwy5Q7BU",
    title: "Bitcoin Crash Prophecy",
    speaker: "Prophet Alia Benjamin",
    category: "Global Warning",
    url: "https://youtu.be/2sXDwy5Q7BU?si=LY65lLkCybdpohpj",
    thumbnail: "https://img.youtube.com/vi/2sXDwy5Q7BU/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/2sXDwy5Q7BU?autoplay=1",
    description: "Prophetic insight on global economics, shifting financial systems, and the Bitcoin crash."
  },
  {
    id: "tnRo-a-aHJQ",
    title: "Iran War, The Why",
    speaker: "Prophet Alia Benjamin",
    category: "Global Warning",
    url: "https://youtu.be/tnRo-a-aHJQ?si=8oRwMP1JrKkrqKLd",
    thumbnail: "https://img.youtube.com/vi/tnRo-a-aHJQ/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/tnRo-a-aHJQ?autoplay=1",
    description: "Prophetic revelation uncovering the spiritual dimensions and reasons behind conflict in the Middle East."
  },
  {
    id: "4dyV5QILBfU",
    title: "Burkina Faso President - Prophecy",
    speaker: "Prophet Alia Benjamin",
    category: "Prophecy",
    url: "https://youtu.be/4dyV5QILBfU?si=D45_VS0vXDHk4OcO",
    thumbnail: "https://img.youtube.com/vi/4dyV5QILBfU/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/4dyV5QILBfU?autoplay=1",
    description: "Prophetic word concerning national leadership, divine destiny, and prayer for Burkina Faso."
  }
]
