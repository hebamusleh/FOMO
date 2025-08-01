export interface CardType {
  slug: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}
interface IMedia {
  id: string;
  image: {
    id: string;
    thumbnailURL: string;
    url: string;
  };
}

export interface ISection {
  name: string;
  id: string;
  description: string;
  coverImage?: {
    url: string;
  };
}

export interface ICardContent {
  id: string;
  title: string;
  paragraph: string;
  images: IMedia[];
}
