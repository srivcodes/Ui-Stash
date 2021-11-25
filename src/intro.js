export const Intro = () => {
  return (
    <section className="intro">
      <h2 className="colored-text">hii!</h2>
      <p className="--text">
        Welcome to Ui-Stash.Are you wondering how to use our Ui in your website?
        just paste the below line in your html document or hit the download
        button to download the css file.
      </p>

      <code>
        {"<"}link rel="stylesheet" href="#" /{">"}
      </code>
      <a href="#" download className="button button--primary">
        Download CSS
      </a>
      <h2 className="colored-text">How to use Ui-Stash?</h2>
      <p className="--text">
        Ui-Stash is a Component Library which has almost all the basic
        components you require for designing your website. Hence you{" "}
        <strong>save a loooot of time</strong> as you don't have to write your
        CSS from scratch!...or copy each line from a tutorial!
        <br />
        <br />
        It is small and hence <strong>loads faster and super efficient</strong>.
        <br />
        <br />
        It has predifined{" "}
        <strong>variables for colors, margins and padding</strong>, so you don't
        have to provide them for each element. Just set them once and all the
        components will modify themselves.
      </p>
      <h2 className="colored-text">About Ui-Stash and mee!</h2>
      <p className="--text">
        I am a developer based out India. I am learning web developement. I am
        making projects with tasteful Ui and I thought that there should be a
        stash from where one can just pick up Ui components and use them
        anywhere. I went around the most used websites and picked up some of the
        vital Ui components and I have put them up here...hope you found it
        helpful!!
      </p>
    </section>
  );
};
