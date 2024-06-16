import BackgroundWrapper from "../components/BackgroundWrapper";
import PageTitle from "../components/PageTitle";
import SearchForm from "../components/SearchForm";

const Home = ({ setWeatherData }) => {
  return (
    <BackgroundWrapper>
      <div className="row justify-content-center align-items-center">
        <PageTitle title={"Tell me about..."} />
        <div className="col-7 ">
          <SearchForm setWeatherData={setWeatherData} />
        </div>
      </div>
    </BackgroundWrapper>
  );
};
export default Home;
