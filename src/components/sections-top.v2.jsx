import React, { useState, useEffect, useRef } from "react";
import {
  Icon,
  Magnetic,
  CountdownChip,
  CountdownGrid,
  useCountdown,
  pad,
} from "./ui";
import { useOrder, PRODUCTS, ProductCard } from "./shop";
import { Doodle, Mark, Note, Stamp, Scribble, Ringed } from "./doodles";
import mbz_logo from "../assets/img/mbz_logo.png";

function TopMarquee() {
  const items = [
    "Précommande ouverte",
    "Clôture le 15 juin 2026",
    "Livré chez toi à Cotonou",
    "Paiement à la commande",
    "Édition Soutenance 2026",
  ];
  const seq = [];
  for (let r = 0; r < 2; r++)
    items.forEach((t, i) => seq.push({ t, k: r + "-" + i }));
  const Sep = () => (
    <Doodle
      name="star"
      w={11}
      color="var(--signal)"
      className="topmq__star"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        margin: "0 20px",
      }}
    />
  );
  return (
    <div className="topmq">
      <div className="marquee" style={{ "--mq-dur": "34s" }}>
        <div className="marquee__track">
          {seq.map(({ t, k }) => (
            <span className="topmq__item" key={k}>
              {t}
              <Sep />
            </span>
          ))}
        </div>
        <div className="marquee__track" aria-hidden="true">
          {seq.map(({ t, k }) => (
            <span className="topmq__item" key={"b" + k}>
              {t}
              <Sep />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const { count, openDrawer } = useOrder();
  const [menu, setMenu] = useState(false);
  const links = [
    ["Le principe", "#principe"],
    ["Collection", "#collection"],
    ["Avis", "#avis"],
  ];
  return (
    <header className="nav">
      <div className="nav__inner">
        <button
          className="nav__burger"
          onClick={() => setMenu((m) => !m)}
          aria-label="Menu"
        >
          <span className={menu ? "is-x" : ""} />
          <span className={menu ? "is-x" : ""} />
        </button>
        <nav className="nav__links nav__links--l">
          {links.slice(0, 2).map(([t, h]) => (
            <a key={t} href={h}>
              {t}
            </a>
          ))}
        </nav>
        <a href="#top" className="nav__logo">
          <img
            src={mbz_logo}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt="MYBASKETZONE"
          />
        </a>
        <div className="nav__right">
          <nav className="nav__links nav__links--r">
            {links.slice(2).map(([t, h]) => (
              <a key={t} href={h}>
                {t}
              </a>
            ))}
          </nav>
          <div className="nav__actions">
            <button className="nav__ic" aria-label="Recherche">
              <Icon.Search />
            </button>
            <button
              className="nav__bag"
              onClick={openDrawer}
              aria-label="Panier"
            >
              <Icon.Bag />
              {count > 0 && <span className="nav__count">{count}</span>}
            </button>
          </div>
        </div>
      </div>
      <div className={"nav__drop" + (menu ? " is-open" : "")}>
        {links.map(([t, h]) => (
          <a key={t} href={h} onClick={() => setMenu(false)}>
            {t}
          </a>
        ))}
        <a
          href="#collection"
          onClick={() => setMenu(false)}
          className="nav__drop-cta"
        >
          Précommander <Icon.Arrow />
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   Hero countdown — prominent deadline block
   ============================================================ */
function HeroCountdown() {
  const { d, h, m, s } = useCountdown();
  const tiles = [
    [d, "Jours"],
    [h, "Heures"],
    [m, "Min"],
    [s, "Sec"],
  ];
  return (
    <div
      className="hcd"
      role="timer"
      aria-label="Temps restant avant la clôture des précommandes"
    >
      <div className="hcd__head">
        <span className="hcd__head-txt">
          <b>Clôture des précommandes</b>
          <span>Lundi 15 juin 2026 · 23h59</span>
        </span>
      </div>
      <div className="hcd__tiles">
        {tiles.map(([v, label], i) => (
          <React.Fragment key={label}>
            <div className="hcd__tile">
              <span className="hcd__num">{pad(v)}</span>
              <span className="hcd__lbl">{label}</span>
            </div>
            {i < 3 && <span className="hcd__sep">:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Hero — the doodles do the storytelling
   ============================================================ */
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (heroRef.current)
        heroRef.current.style.setProperty("--py", y * 0.12 + "px");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="hero dscope" id="top" ref={heroRef}>
      <div className="hero__grid wrap">
        <div className="hero__copy">
          <Note className="hero__intro hide-sm" rotate={-3}>
            psst — ta soutenance commence ici
            <Doodle
              name="arrow-b"
              w={58}
              color="var(--green)"
              flip
              style={{ display: "block", marginTop: 2 }}
            />
          </Note>

          <h1 className="hero__title display">
            <span className="clip-up">
              <span>Graduation</span>
            </span>
            <span className="clip-up" style={{ "--reveal-delay": "80ms" }}>
              <span>Reservation</span>
            </span>
            <span
              className="hero__title-row clip-up"
              style={{ "--reveal-delay": "160ms" }}
            >
              <span>
                <em className="serif-it">promotion.</em>
              </span>
            </span>
          </h1>
          <Mark
            name="sparkle"
            w={30}
            color="var(--signal)"
            pos={{ top: "7%", right: "12%" }}
            className="hide-sm"
          />
          <Mark
            name="star"
            w={18}
            color="var(--ink)"
            pos={{ top: "2%", right: "4%" }}
            rotate={-12}
            className="hide-sm"
          />

          <p
            className="hero__sub"
            data-reveal
            style={{ "--reveal-delay": "220ms" }}
          >
            La période des soutenances arrive. Sécurise ta paire dès aujourd'hui
            en précommande —{" "}
            <Ringed variant="circle-1" color="var(--ink)">
              avant la rupture
            </Ringed>
            , deux jours avant ton passage.
          </p>

          <div
            className="hero__cta"
            data-reveal
            style={{ "--reveal-delay": "300ms" }}
          >
            <Magnetic>
              <a href="#collection" className="btn">
                <span>Précommander maintenant</span>
                <span className="btn-arrow">
                  <Icon.Arrow />
                </span>
              </a>
            </Magnetic>
            <a href="#principe" className="btn btn--ghost">
              <span>Comment ça marche</span>
            </a>
            <span className="hero__ctanote hide-sm">
              <Doodle
                name="arrow-d"
                w={68}
                color="var(--ink)"
                rotate={-6}
                flip
              />
              <Note tone="mut" rotate={-4}>
                promis, 2&nbsp;min&nbsp;⚡
              </Note>
            </span>
          </div>

          <div
            className="hero__cdwrap"
            data-reveal
            style={{ "--reveal-delay": "360ms" }}
          >
            <Note className="hero__cdnote hide-sm" tone="signal" rotate={3}>
              ça file !
            </Note>
            <HeroCountdown />
          </div>
          <div
            className="hero__stats"
            data-reveal
            style={{ "--reveal-delay": "420ms" }}
          >
            {[
              ["20+", "Marques"],
              ["50+", "Modèles"],
              ["100+", "Étudiants servis"],
            ].map(([n, l]) => (
              <div className="hero__stat" key={l}>
                <span className="hero__stat-n display">{n}</span>
                <span className="hero__stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-bg" />
          <Mark
            name="sparkle"
            w={42}
            color="var(--ink)"
            pos={{ top: "4%", left: "0%" }}
          />
          <Mark
            name="sym-3"
            w={36}
            color="var(--ink)"
            pos={{ top: "34%", right: "-1%" }}
            rotate={8}
            className="hide-sm"
          />
          <Mark
            name="star"
            w={20}
            color="var(--ink)"
            pos={{ bottom: "40%", left: "-2%" }}
            className="hide-sm"
          />

          <img
            src="assets/img/hero-model.png"
            alt="Étudiant MYBASKETZONE en tenue de soutenance"
            className="hero__model"
          />

          <Note className="hero__medianote hide-sm" rotate={-7}>
            celui-là&nbsp;👀
            <Doodle
              name="arrow-a"
              w={92}
              color="var(--ink)"
              flip
              style={{ display: "block", marginTop: -2 }}
            />
          </Note>

          <div className="hero__floattag hero__floattag--top">
            <b>Loafer à chaîne</b>
            <span>Prêt pour le grand jour</span>
          </div>
          <div className="hero__floattag hero__floattag--bot">
            <span className="hero__floattag-cap">À partir de</span>
            <span className="hero__floattag-price">
              10 000 <i>FCFA</i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStrip() {
  const brands = [
    "Nike",
    "Vans",
    "Converse",
    "Adidas",
    "Dr. Martens",
    "New Balance",
    "Puma",
    "Bape",
  ];
  const seq = [...brands, ...brands];
  const Sep = () => (
    <Doodle
      name="sparkle"
      w={13}
      color="var(--signal)"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        margin: "0 clamp(20px,2.4vw,38px)",
      }}
    />
  );
  return (
    <section className="brandstrip dscope">
      <div className="marquee" style={{ "--mq-dur": "40s" }}>
        <div className="marquee__track">
          {seq.map((b, i) => (
            <span className="brandstrip__item" key={i}>
              {b}
              <Sep />
            </span>
          ))}
        </div>
        <div className="marquee__track" aria-hidden="true">
          {seq.map((b, i) => (
            <span className="brandstrip__item" key={"b" + i}>
              {b}
              <Sep />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TopMarquee, Nav, Hero, BrandStrip };
