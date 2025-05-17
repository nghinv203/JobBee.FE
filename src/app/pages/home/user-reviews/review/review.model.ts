export interface IReview {
  stars?: number;
  description?: string;
  user?: IUser;
}

interface IUser {
  img?: string;
  fullName?: string;
  position?: string;
}
