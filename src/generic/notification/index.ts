import { notification } from "antd";

type NotificationType =
  | "login"
  | "register"
  | "passowrd"
  | 406
  | 409
  | "add"
  | "delete"
  | "coupon"
  | "coupon_404"
  | "succses_coupon"
  | "shop_not"
  | "like"
  | "disLike"
  | "edit"
  | "edit_adress"
  | "follow"
  | "un-follow";

const notificationApi = () => {
  const nottify = (props: NotificationType) => {
    switch (props) {
      case "login":
        return notification.success({ message: "Login succsesful" });
      case "register":
        return notification.success({ message: "Register succsesful" });
      case "passowrd":
        return notification.error({
          message: "Confirm password is not match !",
        });
      case "add":
        return notification.success({
          message: "Add to card !",
        });
      case "delete":
        return notification.success({
          message: "Delete to card !",
        });
      case 406:
        return notification.error({
          message:
            "User with same email already exists. Please make sure email is unique amd valid.",
        });
      case 409:
        return notification.error({ message: "Login or passowr wrong" });
      case "coupon":
        return notification.error({ message: "Place eneter coupon" });
      case "coupon_404":
        return notification.error({ message: "Coupon is not defined !" });
      case "succses_coupon":
        return notification.success({ message: "Coupon success !" });
      case "shop_not":
        return notification.error({ message: "Please place an order !" });
      case "like":
        return notification.success({ message: "Added like !" });
      case "disLike":
        return notification.success({ message: "Deleted like !" });
      case "edit":
        return notification.success({ message: "Edited user !" });
      case "edit_adress":
        return notification.success({ message: "Edited Adress and user !" });
      case "follow":
        return notification.success({ message: "Follow user !" });
      case "un-follow":
        return notification.success({ message: "Un follow user !" });
      default:
        break;
    }
  };
  return nottify;
};

export { notificationApi };
