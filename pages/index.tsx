import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const components = document.querySelectorAll('#component')
    const container: HTMLElement = document.querySelector('#container')!

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => "+=" + container.offsetWidth
      }
    })
  }, [])


  return (
    <div id="container" className={styles.container}>

      <div id="component" className={styles.one}>Primeiro</div>
      <div id="component" className={styles.two}>Segundo</div>
      <div id="component" className={styles.three}>Terceiro</div>
      <div id="component" className={styles.four}>Quarto</div>
      <div id="component" className={styles.five}>Quinto</div>

    </div>
  )
}

export default Home
