import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const {
    result,
    filteredCountries,
    isLoading,
    isError,
    setFilteredCountries,
  } = useFetchData();

  return (
    <>
      {isError && (
        <ShowMessage
          message={"Something went wrong. Please try again"}
        ></ShowMessage>
      )}
      {isLoading && (
        <ShowMessage message={"Loading countries data..."}></ShowMessage>
      )}
      {!isLoading && !isError && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>

          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};

export default Home;
