import { useState } from "react";

export const Snackbar = () => {
  const [shown, setShown] = useState(false);
  return (
    <section className="--text">
      <h2 className="colored-text">Snackbar</h2>
      <p>
        Snackbars inform users of a process that an app has performed or will
        perform. They appear temporarily, towards the bottom of the screen. They
        shouldn’t interrupt the user experience, and they don’t require user
        input to disappear. <br />
        <br />
        <br />
        Snackbars contain some text that is directly related to the operation
        performed. They may contain a text action, but no icons. You can use
        them to display notifications.
        <br />
        <br />
        Snackbars are often used as tooltips/popups to show a message at the
        bottom of the screen.
        <br />
        <br />
        Usage: Only one snackbar may be displayed at a time.
        <br />
        <br />
        Actions: A snackbar can contain a single action. "Dismiss" or "cancel"
        actions are optional.
        <br />
        Low priority snackbars disappear automatically
      </p>
      {shown ? (
        <section className="snackbar colored-text">
          <p className="snackbar--text ">
            <strong>This is a snackbar.</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br />
            <br />
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum
            <br />
            <br />
            <button className="button button--primary">Dismiss</button>
          </p>
          <button onClick={() => setShown(false)} className=" button--dismiss">
            X
          </button>{" "}
        </section>
      ) : (
        <button
          onClick={() => setShown(true)}
          className="button button--primary"
        >
          Show Snackbar
        </button>
      )}
    </section>
  );
};
