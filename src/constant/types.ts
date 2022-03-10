export interface UserStates {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  dob: string | undefined;
  gender: string;
  email: string;
  role: string;
}

interface UserEr {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginStates {
  authorizing: boolean;
  authorized: boolean;
  errors: Partial<UserEr> | null;
  userInfo: UserStates | null;
}

export interface BookStates {
  id: number;
  title: string;
  description: string;
  author_id: number;
  author: { name: string };
  genres: [{ name: string }];
  comments: CommentProps[];
  rates: [];
}

export interface BookEr {
  title: string | null;
  description: string | null;
  author_id: string | null;
}
export interface OneBookStates {
  errors: Partial<BookEr> | null;
  book: BookStates | null;
}

export interface CreateBookStates {
  errors: Partial<BookEr> | null;
  book: BookStates | null;
}

export interface ListBookStates {
  errors: Partial<BookEr> | null;
  books: BookStates[] | null;
}

export interface GenresBookState {
  id: string;
  name: string;
}

export interface ListGenresBookState {
  errors?: string | null;
  genres: GenresBookState[] | null;
}

export interface CommentCreateState {
  comment: CommentProps | null;
  errors: string | null;
}

export interface CommentProps {
  content: string;
  username: string;
  id: number;
}
