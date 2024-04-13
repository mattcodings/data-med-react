import CheckoutInformationFormTabOne from "./CheckoutPage/TabOneClientInfo";
import CheckoutPaymentFormTabTwo from "./CheckoutPage/TabTwoPaymentInfo";
import CheckoutReviewFormTabThree from "./CheckoutPage/TabThreeReviewCheckout";

const CheckoutTabs = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered lg:w-[70%] mx-auto">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab bg-primary border-primary border-2 rounded-t-xl text-white "
        aria-label="Client Information"
        defaultChecked
      />
      abc
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6 !col-span-3"
      >
        <CheckoutInformationFormTabOne />
      </div>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab bg-primary border-primary border-2 rounded-t-xl text-white"
        aria-label="Payment Information"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6 !col-span-3"
      >
        <CheckoutPaymentFormTabTwo />
      </div>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab bg-primary border-primary border-2 rounded-t-xl text-white"
        aria-label="Review and Checkout"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6 !col-span-3"
      >
        <CheckoutReviewFormTabThree />
      </div>
    </div>
  );
};
export default CheckoutTabs;
