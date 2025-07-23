export interface ReviewItem {
    id: number;
    name: string;
    role: string;
    image: string;  
    rating: string;
    message: string;
}
export const REVIEWS: ReviewItem[] = [
  {
      id: 1,
      rating: "5/5",
      message: "Lorem ipsum dolor sit amet consectetur. Porta lacus risus sit id nunc orci. Varius nunc vulputate nibh tristique.",
      name: "Jennifer Jenson",
      role: "CMO, company",
      image: "/assets/images/avatar2.jpg",
  },
  {
      id: 2,
      rating: "5/5",
      message: "Lorem ipsum dolor sit amet consectetur. Porta lacus risus sit id nunc orci. Varius nunc vulputate nibh tristique.",
      name: "John Doe",
      role: "CEO, company",
      image: "/assets/images/avatar2.jpg",
  },
  {
    id: 3,
    rating: "5/5",
    message:
      "Lorem ipsum dolor sit amet consectetur. Porta lacus risus sit id nunc orci. Varius nunc vulputate nibh tristique.",
    name: "James Jason",
    role: "CFO, company",
    image: "/assets/images/avatar2.jpg",
  },
  {
    id: 4,
    rating: "5/5",
    message:
      "Lorem ipsum dolor sit amet consectetur. Porta lacus risus sit id nunc orci. Varius nunc vulputate nibh tristique.",
    name: "James Jason",
    role: "CFO, company",
    image: "/assets/images/avatar2.jpg",
  },
  {
    id: 5,
    rating: "5/5",
    message:
      "Lorem ipsum dolor sit amet consectetur. Porta lacus risus sit id nunc orci. Varius nunc vulputate nibh tristique.Varius nunc vulputate nibh tristique.Varius nunc vulputate nibh tristique.Varius nunc vulputate nibh tristique.Varius nunc vulputate nibh tristique.Varius nunc vulputate nibh tristique.",
    name: "James Jason",
    role: "CFO, company",
    image: "/assets/images/avatar2.jpg",
  },
];