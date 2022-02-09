import React, { useState } from "react";

// function BetCounter() {
//     //Star with 100$ for bets
//   const [bet, setBet] = useState(100);

//   const betValue = document.getElementById("changeBet").value;

//   function changeBet() {
//     setBet(prevBet =>  prevBet - 10);
//   }

//   return (
//     <>
//     <div>
//       <span>{bet}</span>
//       <label htmlFor="">Apuesta</label>
//       <input type="number" id="changeBet" onChange={changeBet} />
//       </div>
//     </>
//   );
// }
// function changeCounter() {
//   //Star with 100$ for bets
//   const [bet, setBet] = useState(100);
//   function changeBet() {
//         setBet(prevBet =>  prevBet - 10);
//       }
// }

const BetCounter = ({onChange}) => (
  <div className="betcounter">
    <span>2</span>
    <label htmlFor="" >Apuesta</label>
    <input type="number" id="changeBet" onChange={onChange} step="10" />
  </div>
);

export default BetCounter;

// export default BetCounter;
