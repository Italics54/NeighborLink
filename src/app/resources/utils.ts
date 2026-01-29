export interface ResourceCard {
  id: number;

  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;

  address: string;
  hours: string;
  phone: string;

  tags: string[];
  category: string;

  specialty: string;
  image: string;
}
