export type BaseCard = {
  icon: string;
  description: string;
  id: number;
};

export type SetupCard = BaseCard & {
  title: string;
};

export type FullWidthCard = {
  title: string;
  description: string;
  id: number;
}[];
