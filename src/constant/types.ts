export interface UserProps {
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

export interface LoginProps {
  errors: Partial<UserEr> | null;
  userInfo: UserProps | null;
}

export interface BookProps {
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
export interface OneBookProps {
  errors: Partial<BookEr> | null;
  book: BookProps | null;
}

export interface createBookProps{
  errors: Partial<BookEr> | null,
  success: string | null
}

export interface ListBookProps {
  errors: Partial<BookEr> | null;
  books: BookProps[] | null;
}
