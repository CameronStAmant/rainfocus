export type BaseCard = {
  icon: string;
  description: string;
};

export type SetupCard = BaseCard & {
  title: string;
  cardType: "default";
};

export type FullWidthCard = {
  cardType: "fullWidth";
  items: {
    title: string;
    description: string;
  }[];
};
