export type randomFactType = {
  fact: string;
  length: number;
};

export type allFactsType = {
  current_page: number;
  data: {
    fact: string;
    length: number;
  }[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
