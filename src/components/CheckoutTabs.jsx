import CheckoutInformationFormTabOne from "./CheckoutPage/CheckoutInformationFormTabOne";
import CheckoutPaymentFormTabTwo from "./CheckoutPage/CheckoutPaymentFormTabTwo";
import CheckoutReviewFormTabThree from "./CheckoutPage/CheckoutReviewFormTabThree";

const CheckoutTabs = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Client Information"
        defaultChecked
      />
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
        className="tab"
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
        className="tab"
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
