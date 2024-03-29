export interface IWelcome {
  garages: IGarage[];
}

export interface IGarage {
  id: string;
  idUser: string;
  name: string;
  address: string;
  country: string;
  province: string;
  city: string;
  zipCode: string;
  capacity: number;
  amount: number;
  price: number;
  whitConfirmation: boolean;
  available: boolean;
  coordinates: string;
  rating: number;
  schedule: Record<
    string,
    { name: string; schedule: { start: string; end: string }[] }
  >;
  createdAt: string;
  updatedAt: string;
  id_user: string;
  images: Image[];
}

export interface Image {
  id: string;
  route: string;
}

export interface IGarageSearchParams {
  location: string;
  startDate: string;
  endDate: string;
}

export interface ISearchGarage {
  id: string;
  name: string;
  address: string;
  country: string;
  province: string;
  city: string;
  zipCode: string;
  capacity: number;
  amount: number;
  price: number;
  whitConfirmation: boolean;
  available: boolean;
  coordinates: string;
  rating: null;
  user: User;
  images: []
}

export interface User {
  id: string;
  name: string;
  identity: string;
  email: string;
  phone: string;
  role: string;
  rating: null;
  image: null;
}

export interface IFavoriteGarage {
  id: string;
  idUser: string;
  idGarage: string;
  createdAt: string;
  updatedAt: string;
  garage: IGarage;
}

export type Schedule = Record<
  string,
  {
    name: string;
    schedule: ScheduleElement[];
  }
>;

export interface ScheduleElement {
  start: string | null;
  end: string | null;
}

export interface CreateGaraje {
  [key: string]:
    | string
    | File
    | boolean
    | Date
    | File[]
    | Schedule
    | Blob
    | null;
  idUser: string;
  name: string;
  address: string;
  country: string;
  province: string;
  city: string;
  zipCode: string;
  capacity: string;
  price: string;
  whitConfirmation: boolean;
  coordinates: string;
  images: File[];
  type: string | null;
  schedule: Schedule;
}
