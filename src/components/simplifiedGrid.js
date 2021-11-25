export const SimplifiedGrid = () => {
  return (
    <section>
      <h2 className="colored-text">Simplified Grid</h2>
      <p className="--text">
        The CSS Grid Layout Module offers a grid-based layout system, with rows
        and columns, making it easier to design web pages without having to use
        floats and positioning.
        <br /> <br />A grid layout consists of a parent element, with one or
        more child elements.Below shown are Two used formats
      </p>
      <p className="colored-text heading">Two Items Grid</p>
      <section className="grid-2">
        <div className="grid-item">
          grid <br /> element
        </div>
        <div className="grid-item">
          grid <br /> element
        </div>
      </section>
      <p className="colored-text heading">Three Items Grid</p>
      <section className="grid-3">
        <div className="grid-item">
          grid <br /> element
        </div>
        <div className="grid-item">
          grid <br /> element
        </div>
        <div className="grid-item">
          grid <br /> element
        </div>
      </section>
    </section>
  );
};
