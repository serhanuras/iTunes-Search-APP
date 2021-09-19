export enum ExplicitType {
  Yes = "Yes",
  No = "No",
}

export enum EntityType {
  Album = "album",
  Song = "song",
  Artist = "musicArtist",
}

export enum MediaType {
  Movie = "movie",
  Podcast = "podcast",
  Music = "music",
  MusicVideo = "musicVideo",
  AudioBook = "audiobook",
  ShortFilm = "shortFilm",
  TvShow = "tvShow",
  Software = "software",
  Ebook = "ebook",
  All = "all",
}

export class Media {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  trackName: string;
  collectionName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
}
