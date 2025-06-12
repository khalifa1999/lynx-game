export interface IGamePreview {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
}

export interface IGame extends IGamePreview {
  description: string;
  released: string;
  website: string;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  platforms: {
    platform: {
      id: number;
      name: string;
    };
  }[];
}

export interface IGameScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

export interface IGameScreenshotResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGameScreenshot[];
}

export interface IStore {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface IGameStore extends IStore {
  games: {
    id: number;
    slug: string;
    name: string;
    added: number;
  }[];
}

export interface IStoreDetails {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
  description: string;
}
