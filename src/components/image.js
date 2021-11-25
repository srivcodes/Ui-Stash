export const Image = () => {
  return (
    <section className="--text">
      <h2 className="colored-text">Image</h2>
      <p>
        The Image component is used to display images.Responsive images will
        automatically adjust to fit the size of the screen.And round images are
        used in some of the most used social media sites to display the profile
        picture.
      </p>
      <p className="heading">Responsive Image</p>
      <img
        className="image--responsive"
        alt=""
        src="https://i.pinimg.com/564x/cc/db/8f/ccdb8f02a270461e3bcb6bba1943ee01.jpg"
      />
      <p className="heading">Round Image</p>
      <div className="image--round ">
        <img
          alt=""
          src="https://i.pinimg.com/564x/cc/db/8f/ccdb8f02a270461e3bcb6bba1943ee01.jpg"
        />
      </div>
    </section>
  );
};
