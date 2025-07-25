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
  };
}

export interface ISection {
  name: string;
  id: string;
  description: string;
  image: IMedia[];
}
