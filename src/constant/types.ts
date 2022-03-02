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

interface Er {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginProps {
  errors: Partial<Er> | null;
  userInfo: UserProps | null;
}

export interface BookProps {
  id: number;
  title: string;
  author_id: number;
  author: { name: string };
  genres: [{ name: string }];
}

export interface ListBookProps{
  errors: Partial<Er> | null,
  books: BookProps[] | null,
}
