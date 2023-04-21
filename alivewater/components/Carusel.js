import "keen-slider/keen-slider.min.css";
import "../styles/index.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

const slides = [
	{
		number: "number-slide2",
		src: "backgrounds3/crop-man-pouring-water-near-window.jpg",
		alt: "image2",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide4",
		src: "backgrounds3/happy-sportswoman.jpg",
		alt: "image4",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide5",
		src: "backgrounds3/girl-roller-skating-and-drinking-water.jpg",
		alt: "image5",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide7",
		src: "backgrounds3/old-man.jpg",
		alt: "image7",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide8",
		src: "backgrounds3/summer-day.jpg",
		alt: "image8",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide10",
		src: "backgrounds3/woman-holding-a-glass.jpg",
		alt: "image10",
		width: 1180,
		height: 600,
	},
	{
		number: "number-slide11",
		src: "backgrounds3/happy-pregnant-woman.jpg",
		alt: "image11",
		width: 1180,
		height: 600,
	},
];

export default function Carusel() {
	const randomSlides = [...slides].sort(() => Math.random() - 0.5);

	const [ref] = useKeenSlider(
		{
			loop: true,
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
				<div key={slide.number} className={`keen-slider__slide ${slide.number}`}>
					<Image
						loader={myLoader}
						src={slide.src}
						width={slide.width}
						height={slide.height}
						alt={slide.alt}
					/>
				</div>
			))}
		</div>
	);
}

// export default function Carusel() {
// 	const [ref] = useKeenSlider(
// 		{
// 			loop: true,
// 		},
// 		[
// 			(slider) => {
// 				let timeout;
// 				let mouseOver = false;

// 				function clearNextTimeout() {
// 					clearTimeout(timeout);
// 				}

// 				function nextTimeout() {
// 					clearTimeout(timeout);
// 					if (mouseOver) return;
// 					timeout = setTimeout(() => {
// 						slider.next();
// 					}, 5000);
// 				}

// 				function getRandomSlideIndex() {
// 					return Math.floor(Math.random() * slides.length);
// 				}

// 				slider.on("created", () => {
// 					const randomSlideIndex = getRandomSlideIndex();
// 					slider.moveToIdx(randomSlideIndex);

// 					slider.container.addEventListener("mouseover", () => {
// 						mouseOver = true;
// 						clearNextTimeout();
// 					});
// 					slider.container.addEventListener("mouseout", () => {
// 						mouseOver = false;
// 						nextTimeout();
// 					});
// 					nextTimeout();
// 				});

// 				slider.on("dragStarted", clearNextTimeout);
// 				slider.on("animationEnded", nextTimeout);
// 				slider.on("moved", () => {
// 					const randomSlideIndex = getRandomSlideIndex();
// 					slider.moveToIdx(randomSlideIndex);
// 				});
// 			},
// 		]
// 	);

// 	return (
// 		<div ref={ref} className="keen-slider">
// 			{slides.map((slide) => (
// 				<div key={slide.number} className={`keen-slider__slide ${slide.number}`}>
// 					<Image
// 						loader={myLoader}
// 						src={slide.src}
// 						width={slide.width}
// 						height={slide.height}
// 						alt={slide.alt}
// 						priority={slide.priority}
// 					/>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
