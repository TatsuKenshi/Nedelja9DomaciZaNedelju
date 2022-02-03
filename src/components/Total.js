import StyledTotal from "../styles/StyledTotal";

const Total = ({ total, tax }) => {
  let completeTotal = total + tax;

  return (
    <StyledTotal>
      <h2>Checkout</h2>
      <hr />
      <p>Base Price: ${total.toFixed(2)} </p>
      <p>TAX (15%): {tax.toFixed(2)} </p>
      <p>Total: {completeTotal.toFixed(2)} </p>
    </StyledTotal>
  );
};

export default Total;
