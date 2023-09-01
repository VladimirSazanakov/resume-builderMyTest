import FAQAccordeon from "../../molecules/FAQAccordeon";
import PromoSection from "../../molecules/PromoSection";
import Slider from "../../molecules/Slider";

import classes from "./MainPage.module.scss"

const MainPage = () => {
  return (
    <main>
      <PromoSection />
      <div className={classes['slider-container']}>
        <Slider />
      </div>
      <FAQAccordeon></FAQAccordeon>
    </main>
  );
};

export default MainPage;
