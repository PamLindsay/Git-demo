import React from 'react'
import styles from './About.module.css'


function About() {

    return (
        <div>
          <h2>About Us</h2>
          <div className={styles.about}>
          <div className={styles.imageContianer}>
              <img src="https://media.istockphoto.com/id/1208144279/photo/girl-in-shopping-malls.jpg?s=2048x2048&w=is&k=20&c=jlPMCoWMI2_c2rJlbvqrUQZhszdIQS2uvlGBh-_rWhY=" alt="" className={styles.image}/>           
              </div>
            <div className={styles.text}>
              <p>
              Lorem ipsum dolor sit amet. 
              Aut minima assumenda ut recusandae numquam et inventore quasi eum eius explicabo non quam tempora. Ut esse voluptatem non voluptate facere nam quidem illo aut quaerat facere qui dolor consequuntur. Qui internos adipisci qui quis distinctio nam molestiae accusamus rem voluptatem pariatur eos Quis repellat id tempora sunt qui iste maiores.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
              </div>
        </div>
      );
    
}

export default About
