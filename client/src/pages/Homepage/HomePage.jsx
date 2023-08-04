import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import TopTrending from "./components/TopTrending/TopTrending";
import ExtraContent from "./components/ExtraContent/ExtraContent";

const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <Categories />
      <TopTrending />
      <ExtraContent />
    </div>
  );
};

export default HomePage;
