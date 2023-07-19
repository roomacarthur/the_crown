import React from 'react';
import { meal1, meal2, beer, ribblehead } from "../assets";
import styles, { layout } from "../styles";

const About = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart} bg-background`}>
        <div className={`${styles.boxWidth}`}>
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <span className='relative left-[-10px] text-[16px] uppercase text-accent tracking-[1.5px] font-roboto font-bold'>
            - The Crown 
          </span>
        <h2 className={`${styles.heading2}`}>
          A Taste of Yorkshire in the Heart of Hawes
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Discover a warm and inviting pub nestled in the picturesque Yorkshire Dales. The Crown is the perfect destination for tourists, walkers, caravan and campervan enthusiasts, families, and anyone seeking exceptional homecooked food and outstanding ales. 

        </p>
        {/* <Button styles="mt-10" /> */}
      </div>
      <div className={layout.sectionImg}>
        <img src={meal1} alt="The Crown" className="max-w-[500px] h-[100%] aspect-auto rounded-lg" />
      </div>
    </section>
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={meal2} alt="The Crown" className="max-w-[500px] h-[100%] rounded-lg" />
      </div>
      <div className={layout.sectionInfo}>
        <span className='relative left-[-10px] text-[16px] uppercase text-accent tracking-[1.5px] font-roboto font-bold'>
            - Indulge in 
          </span>
        <h2 className={styles.heading2}>
        The Finest Local Flavors
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        At The Crown, we take pride in offering an unforgettable dining experience. Our food menu features a delightful selection of dishes crafted with locally sourced ingredients. From hearty classics to innovative creations, each dish is cooked to perfection, reflecting the rich culinary heritage of the Yorkshire Dales. Explore our menu [here](https://www.tripadvisor.com/menu?locationId=3505876) and prepare your taste buds for a mouthwatering adventure.

        </p>
      </div>
    </section>
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <span className='relative left-[-10px] text-[16px] uppercase text-accent tracking-[1.5px] font-roboto font-bold'>
            - Immerse Yourself in
          </span>
        <h2 className={styles.heading2}>
          
        Authentic Yorkshire Ales

        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Quench your thirst with a superb range of drinks at The Crown. Our bar proudly serves a handpicked selection of ales from renowned local breweries like Theakstons, Wensleydale Brewery, and Settle Brewery. If you prefer something different, we offer premium lagers, ciders, and a diverse cocktail menu. Wine enthusiasts will delight in our carefully curated wine list, showcasing the best regional and international varietals. Explore our drinks menu and find your new favorite beverage.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img src={beer} alt="The Crown" className="max-w-[500px] max-h-[500px] rounded-lg overflow-hidden" />
      </div>
    </section>
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={ribblehead} alt="The Crown" className="max-w-[500px] h-[100%] rounded-lg" />
      </div>
      <div className={layout.sectionInfo}>
        <span className='relative left-[-10px] text-[16px] uppercase text-accent tracking-[1.5px] font-roboto font-bold'>
            - The Perfect Base for 
          </span>
        <h2 className={styles.heading2}>
        Exploring Yorkshire's Beauty
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Located in the heart of Hawes, The Crown offers the ideal starting point for your Yorkshire adventure. Surrounded by breathtaking landscapes and the renowned Yorkshire Dales countryside, our pub is a gateway to exploration. Just 20 minutes away, you'll find the majestic Yorkshire Three Peaks, while the Penine Way, Herriots Way, and Yorkshire Dales Way walks are right at our doorstep. Immerse yourself in nature's beauty, and let The Crown be your haven after a day of discovery.
        </p>
      </div>
    </section>
  </div>
  </div>
  )
}

export default About