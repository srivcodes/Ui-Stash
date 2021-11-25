import { useState } from "react";

export const Modal = () => {
  const [shown, setShown] = useState(false);
  return (
    <section>
      <h2 className="colored-text">Modal</h2>
      <p className="--text">
        A modal dialog is a window overlaid on either the primary window or
        another dialog window. Content behind a modal dialog is inert, meaning
        that users cannot interact with it.
        <br />
        <br />
        A modal (also called a modal window or lightbox) is a web page element
        that displays in front of and deactivates all other page content. To
        return to the main content, the user must engage with the modal by
        completing an action or by closing it.
        <br />
        <br />
        Modals are often used to direct users’ attention to an important action
        or piece of information on a website or application. The purpose of
        modals can be summed up in one word: focus.
        <br />
        <br />
        If you need visitors to focus on something simple, a modal window is one
        of the most effective means to do so. <br />
        <br />
        Users must either close the modal, or complete a specific action within
        it (e.g., reading a message and clicking “OK”, filling out a form,
        etc.).
      </p>
      {shown ? (
        <section className="modal">
          <section className="header">
            <h3>Modal title</h3>
          </section>
          <section className="main">
            <p>
              Hey!
              <br />
              This is a sample Modal.
            </p>
          </section>
          <section className="footer">
            <button
              onClick={() => setShown(false)}
              className="button button--primary"
            >
              close
            </button>
            <button className="button button--secondary">
              secondary action
            </button>
          </section>
          <button onClick={() => setShown(false)} className="button--dismiss">
            X
          </button>
        </section>
      ) : (
        <button
          onClick={() => setShown(true)}
          className="button button--primary"
        >
          Show Modal
        </button>
      )}
      <br />
    </section>
  );
};
