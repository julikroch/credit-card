import { useState } from "react";
import CreditCard from "./components/CreditCard";
import Form from "./components/Form";

export interface CardI {
  cardHolder: string
  cardNumber: string
  expMonth: string
  expYear: string
  cardCvc: string
}

function App() {

  const [card, setCard] = useState<CardI>({
    cardHolder: 'Jane Doe',
    cardNumber: "XXXX XXXX XXXX XXXX",
    expMonth: 'XX',
    expYear: 'XX',
    cardCvc: 'XXX'
  })
  return (
    <div className="creditcard">
      <CreditCard
        {...card}
      />
      <Form
        card={card}
        setCard={setCard}
      />
    </div>
  );
}

export default App;
