export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Button {
    [id:string]: {
        name:string,
        route:string
    }
}

export interface CardDatas {
    cardPicture: string,
    cardTitle:string,
    cardSubtitle:string,
    subCardTitle:string,
    subCardConclusion:string
}
