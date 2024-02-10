type Breed = {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
};

type Link = {
  url: string | null;
  label: string;
  active: boolean;
};

export type BreedsApiResponse = {
  current_page: number;
  data: Breed[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
