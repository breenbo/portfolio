export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Button {
  [id: string]: {
    name: string;
    route: string;
  };
}

export interface CardDatas {
  cardPicture: string;
  cardTitle: string;
  cardSubtitle: string;
  subCardTitle: string;
  subCardConclusion: string;
  topRight: boolean;
  bottomLeft: boolean;
}

export interface KnowLogos {
  [logoName: string]: {
    name: string;
    link: string;
    svg: string;
  };
}
export interface Image {
  url: string;
  landscape?: boolean;
}
export interface DoProject {
  [projectName: string]: {
    name: string;
    title: string;
    text: string;
    chips: string[];
    image: Image;
    link: string;
    video: string;
  };
}
