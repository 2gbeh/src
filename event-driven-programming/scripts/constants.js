const DEV_MODE = 1;

const API_URL = "http://northwindai.org/api/podcast";
const APP_URL = DEV_MODE
  ? "../../northwind-ai/client/public"
  : "https://northwindai.org";

const MOCK_DATA = [
  {
    id: 25,
    datetime: "2026-07-19T19:00:00.000Z",
    thumbnail: "/images/avatar-etugbeh.png",
    topic: "System Design Anti-Patterns at OnlyFans",
    speakers: ["Emanuel"],
  },
  // {
  //   id: 24,
  //   datetime: "2026-07-17T19:00:00.000Z",
  //   thumbnail: "/images/avatar-etugbeh.png",
  //   topic: "Social Engineering Systems & People",
  //   speakers: ["Emanuel"],
  // },
  {
    id: 23,
    datetime: "2026-07-12T19:00:00.000Z",
    thumbnail: "/uploads/podcast/avatar-fike.png",
    topic: "Empirical Analysis & Decision Making",
    speakers: ["Franklin Ike"],
  },
  {
    id: 21,
    datetime: "2026-07-05T19:00:00.000Z",
    thumbnail: "/uploads/logos/lani.jpg",
    topic: "LANI Design Session",
    speakers: ["Jabulani Usen"],
  },
  {
    id: 19,
    datetime: "2026-06-28T19:00:00.000Z",
    topic: "SOW: Government Subcontractors",
    speakers: ["H.M. Oshomoh", "Samuel Aiyeduyoni"],
    virtualLink: "https://x.com/i/spaces/1wGWjjElmNNKQ",
  },
  //////////////////////////////////////////////////////////
  {
    id: 18,
    datetime: "2026-06-26T19:00:00.000Z",
    thumbnail: "/uploads/podcast/avatar-wemmanuel.png",
    topic: "Study of Pragmatics & Cryptography",
    speakers: ["Witney Emmanuel"],
    virtualLink: "https://x.com/i/spaces/1pKkOOEXPnXKj",
  },
  // {
  //   id: 16,
  //   datetime: "2026-06-19T19:00:00.000Z",
  //   thumbnail: "/uploads/podcast/avatar-tadegoke.png",
  //   topic: "ACID Traits for Agile Workflows Pt.1",
  //   speakers: ["Temi Adegoke, PSM"],
  //   virtualLink: "https://x.com/i/spaces/1yxBeeBWbpWJN",
  // },
  {
    id: 15,
    datetime: "2026-06-14T20:00:00.000Z",
    thumbnail: "/uploads/podcast/avatar-sgbangbola.png",
    topic: "Youth Politics & Voter Pre-Registration Data",
    speakers: ["Seyi Gbangbola"],
    virtualLink: "https://x.com/i/spaces/1pKdRRAwWWNJW",
  },
  {
    id: 14,
    datetime: "2026-06-12T19:00:00.000Z",
    thumbnail: "/uploads/podcast/avatar-jgodfrey.png",
    topic: "Gospel Music & Lossless Audio Compression",
    speakers: ["Jamiah Godfrey"],
    virtualLink: "https://x.com/i/spaces/1RJjppApPbNKw",
  },
  {
    id: 12,
    datetime: "2026-06-03T19:00:00.000Z",
    thumbnail: "/images/avatar-etugbeh.png",
    topic: "ACID Traits for AI Workflows Pt.1",
    speakers: ["Emanuel"],
    virtualLink: "https://x.com/i/spaces/1dGYllLnveLKX",
  },
  //////////////////////////////////////////////////////////
  // {
  //   id: 11,
  //   datetime: "2026-05-30T19:00:00.000Z",
  //   thumbnail: "/uploads/podcast/avatar-eokene.jpg",
  //   topic: "Basic Routine Medical Investigations",
  //   speakers: ["Emmanuel Okene"],
  //   virtualLink: "https://x.com/i/spaces/1RKZzzBwanMKB",    
  // },
  // {
  //   id: 10,
  //   datetime: "2026-05-28T19:00:00.000Z",
  //   thumbnail: "/uploads/logos/siiqo.png",
  //   topic: "Siiqo Design Session",
  //   speakers: ["Innocent Okereke", "Linda Kolapo"],
  //   virtualLink: "https://x.com/i/spaces/1qGvvvewvbkGB",    
  // },
  {
    id: 9,
    datetime: "2026-05-17T19:00:00.000Z",
    topic: "KPIs of World-Class Software Engineers",
    speakers: ["AO", "Phillip Olalere"],
    virtualLink: "https://x.com/i/spaces/1mGPaLAgERYJN",    
  },
  // {
  //   id: 6,
  //   datetime: "2026-04-05T19:00:00.000Z",
  //   thumbnail: "/uploads/podcast/avatar-iadebiyi.png",
  //   topic: "Brand-Led Growth Hacking",
  //   speakers: ["Isaac Adebiyi"],
  //   virtualLink: "https://x.com/i/spaces/1rGmqojWqzqGy",    
  // },
  {
    id: 4,
    datetime: "2026-03-22T19:00:00.000Z",
    thumbnail: "/uploads/logos/izivote.png",
    topic: "Izivote Design Session",
    speakers: ["Joshua Uyi"],
    virtualLink: "https://x.com/i/spaces/1XGygmPjeMkxM",    
  },
];
