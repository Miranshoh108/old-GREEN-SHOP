import {
  AdviceMockItemType,
  FooterLinksType,
  HeroSliderType,
  InfoMockItemType,
  PathProfileType,
  PostMockItemType,
  TitleCategoryType,
  UserBodyTitleTyoe,
} from "../@types";

import info from "../assets/imgs/info.png";
import info1 from "../assets/imgs/info1.png";
import vektor from "../assets/imgs/vektor.png";
import post from "../assets/imgs/post.png";
import post1 from "../assets/imgs/post1.png";
import post2 from "../assets/imgs/post2.png";
import post3 from "../assets/imgs/post3.png";
import advice from "../assets/imgs/advice.png";
import advice1 from "../assets/imgs/advice1.png";
import advice2 from "../assets/imgs/advice2.png";
import Wishlist from "../components/profile/profile-pages/wishlist";
import * as Icons from "@ant-design/icons";

import Order from "../components/profile/profile-pages/order";
import Adress from "../components/profile/profile-pages/adress";
import ProductsProfile from "../components/profile/profile-pages/products";
import Details from "../components/profile/profile-pages/details";
import About from "../components/user/user-body/about";
import Products from "../components/home-component/store-products/products";
import Posts from "../components/home/posts/posts";
import Likes from "../components/user/user-body/likes";
import Followers from "../components/user/user-body/followers";

export const hero_mock: HeroSliderType[] = [
  {
    id: 0,
    title: "Le’s Make a Better",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 1,
    title: "LET'S LIVE IN A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "LE'TS START",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 2,
    title: "LET'S OBSERVE A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "GET CREDITS",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
];

export const title_category: TitleCategoryType[] = [
  {
    id: 1,
    title: "All Plants",
    label: "all-plants",
  },
  {
    id: 2,
    title: "New Arrivals",
    label: "new-arrivals",
  },
  {
    id: 3,
    title: "Sale",
    label: "sale",
  },
];

export const info_item: InfoMockItemType[] = [
  {
    id: 0,
    title: "Summer cactus & succulents",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info,
    vektor,
  },
  {
    id: 1,
    title: "STYLING TRENDS & MUCH MORE",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info1,
    vektor,
  },
];

export const post_item: PostMockItemType[] = [
  {
    id: 1,
    title: "Cactus & Succulent Care Tips",
    subTitle: "September 12  I Read in 6 minutes",
    description:
      "Cacti are succulents are easy care plants for any home or patio. ",
    img: post,
  },
  {
    id: 2,
    title: "Top 10 Succulents for Your Home",
    subTitle: "September 12  I Read in 6 minutes",
    description: "Best in hanging baskets. Prefers medium to high light.",
    img: post1,
  },
  {
    id: 3,
    title: "Cacti & Succulent Care Tips",
    subTitle: "September 15  I Read in 3 minutes",
    description:
      "Cacti and succulents thrive in containers and because most are.. ",
    img: post2,
  },
  {
    id: 4,
    title: "Best Houseplants Room by Room",
    subTitle: "September 15  I Read in 2 minutes",
    description: "The benefits of houseplants are endless. In addition to..",
    img: post3,
  },
];

export const footer_links: FooterLinksType[] = [
  {
    id: 1,
    title: "My Account",
    link1: "My Account",
    link2: "Address",
    link3: "Wishlist",
  },
  {
    id: 2,
    title: "Categories",
    link1: "House Plants",
    link2: "Potter Plants",
    link3: "Seeds",
    link4: "Small Plants",
    link5: "Accessories",
  },
];

export const advice_item: AdviceMockItemType[] = [
  {
    id: 0,
    title: "Garden Care",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice,
    border: false,
  },
  {
    id: 1,
    title: "Plant Renovation",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice1,
    border: true,
  },
  {
    id: 2,
    title: "Watering Graden",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice2,
    border: true,
  },
];

export const path_profile: PathProfileType[] = [
  {
    id: 1,
    path: "",
    Component: Details,
    Icon: Icons.UserOutlined,
    title: "Account Details",
  },
  {
    id: 2,
    path: "my-products",
    Component: ProductsProfile,
    Icon: Icons.ShoppingOutlined,
    title: "My Products",
  },
  {
    id: 3,
    path: "address",
    Component: Adress,
    Icon: Icons.EnvironmentOutlined,
    title: "Address",
  },
  {
    id: 4,
    path: "wishlist",
    Component: Wishlist,
    Icon: Icons.HeartOutlined,
    title: "Wishlist",
  },
  {
    id: 5,
    path: "track-order",
    Component: Order,
    Icon: Icons.DashboardOutlined,
    title: "Track Order",
  },
];

export let user_body_title: UserBodyTitleTyoe[] = [
  {
    id: "1",
    title: "About",
    Component: About,
  },
  {
    id: "2",
    title: "Products",
    Component: Products,
  },
  {
    id: "3",
    title: "Posts",
    Component: Posts,
  },
  {
    id: "4",
    title: "Likes",
    Component: Likes,
  },
  {
    id: "5",
    title: "Followers",
    Component: Followers,
  },
];
