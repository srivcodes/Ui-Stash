export const Card = () => {
  return (
    <section>
      <h2 className="colored-text">Card</h2>
      <p className="--text">
        Cards are surfaces that display content and actions on a single topic.
        <br />
        <br />
        They should be easy to scan for relevant and actionable information.
        Elements, like text and images, should be placed on them in a way that
        clearly indicates hierarchy.
      </p>
      <p className="--text heading">Card with badge</p>
      <section className="card">
        <img
          className="image--responsive card__image"
          alt=""
          src="https://i.pinimg.com/564x/17/e9/65/17e96536e7a7c5084fba5a3a1e9b5bc9.jpg"
        />
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="card__badge">New</p>
        <button className="button button--primary">Add to Cart</button>
      </section>
      <p className="heading --text">Card with Dismiss button</p>
      <section className="card">
        <img
          className="image--responsive card__image"
          alt=""
          src="https://i.pinimg.com/564x/17/e9/65/17e96536e7a7c5084fba5a3a1e9b5bc9.jpg"
        />
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button--dismiss">X</button>
        <button className="button button--primary">Add to Cart</button>
      </section>

      <p className="heading --text">Text Only Card</p>
      <section className="card">
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <p className="heading colored-text">Horizontal Card</p>
      <section className="card--horizontal">
        <img
          className=" card__horizontal__image"
          alt=""
          src="https://i.pinimg.com/564x/17/e9/65/17e96536e7a7c5084fba5a3a1e9b5bc9.jpg"
        />
        <section className="card">
          <h3 className="card__title">title</h3>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="button--dismiss">X</button>
          <button className="button button--primary">Functional Button</button>
        </section>
      </section>
      <p className="heading colored-text">Card with Shadow</p>
      <section className="card shadow">
        <img
          className="image--responsive card__image"
          alt=""
          src="https://i.pinimg.com/564x/17/e9/65/17e96536e7a7c5084fba5a3a1e9b5bc9.jpg"
        />
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button--dismiss">X</button>
        <button className="button button--primary"> Functional button</button>
      </section>
    </section>
  );
};
