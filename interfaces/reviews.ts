export interface IReviews {
  id: string;
  customer_id: string;
  product_id: string;
  rating: number;
  title: string;
  pros: string;
  cons: string;
  overall: string;
  created_at: Date;
  likes: number;
  dislikes: number;
  username: string;
  profile_image: string;
}
