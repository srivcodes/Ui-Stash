export const Avatar = () => {
  return (
    <section className="--text">
      <h2 className="colored-text">Avatar</h2>
      <p>
      The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.
        <br/><br/>
        P.S Box-shadow property can have values such as none, offset-x|offset-y|color, 
        offset-x|offset-y|blur-raduis|color,<br/>
        inset|offset-x|offset-y|color one can add any number of shadows seperated by a ",". 
        Also global keywords as in inherit,
        initial, revert and unset may be used.
      </p>
      <p className="heading">Image Avatar - to display profile pictures</p>
      <section style={{ display: "flex" }}>
        <img
          className=" avatar "
          alt=""
          src="https://i.pinimg.com/564x/8e/85/8f/8e858f67ea2e99e0f9b385bc1805b2ff.jpg"
        />
        <img
          className=" avatar1 "
          alt=""
          src="https://i.pinimg.com/564x/8e/85/8f/8e858f67ea2e99e0f9b385bc1805b2ff.jpg"
        />
        <img
          className=" avatar2 "
          alt=""
          src="https://i.pinimg.com/564x/8e/85/8f/8e858f67ea2e99e0f9b385bc1805b2ff.jpg"
        />
      </section>
      <p className="heading">Letter Avatar - displays initials</p>
      <section style={{ display: "flex" }}>
        <p
          style={{ "--primary-color": "grey" }}
          className="avatar avatar--letter "
        >
          SV
        </p>
        <p
          style={{ "--primary-color": "green" }}
          className="avatar avatar--letter "
        >
          PG
        </p>
        <p
          style={{ "--primary-color": "orange" }}
          className="avatar avatar--letter "
        >
          N
        </p>
      </section>
      <p className="heading">Fallback Icon Avatar</p>
      <section style={{ display: "flex" }}>
        <p
          style={{ "--primary-color": "black" }}
          className="avatar avatar--fallback-icon fas fa-user-circle"
        ></p>
        <p className="avatar avatar--fallback-icon fas fa-user-circle"></p>
      </section>
    </section>
  );
};
