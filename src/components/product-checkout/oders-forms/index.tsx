// import { Form, Input, Radio } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import { useReduxDispatch } from "../../../hooks/useRedux";
// import { setAuthorizationModalVisibility } from "../../../redux/modal-slice";

// const OrdersForms = () => {
//   const dispatch = useReduxDispatch();
//   const radio_style: string =
//     "bordant-radio-wrapper ant-radio-wrapper-checked ant-radio-wrapper-in-form-item border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg css-k7429zer";
//   return (
//     <Form layout="vertical" name="control-hooks">
//       <div className="grid grid-cols-2 gap-5">
//         <div>
//           <Form.Item name="name" label="Name" rules={[{ required: true }]}>
//             <Input placeholder="Type your first name..." />
//           </Form.Item>
//           <Form.Item
//             name="country"
//             label="Country / Region"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Type your first country..." />
//           </Form.Item>
//           <Form.Item
//             name="street"
//             label="Streed Address"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Type your first street..." />
//           </Form.Item>
//           <Form.Item name="state" label="State" rules={[{ required: true }]}>
//             <Input placeholder="Type your first state..." />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email adress"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Type your first email..." />
//           </Form.Item>
//           <Form.Item
//             name="payment_method"
//             label="Payment Method"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter Payment Method",
//               },
//             ]}
//           >
//             <Radio.Group className="flex flex-col gap-3">
//               <Radio
//                 className={`${radio_style}`}
//                 value={"other-payment-methods"}
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
//                   alt=""
//                 />
//               </Radio>
//               <Radio
//                 className={`${radio_style}`}
//                 value={"dorect-bank-transfer"}
//               >
//                 Dorect bank transfer
//               </Radio>
//               <Radio className={`${radio_style}`} value={"cash-on-delivery"}>
//                 Cash on delivery
//               </Radio>
//             </Radio.Group>
//           </Form.Item>
//         </div>
//         <div>
//           <Form.Item
//             name="last_name"
//             label="Last name"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Type your first last name..." />
//           </Form.Item>
//           <Form.Item
//             name="town"
//             label="Town / City"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Type your first town..." />
//           </Form.Item>
//           <Form.Item label="" name="appartment" rules={[{ required: true }]}>
//             <Input
//               className="mt-[30px]"
//               placeholder="Type your first appartment..."
//             />
//           </Form.Item>
//           <Form.Item name="zip" label="Zip" rules={[{ required: true }]}>
//             <Input placeholder="Type your first last zip..." />
//           </Form.Item>
//           <Form.Item
//             name="phone_number"
//             label="Phone number"
//             rules={[{ required: true }]}
//           >
//             <Input
//               addonBefore={"+998"}
//               placeholder="Type your first last phone number..."
//             />
//           </Form.Item>
//         </div>
//       </div>
//       <Form.Item label="Comment" name="comment" rules={[{ required: true }]}>
//         <TextArea rows={10} placeholder="Type your first appartment..." />
//       </Form.Item>
//       <button
//         onClick={() =>
//           dispatch(
//             setAuthorizationModalVisibility({ open: true, isLoading: false })
//           )
//         }
//         className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-full h-[40px]"
//       >
//         Place order
//       </button>
//     </Form>
//   );
// };

// export default OrdersForms;

import { Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../redux/modal-slice";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import type { AuthUser, MakeOrderType } from "../../../@types";
import { LoadingOutlined } from "@ant-design/icons";
import { useMakeOrderQuery } from "../../../hooks/useQuery/useQueryActions";
import OrderModal from "../../modals/order-modal";

const OrdersForms = () => {
  const dispatch = useReduxDispatch();
  const auth: AuthUser = useAuthUser()() ?? {};
  const { orderModalVisiblty } = useReduxSelector((state) => state.modalSlice);
  const { shop } = useReduxSelector((state) => state.shopSlice);
  const total_price = shop.reduce(
    (acc, value) => (acc += Number(value.userPrice)),
    16
  );
  const isAuth: boolean = useIsAuthenticated()();
  const { mutate } = useMakeOrderQuery();

  const makeOrder = async (e: MakeOrderType) => {
    const extra_shop_info = {
      total: total_price,
      method: e.payment_method,
    };
    await mutate({ shop_list: shop, billing_address: e, extra_shop_info });
  };

  const radio_style: string =
    "bordant-radio-wrapper ant-radio-wrapper-checked ant-radio-wrapper-in-form-item border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg css-k7429zer";
  return (
    <Form
      onFinish={makeOrder}
      fields={[
        { name: ["name"], value: auth.name },
        { name: ["surname"], value: auth.surname },
        { name: ["country"], value: auth.billing_address?.country },
        { name: ["street"], value: auth.billing_address?.street_address },
        { name: ["state"], value: auth.billing_address?.state },
        { name: ["email"], value: auth.email },
        { name: ["zip"], value: auth.billing_address?.zip },
        {
          name: ["appartment"],
          value: auth.billing_address?.additional_street_address,
        },
        { name: ["town"], value: auth.billing_address?.town },
        { name: ["phone_number"], value: auth.phone_number },
      ]}
      layout="vertical"
      name="control-hooks"
    >
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Type your first name..." />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country / Region"
            rules={[{ required: true }]}
          >
            <Input placeholder="Type your first country..." />
          </Form.Item>
          <Form.Item
            name="street"
            label="Streed Address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Type your first street..." />
          </Form.Item>
          <Form.Item name="state" label="State" rules={[{ required: true }]}>
            <Input placeholder="Type your first state..." />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email adress"
            rules={[{ required: true }]}
          >
            <Input placeholder="Type your first email..." />
          </Form.Item>
          <Form.Item
            name="payment_method"
            label="Payment Method"
            rules={[
              {
                required: true,
                message: "Please enter Payment Method",
              },
            ]}
          >
            <Radio.Group className="flex flex-col gap-3">
              <Radio
                className={`${radio_style}`}
                value={"other-payment-methods"}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                  alt=""
                />
              </Radio>
              <Radio
                className={`${radio_style}`}
                value={"dorect-bank-transfer"}
              >
                Dorect bank transfer
              </Radio>
              <Radio className={`${radio_style}`} value={"cash-on-delivery"}>
                Cash on delivery
              </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name="surname"
            label="Last name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Type your first last name..." />
          </Form.Item>
          <Form.Item
            name="town"
            label="Town / City"
            rules={[{ required: true }]}
          >
            <Input placeholder="Type your first town..." />
          </Form.Item>
          <Form.Item label="" name="appartment" rules={[{ required: true }]}>
            <Input
              className="mt-[30px]"
              placeholder="Type your first appartment..."
            />
          </Form.Item>
          <Form.Item name="zip" label="Zip" rules={[{ required: true }]}>
            <Input placeholder="Type your first last zip..." />
          </Form.Item>
          <Form.Item
            name="phone_number"
            label="Phone number"
            rules={[{ required: true }]}
          >
            <Input
              addonBefore={"+998"}
              placeholder="Type your first last phone number..."
            />
          </Form.Item>
        </div>
      </div>
      <Form.Item label="Comment" name="comment" rules={[{ required: true }]}>
        <TextArea rows={10} placeholder="Type your first appartment..." />
      </Form.Item>
      <button
        onClick={() => {
          if (!isAuth) {
            dispatch(
              setAuthorizationModalVisibility({ open: true, isLoading: false })
            );
          }
        }}
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-full h-[40px]"
      >
        {orderModalVisiblty.isLoading ? <LoadingOutlined /> : "Place order"}
      </button>
      <OrderModal />
    </Form>
  );
};

export default OrdersForms;
