export interface FieldType {
  email?: string;
  password?: string;
}
export interface RegisterType {
  name?: string;
  surname: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

export interface WishListItemType {
  flower_id: string;
  route_path: string;
}

interface BillingAdres {
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
}
export interface AuthUser {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  wishlist?: WishListItemType[];
  username?: string;
  billing_address?: BillingAdres;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}

export interface HeroSliderType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  big_img_url: string;
  small_img_url: string;
  buttonText: string;
}
export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: number;
  _id: string;
}
export interface DiscounType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}
export interface CartType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: string[];
  title: string;
  views: number;
  __v: number;
  _id: string;
  count?: number | undefined;
  userPrice?: number;
}
export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}
export interface DataType {
  isLoading: boolean;
  isError: boolean;
  data?: CartType;
}
export interface InfoMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  vektor: string;
}
export interface PostMockItemType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  img: string;
}
export interface FooterLinksType {
  id: number;
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
  link5?: string;
}
export interface AdviceMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  border: boolean;
}
export interface CouponType {
  code: string;
  discount_for: number;
  id: number;
  title: string;
}
export interface BlogType {
  content: string;
  created_at: string;
  created_by: string;
  reaction_length: number;
  short_description: string;
  title: string;
  views: number;
  __v: number;
  _id: string;
}
export interface BlogTypeApi {
  data?: BlogType[];
  isLoading: boolean;
  isError: boolean;
}
export interface BlogTypeApiItem {
  data?: BlogType;
  isLoading: boolean;
  isError: boolean;
}
export interface UserTypeApi {
  data?: AuthUser;
  isLoading: boolean;
  isError: boolean;
}

export interface PathProfileType {
  id: number;
  title: string;
  path: string;
  Component: React.FC;
  Icon: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
}
export interface MakeOrderType {
  name: string;
  surname: string;
  country: string;
  street: string;
  state: string;
  email: string;
  zip: string;
  appartment: string;
  town: string;
  phone_number: string;
  comment: string;
  payment_method: string;
}

export interface OrderType {
  billing_address: BillingAdres;
  created_at: string;
  created_by: string;
  extra_shop_info: {
    total: number;
    method: string;
  };
  shop_list: CartType[];
  _id: string;
}

export interface UserBodyTitleTyoe {
  id: string;
  title: string;
  Component: React.FC;
}
