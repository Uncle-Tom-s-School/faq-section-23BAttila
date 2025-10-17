import "./index.css"; 
import starIcon from "./assets/images/icon-star.svg";
import FAQ from "./components/FAQ";
import data from "./data.json";


const App = () => {
  return (
    <main className="app">
      <div className="faq-container">
        <div className="faq-header-top">
          <img src={starIcon} alt="gemini lookingass star" className="faq-star" />
          <h1 className="faq-title">FAQs</h1>
        </div>
        {data.map((item, index) => (
          <FAQ key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </main>
  );
};

export default App;
