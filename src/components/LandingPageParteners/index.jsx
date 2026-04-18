import React, { useEffect, useRef } from 'react'
import brand1 from '../../assets/brands/brand1.png'
import brand2 from '../../assets/brands/brand2.png'
import brand3 from '../../assets/brands/brand3.png'
import brand4 from '../../assets/brands/brand4.png'
import brand5 from '../../assets/brands/brand5.png'
import brand6 from '../../assets/brands/brand6.png'
import brand7 from '../../assets/brands/brand7.png'
import brand8 from '../../assets/brands/brand8.png'
import brand9 from '../../assets/brands/brand9.png'
import brand10 from '../../assets/brands/brand10.png'
import brand11 from '../../assets/brands/brand11.png'
import brand12 from '../../assets/brands/brand12.png'
import brand13 from '../../assets/brands/brand13.png'

function LandingPageParteners() {
    const containerRef = useRef(null)

    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13];

    useEffect(() => {
        const container = containerRef.current

        let animationFrame
        let position = 0

        const speed = 0.5 // adjust speed here

        const animate = () => {
            position -= speed
            container.style.transform = `translateX(${position}px)`

            const firstChild = container.children[0]
            if (firstChild) {
                const firstWidth = firstChild.offsetWidth + 48 // gap

                if (Math.abs(position) >= firstWidth) {
                    container.appendChild(firstChild)
                    position += firstWidth
                }
            }

            animationFrame = requestAnimationFrame(animate)
        }

        animate()

        return () => cancelAnimationFrame(animationFrame)
    }, [])

    return (
        <div data-aos='zoom-out' className="py-8 mt-24 bg-gray-200 dark:bg-gray-300 overflow-hidden">
            <div
                ref={containerRef}
                className="flex items-center gap-12 w-max"
            >
                {brands.map((brand, index) => (
                    <img
                        key={index}
                        src={brand}
                        alt="brand"
                        className="w-[80px] h-[35px] z-10 grayscale dark:text-white hover:grayscale-0 hover:opacity-100 transition duration-300"
                    />
                ))}
            </div>
        </div>
    )
}

export default LandingPageParteners