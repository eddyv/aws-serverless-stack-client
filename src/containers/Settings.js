import API from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import { onError } from "../libs/errorLib";
import "./Settings.css"

export default function Settings() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    setStripe(window.Stripe(config.STRIPE_PUB_KEY));
  }, []);

  function billUser(details) {
    return API.post("notes", "/billing", {
      body: details,
    });
  }

  async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      onError(error);
      return;
    }
    setIsLoading(true);

    try {
      await billUser({
        storage,
        source: token.id,
      });
      alert("Your card has been charged successfully!");
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  console.log(isLoading);

  return (
    <div className="Settings">
      <StripeProvider stripe={stripe}>
        <Elements
          fonts={[
            {
              cssSrc:
                "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
            },
          ]}
        >
          <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
        </Elements>
      </StripeProvider>
    </div>
  );
}
