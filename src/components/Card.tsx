import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

interface Props {
    Title: string;
    Background: string
    Width: number
    Height: number
    top?: number
    bottom?: number
    left?: number
    right?: number
    link: string
    // Ref?: React.Ref<HTMLButtonElement>
}

function Card({Title, Background, Width, Height, top, bottom, left, right, link}:Props) {

  const CardRef = useRef(null)
  useEffect(() => {
    if (CardRef.current) {
      gsap.fromTo(
        CardRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: {
            amount: 0.5, // Total time for the stagger effect
            from: "start", // Animation starts from the first element
          },
        }
      );
    }
  }, []);

return (
  <button
    ref={CardRef}
    style={{
      width: `${Width}px`,
      height: `${Height}px`,
      top: `${top}em`,
      bottom: `${bottom}em`,
      left: `${left}em`,
      right: `${right}em`,
    }}
    className="absolute rounded-3xl flex items-center justify-center opacity-0 scale-0 bg-amber-50 transition-transform ease-linear duration-200 hover:scale-[1.02]"
  >
    <div className="relative w-full h-full overflow-hidden">
      <img
        className="absolute w-full h-full object-cover rounded-2xl transition-transform ease-linear duration-200 hover:scale-[0.5]"
        src={Background}
        alt="Card background image"
      />
      <Link to={link}>
        <h1 className="absolute inset-0 flex items-center justify-center text-2xl font-dm-sans transition-transform ease-linear duration-200 hover:scale-[1.1]">
          {Title}
        </h1>
      </Link>
    </div>
  </button>
);
}

export default Card