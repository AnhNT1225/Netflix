export interface IGeneral {
  name: string;
  uuid: string;
}

// interface ICountry {
//   name: string;
//   uuid: string;
// }

// interface IGenre {
//   name: string;
//   uuid: string;
// }

export interface IEmbedURL {
  server: string;
  url: string;
  priority: number;
}

export interface IEpisode {
  name: string;
  uuid: string;
}

export interface IMovie {
  _id: string;
  image: string;
  title: string;
  rating: string;
  year: string;
  titleOriginal: string;
  uuid: string;
  description: string;
  genres: IGeneral[];
  countries: IGeneral[];
  release: string;
  embedUrls: IEmbedURL[];
  index: number;
  episodes?: IEpisode[] | undefined;
  createdAt: string;
  updatedAt: string;
  actors?: IGeneral[] | undefined;
  directors?: IGeneral[] | undefined;
  escritors?: IGeneral[] | undefined;
  otherTitles?: IGeneral[] | undefined;
}
