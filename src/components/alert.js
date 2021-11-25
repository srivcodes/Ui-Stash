export const Alert = () => {
  return (
    <section className="--text">
      <h2 className="colored-text">Alert</h2>
      <p>
        Alerts are used to communicate a state that affects a system, feature or
        page.They provide contextual feedback messages for typical user actions
        with the handful of available and flexible alert messages. The most used
        ones are to show success, to alert, to warn and to show error
      </p>
      <br />
      <p className="alert alert--success ">
        <i class="fas fa-check-circle"></i> This is a success alert -- the
        payment was successfully completed!
      </p>
      <p className="alert alert--info ">
        <i class="fas fa-info-circle"></i> This is a info alert -- you have a
        new notification! !
      </p>
      <p className="alert alert--warning ">
        <i class="fas fa-exclamation-circle"></i> This is a warning alert --
        your meeting will end in 1 minute!
      </p>
      <p className="alert alert--error ">
        <i class="fas fa-times-circle"></i> This is a error alert -- oops..the
        payment was not processed!
      </p>
    </section>
  );
};
