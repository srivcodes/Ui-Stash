export const Slider = () => {
  return (
    <section className="--text">
      <h2 className="colored-text">Slider</h2>
      <p>
        Sliders allow users to view and select a value (or range) from the range
        along a bar. They’re ideal for adjusting settings such as volume and
        brightness, or for applying image filters.
        <br />
        <br />
        Sliders can use icons on both ends of the bar to represent a numeric or
        relative scale. The range of values or the nature of the values, such as
        volume change, can be communicated with icons.
        <br />
        <br />
        Changes made with sliders are immediate, allowing the user to make
        slider adjustments while determining a selection. Sliders shouldn’t be
        used to adjust settings with any delay in providing user feedback.
      </p>
      <br />
      <div>
        <i class="fas fa-volume-up"></i>
        <br />
        <input
          type="range"
          min="0"
          max="100"
          onchange="rangevalue.value=value"
        />
        <br />
      </div>
      <br />
      <br />
      <div>
        <i class="fas fa-play"></i>
        <br />
        <input
          type="range"
          min="0"
          max="100"
          onchange="rangevalue.value=value"
        />
        <br />
      </div>
    </section>
  );
};
