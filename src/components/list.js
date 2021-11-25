export const List = () => {
  return (
    <section>
      <h2 className="colored-text">List</h2>
      <p className="--text">
        Lists are continuous, vertical indexes of text or images.
        <br />
        <br />
        They are composed of items containing primary and supplemental actions,
        which are represented by icons and text.
      </p>
      <p className="--text heading">Spaced List</p>
      <ul className="list--spaced__container">
        <li className="list list--spaced ">List item 1</li>
        <li className="list list--spaced ">List item 2</li>
        <li className="list list--spaced ">List item 3</li>
        <li className="list list--spaced ">List item 4</li>
        <li className="list list--spaced ">List item 5</li>
      </ul>
      <p className="--text heading">Stacked List</p>
      <ul className="list--stacked__container">
        <li className="list list--stacked">List item 1</li>
        <li className="list list--stacked">List item 2</li>
        <li className="list list--stacked">List item 3</li>
        <li className="list list--stacked">List item 4</li>
        <li className="list list--stacked">List item 5</li>
      </ul>
    </section>
  );
};
