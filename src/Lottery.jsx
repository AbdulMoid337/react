import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition}) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket)
  const newTicket = () => {
    setTicket(genTicket(n)); 
  };

  return (
    <div>
      <h2>Lottery Game</h2>
      <Ticket ticket={ticket} />
      <Button  action={newTicket}/>
      <h3>{isWinning ? "Congratulations!! You won" : "Try again!"}</h3>
    </div>
  );
}
