export const Input = () => {
  return (
    <section className="--text">
      <h2 className="colored-text">Input</h2>
      <p>
        The Input component is a component that is used to get user input in a
        text field. The height and width of the input box can be customised.
        <br />
        Three mostly used textfields are for success, erroe and for entries in
        forms or such
      </p>
      <p className="heading">Input Textbox</p>
      <textarea className="input " placeholder="Enter your name" />
      <p className="heading">Input Textbox after Validation (success)</p>
      <textarea className="input input--valid" placeholder="Enter your name" />
      <p className="heading">Input Textbox after Validation (error)</p>
      <textarea
        className="input input--invalid"
        placeholder="Enter your name"
      />
    </section>
  );
};
