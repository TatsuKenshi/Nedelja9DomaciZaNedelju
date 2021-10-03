import StyledTotal from "../styles/StyledTotal"

const Total = ({
  total,
  tax
}) => {
    let completeTotal = total + tax
    
  return (
    <StyledTotal>
      <h2>Kasa</h2>
      <hr />
      <p>Cena bez PDV-a: {total.toFixed(2)} </p>
      <p>PDV (15%): {tax.toFixed(2)} </p>
      <p>Ukupna cena: {completeTotal.toFixed(2)} </p>
    </StyledTotal>
  );
};

export default Total;
