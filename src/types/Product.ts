export type FAQ = {
  question: string;
  answer: string;
};

export type Product = {
  id: number;
  title: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  price: number;
  originalPrice?: number;
  collection: string;
  description?: string;
  keyBenefits?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedProducts?: number[];
};
