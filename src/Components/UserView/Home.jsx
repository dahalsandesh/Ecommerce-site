import Header from "./Header&Footer/Header";
import Footer from "./Header&Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-5xl mt-20 mb-10 text-center">SanSam</h1>
        <h2 className="text-3xl mt-20 mb-10 text-center">
          Products will appear here!
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default Home;
