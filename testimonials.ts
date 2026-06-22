export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Sustainability Consultant",
    text: "Ecoflect Earthware has completely changed how I think about fashion. The quality is exceptional, and knowing every piece is ethically made makes wearing them even better.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Environmental Activist",
    text: "Finally, a brand that walks the talk. Their transparency about materials and production is refreshing. The organic linen shirt is my daily go-to.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Fashion Blogger",
    text: "I've reviewed dozens of sustainable brands, but Ecoflect Earthware stands out for design and durability. The Tencel wrap dress is absolutely stunning and so comfortable.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
  },
];