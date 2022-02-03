import styled from "styled-components";

const StyledProductForm = styled.div`
  padding: 20px;
  color: cyan;
  font-weight: 900;

  input {
    width: 360px;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    font-size: 1rem;
  }

  label {
    margin-left: 20px;
    font-size: 1.25rem;
  }

  button {
    font-size: 1.25rem;
    padding: 10px;
    border-radius: 20px;
    color: rgb(60, 60, 60);
    margin-left: 20px;
    font-weight: 900;
  }

  h2 {
    color: orange;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    label {
      margin-left: 0;
    }

    input,
    button {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default StyledProductForm;
