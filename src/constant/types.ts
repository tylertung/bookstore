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
  author_id: number;
  author: { name: string };
  genres: [{ name: string }];
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

export interface createBookStates {
  errors: Partial<BookEr> | null;
  success: string | null;
}

export interface ListBookStates {
  errors: Partial<BookEr> | null;
  books: BookStates[] | null;
}

export interface GenresBookState {
  id: string,
  name: string
}

export interface ListGenresBookState {
  errors?: string | null, 
  genres: GenresBookState[] | null,
}
