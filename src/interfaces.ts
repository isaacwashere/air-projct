export interface Individual {
  id: number;
  name: string;
  email: string;
  avatar: string;
  description: string;
}

export interface PersonProps {
  person: Individual;
}

export interface SearchResultsProps {
  results: Individual[];
}
