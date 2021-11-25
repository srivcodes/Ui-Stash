export const Badge = () => {
  return (
    <section className="--text">
      <h2 className="colored-text">Badges</h2>
      <p>
        A badge is a visual indicator for numeric values such as tallies and
        scores.. It usually pops up on account of an unread message or a new
        mail. A badge maybe also be used to indicate the status of the component
        for quick recognition. For egsample on skype you see if someone is
        online(as in green), away(as in yellow), in a meeting(as in red), or
        just offline(as in grey). They simply serve as notations for quick
        recognition.
      </p>
      <p className="heading">Notification Badges</p>
      <section style={{ display: "flex" }}>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-shopping-cart"></p>
          <p className="badge--icon">2</p>
        </section>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-comment"></p>
          <p className="badge--icon">5</p>
        </section>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-thumbs-up"></p>
          <p className="badge--icon">16</p>
        </section>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-bell"></p>
          <p className="badge--icon">99+</p>
        </section>
      </section>
      <p className="heading">Status Badges</p>
      <section style={{ display: "flex" }}>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://i.pinimg.com/564x/5a/ca/5e/5aca5e7b84ae163741de81333b93b003.jpg"
          />
          <p
            style={{ color: "green" }}
            className="badge--avatar fas fa-circle"
          ></p>
        </section>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://i.pinimg.com/564x/5a/ca/5e/5aca5e7b84ae163741de81333b93b003.jpg"
          />
          <p
            style={{ color: "grey" }}
            className="badge--avatar fas fa-dot-circle"
          ></p>
        </section>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://i.pinimg.com/564x/5a/ca/5e/5aca5e7b84ae163741de81333b93b003.jpg"
          />
          <p
            style={{ color: "gold", backgroundColor: "black" }}
            className="badge--avatar fas fa-moon"
          ></p>
        </section>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://i.pinimg.com/564x/5a/ca/5e/5aca5e7b84ae163741de81333b93b003.jpg"
          />
          <p
            style={{ color: "red" }}
            className="badge--avatar fas fa-minus-circle"
          ></p>
        </section>
      </section>
    </section>
  );
};
