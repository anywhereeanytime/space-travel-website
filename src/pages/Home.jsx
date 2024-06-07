import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="grid-container grid-container--home">
      <div>
        <h1 className="text-clrLight text-fs500 font-sansCond uppercase tracking-letterSpacing1">
          So, you want to travel to
          <span className="block text-fs900 font-serif text-clrWhite pb-0 ">
            Space
          </span>
        </h1>

        <p className="font-sansNormal text-fs400  text-clrWhite mb-8 sm:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="md:justify-self-end">
        <Link
          to="destination.html"
          className="large-button uppercase font-serif text-clrDark bg-white"
        >
          Explore
        </Link>
      </div>
    </main>
  );
};

export default Home;
