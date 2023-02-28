import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "../components/FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} place-items-center flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient" />

    <div className="w-[80%] flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        O que as pessoas <br className="sm:block hidden" /> estão falando sobre
      </h1>
      <div className="w-[100%] md-mt:0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Tudo o que você precisa para aceitar pagamentos com cartão e expandir
          seus negócios em qualquer lugar do planeta.
        </p>
      </div>
    </div>
    <div className="left-14 md:items-center flex flex-wrap sm:justify-start justify-center w-[100%] feed-back-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
