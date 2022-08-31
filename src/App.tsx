import { useState } from "react";
import CreditCard from "./components/CreditCard";
import Form from "./components/Form";

export interface CardI {
  cardHolder: string
  cardNumber: string
  expMonth: number
  expYear: number
  cvc: number
}

function App() {

  const [card, setCard] = useState<CardI>({
    cardHolder: '',
    cardNumber: "",
    expMonth: 12,
    expYear: 12,
    cvc: 123
  })
  return (
    <div className="creditcard">
      <CreditCard />
      <Form setCard={setCard} />
    </div>
  );
}

export default App;
