"use client";
import classes from "../styles/layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const myLoader = ({ src, width, quality }) => {
	return `images/${src}?w=${width}&q=${quality || 75}`;
};

export function Header() {
	const pathname = usePathname();
	return (
		<>
			<header className={classes.header__menu}>
				<div className={classes.menu__body}>
					<Link href="/">
						<span className={classes.logo}>
							<span className={classes.logo__icon}>
								<Image
									loader={myLoader}
									src="logo/logo22.webp"
									alt="logo"
									priority
									width={0}
									height={0}
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
								/>
								<div className={classes.logo__icon_mini}>
									<Image
										loader={myLoader}
										src="logo/kapl.webp"
										alt="logo2"
										priority
										width={12}
										height={14}
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
							</span>
							<div className={classes.logo__drop}>
								<div className={classes.logo__title}>ЖИВАЯ ВОДА</div>
								<div className={classes.logo__titleMini}>
									Новосибирск
								</div>
							</div>
						</span>
					</Link>
					<div className={classes.menu__list}>
						{[
							{ href: "/", label: "Главная" },
							{ href: "/analyzes", label: "Анализы Воды" },
							{ href: "/waterpumps", label: "Водоматы" },
							{ href: "/contacts", label: "Контакты" },
						].map(({ href, label }) => (
							<Link key={href} href={href} className={classes.menu__item}>
								{pathname === href && (
									<motion.div
										layoutId="menuHighlight"
										className={classes.menu__highlight}
										transition={{ type: "spring", stiffness: 200, damping: 30 }}
									/>
								)}
								<span className={classes.menu__link}>{label}</span>
							</Link>
						))}
					</div>
				</div>
			</header>
		</>
	);
}
