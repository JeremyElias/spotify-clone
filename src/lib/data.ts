import { colors } from "./color";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "No hace falta",
    color: colors.yellow,
    cover:
      "https://i.kfs.io/album/global/268615982,0v1/fit/500x500.jpg",
    artists: ["YoungSun"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Miro a las Estrellas",
    color: colors.green,
    cover:
      "https://yt3.googleusercontent.com/5eBRMAS20_dyRY_zfxpwjTfeaqRvKg4Y7oCdLl9JVRWWGJkz70D2UZIM89nuGeNFpUwikPyxow=s176-c-k-c0x00ffffff-no-rj",
    artists: ["Wuicho kun"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Rise Against",
    color: colors.rose,
    cover:
      "https://i.scdn.co/image/ab67616d0000b273eaa10fffa60de320846c28be",
    artists: ["Rise Against"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Enema Of The State",
    color: colors.blue,
    cover:
      "https://www.rockaxis.com/img/newsList/7620806.jpg",
    artists: ["Blink-182"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Demon Compass",
    color: colors.purple,
    cover:
      "https://lastfm.freetls.fastly.net/i/u/500x500/08024f087bafcdf7e849d9ae2529a216.jpg",
    artists: ["Provoker"],
  },
  {
    id: '6',
    albumId: 6,
    title: "What You Won't do for love",
    color: colors.orange,
    cover:
      "https://i.scdn.co/image/ab67616d00001e020f98789111606f77a27d6f67",
    artists: ["Bobby Caldwell"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "No hace falta",
    "image": `https://i.kfs.io/album/global/268615982,0v1/fit/500x500.jpg`,
    "artists": ["YoungSun"],
    "album": "No hace falta",
    "duration": "4:27"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Tu y yo",
    "image": `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32V4IQTM-mM8QEM7KS41y4Hlj1ytHPq0IvdWdSE0idwd9qPzM8WZCiRuQRblVV4H9OrY&usqp=CAU`,
    "artists": ["YoungSun"],
    "album": "No hace falta",
    "duration": "3:08"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Rosalia",
    "image": `https://i.scdn.co/image/ab6761610000e5eb3f7101028636b3676eb162de`,
    "artists": ["YoungSun"],
    "album": "No hace falta",
    "duration": "3:08"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Regular",
    "image": `https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/7f/8c/4d/7f8c4deb-d8ac-6ea5-0efd-34922f762a8a/artwork.jpg/800x800cc.jpg`,
    "artists": ["YoungSun"],
    "album": "No hace falta",
    "duration": "2:57"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "i Need",
    "image": `https://cdns-images.dzcdn.net/images/cover/c95a3cf087b936fb2368e5c5d2888c53/264x264.jpg`,
    "artists": ["YoungSun"],
    "album": "No hace falta",
    "duration": "3:21"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Llora",
    "image": `https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/dd/15/1bdd155a-724b-44d0-4c97-5876e5cab1d5/197338198414.jpg/800x800cc.jpg`,
    "artists": ["Wuicho kun"],
    "album": "Miro a las Estrellas",
    "duration": "4:27"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Te extraño de un extraño",
    "image": `https://i.scdn.co/image/ab67616d0000b2737c01d370951fe6956c60ee31`,
    "artists": ["Wuicho kun"],
    "album": "Miro a las Estrellas",
    "duration": "3:05"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "a dónde voy????",
    "image": `https://i1.sndcdn.com/artworks-c1c1cqgmukow-0-t500x500.jpg`,
    "artists": ["Wuicho kun"],
    "album": "Miro a las Estrellas",
    "duration": "3:15"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "Mentir por Convivir",
    "image": `https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ce/1e/03/ce1e038f-f811-33a1-6ef4-52bdfc691eb9/197338655320.jpg/400x400cc.jpg`,
    "artists": ["Wuicho kun"],
    "album": "Miro a las Estrellas",
    "duration": "3:40"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Mientras miras la pared",
    "image": `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EstBMhqYl3Q-PNSyFZT1RwC9k9h-sODTHEKsu3AaJBrpWLMJG_EJiZdXI3Q1G46goDo&usqp=CAU`,
    "artists": ["Wuicho kun"],
    "album": "Miro a las Estrellas",
    "duration": "4:05"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://i.scdn.co/image/ab67616d0000b273eaa10fffa60de320846c28be`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://i.scdn.co/image/ab67616d0000b273eaa10fffa60de320846c28be`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://i.scdn.co/image/ab67616d0000b273eaa10fffa60de320846c28be`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://i.scdn.co/image/ab67616d0000b273eaa10fffa60de320846c28be`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://i.scdn.co/image/ab67616d0000b273eaa10fffa60de320846c28be`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
]