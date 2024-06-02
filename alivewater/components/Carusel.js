import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/index.module.scss";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || "auto"}`;
};

const slides = [
	{
		number: "number-slide1",
		src: "backgrounds4/crop-man-pouring-water-near-window.webp",
		alt: "image1",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide2",
		src: "backgrounds4/happy-sportswoman.webp",
		alt: "image2",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide3",
		src: "backgrounds4/girl-roller-skating-and-drinking-water2.jpg",
		alt: "image3",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide4",
		src: "backgrounds4/old-man.webp",
		alt: "image4",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide5",
		src: "backgrounds4/summer-day.webp",
		alt: "image5",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide6",
		src: "backgrounds4/woman-holding-a-glass.webp",
		alt: "image6",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide7",
		src: "backgrounds4/happy-pregnant-woman.webp",
		alt: "image7",
		width: 1180,
		height: 600,
	},
];

export default function Carusel() {
	const randomSlides = [...slides].sort(() => Math.random() - 0.5);

	const [ref] = useKeenSlider(
		{
			loop: true,
			renderMode: "performance",
		},
		[
			(slider) => {
				let timeout;
				let mouseOver = false;

				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 5000);
				}

				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});

				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			},
		]
	);

	return (
		<div ref={ref} className="keen-slider">
			{randomSlides.map((slide) => (
				<div
					key={slide.number}
					className={`keen-slider__slide ${slide.number}`}
				>
					<Image
						loader={myLoader}
						src={slide.src}
						width={slide.width}
						height={slide.height}
						alt={slide.alt}
					// priority
					// sizes="100vw"
					// style={{ width: "100%", height: "auto", objectFit: "cover" }}
					/>
				</div>
			))}
		</div>
	);
}
