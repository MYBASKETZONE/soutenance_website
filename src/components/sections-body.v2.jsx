import React, { useState, useEffect } from "react";
import { Icon, Magnetic, CountdownGrid, pad } from "./ui";
import { useOrder, PRODUCTS, ProductCard, FCFA } from "./shop";
import { Doodle, Mark, Note, Stamp, Scribble, Ringed } from "./doodles";
import {
  binome_1,
  binome_2,
  choose,
  colis,
  converse,
  deliver,
  mbz_solutions,
  shoes_problem,
} from "../assets/img";

function Problem() {
  return (
    <section className="story story--problem dscope" id="probleme">
      <div className="wrap story__grid">
        <div className="story__media" data-reveal>
          <div className="story__imgbox story__imgbox--photo">
            <img
              src={shoes_problem}
              alt="Étudiants en tenue de soutenance, paires assorties"
            />
          </div>
          <span className="story__stamp">
            Rupture
            <br />
            imminente
          </span>
          <Mark
            name="arrow-c"
            w={120}
            color="var(--ink)"
            pos={{ top: "-7%", right: "4%" }}
            rotate={-8}
            className="hide-sm"
          />
          <Note
            className="story__media-note hide-sm"
            tone="mut"
            rotate={-5}
            style={{ position: "absolute", top: "-13%", right: "34%" }}
          >
            aïe…
          </Note>
        </div>
        <div className="story__copy">
          <div className="story__eyebrow" data-reveal>
            <span className="story__num serif-it">01</span>
            <span className="eyebrow">Le problème</span>
          </div>
          <h2
            className="story__head display"
            data-reveal
            style={{ "--reveal-delay": "60ms" }}
          >
            Deux jours avant ta soutenance, la paire est{" "}
            <Scribble variant="underline-1" color="var(--signal)">
              déjà partie.
            </Scribble>
          </h2>
          <p
            className="story__lead serif"
            data-reveal
            style={{ "--reveal-delay": "140ms" }}
          >
            À Cotonou, les bonnes pointures partent vite.
          </p>
          <p
            className="story__body"
            data-reveal
            style={{ "--reveal-delay": "200ms" }}
          >
            Quand toute la promo court au même moment, le fournisseur n'a plus
            rien. Tu te retrouves à courir les boutiques la veille du grand
            jour, à prendre la pointure d'à côté ou un modèle que tu n'aimes
            pas. Le jour où il faut être parfait.
          </p>
          <ul
            className="story__list"
            data-reveal
            style={{ "--reveal-delay": "260ms" }}
          >
            <li>
              <Icon.Close style={{ color: "#c0392b" }} /> Stock épuisé au pire
              moment
            </li>
            <li>
              <Icon.Close style={{ color: "#c0392b" }} /> Pointures dépareillées
            </li>
            <li>
              <Icon.Close style={{ color: "#c0392b" }} /> Prix qui flambent à la
              dernière minute
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   02 — Solution MBZ
   ============================================================ */
function Solution() {
  return (
    <section className="story story--solution dscope">
      <div className="wrap story__grid story__grid--rev">
        <div className="story__copy">
          <div className="story__eyebrow" data-reveal>
            <span className="story__num serif-it">02</span>
            <span className="eyebrow">La solution</span>
          </div>
          <h2
            className="story__head display"
            data-reveal
            style={{ "--reveal-delay": "60ms" }}
          >
            MBZ{" "}
            <Ringed variant="circle-2" color="var(--green)">
              prend les devants.
            </Ringed>
          </h2>
          <p
            className="story__quote serif"
            data-reveal
            style={{ "--reveal-delay": "140ms" }}
          >
            “MYBASKETZONE, c'est la boutique qui accompagne les étudiants de
            Cotonou. Pas de vitrine, pas de blabla. Des paires de qualité,{" "}
            <em>livrées chez toi.</em>”
            <Doodle
              name="sym-5"
              w={40}
              color="var(--green)"
              className="hide-sm"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginLeft: 8,
              }}
            />
          </p>
          <p
            className="story__body"
            data-reveal
            style={{ "--reveal-delay": "200ms" }}
          >
            Tu réserves ta paire en précommande, bien avant la cohue. On garde
            ta pointure à ton nom, on te prépare ta paire, et on te la livre
            prête pour la soutenance.
          </p>
          <div
            className="story__pillars"
            data-reveal
            style={{ "--reveal-delay": "260ms" }}
          >
            {[
              ["Réservée", "à ton nom, ta pointure"],
              ["Garantie", "qualité d'origine"],
              ["Livrée", "chez toi à Cotonou"],
            ].map(([a, b]) => (
              <div className="pillar" key={a}>
                <Icon.Check style={{ color: "var(--green)" }} />
                <div>
                  <b>{a}</b>
                  <span>{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="story__media" data-reveal>
          <div className="story__imgbox">
            <img
              src={mbz_solutions}
              alt="Étudiant MYBASKETZONE, style soutenance"
            />
          </div>
          <span className="story__badge">La solution MBZ</span>
          <Note
            className="hide-sm"
            tone="green"
            rotate={6}
            style={{
              position: "absolute",
              bottom: "6%",
              right: "-4%",
              zIndex: 4,
            }}
          >
            ça, c'est nous 💪
          </Note>
          <Mark
            name="sparkle"
            w={30}
            color="var(--green)"
            pos={{ top: "5%", left: "-3%" }}
            className="hide-sm"
          />
        </div>
      </div>
    </section>
  );
}

const JOURNEY_STEPS = [
  {
    n: "01",
    t: "Choisis ta paire",
    tag: "Collection ouverte",
    short: "Choisir",
    d: "Parcours la collection, repère ton modèle et cale ta pointure idéale. Tout est en stock, tout est dispo.",
    img: choose,
  },
  {
    n: "02",
    t: "Précommande & paie",
    tag: "Réservée à ton nom",
    short: "Réserver",
    d: "Tu règles maintenant et ta paire passe à ton nom. Plus de course, plus de rupture la veille du grand jour.",
    img: converse,
  },
  {
    n: "03",
    t: "On prépare ton colis",
    tag: "Emballé avec soin",
    short: "Préparer",
    d: "On rassemble ta paire, on contrôle la pointure et on emballe ton colis avec soin. Qualité garantie, prêt à partir.",
    img: colis,
    cover: true,
  },
  {
    n: "04",
    t: "Livré chez toi",
    tag: "Prêt le jour J",
    short: "Livrer",
    d: "On te livre à Cotonou, prêt pour la soutenance. Tu n\u2019as plus qu\u2019une chose à faire : briller.",
    img: deliver,
  },
];

function Principle() {
  const steps = JOURNEY_STEPS;
  const last = steps.length - 1;
  const secRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const [prog, setProg] = React.useState(0);

  React.useEffect(() => {
    const sec = secRef.current,
      track = trackRef.current;
    if (!sec || !track) return;
    const mq = window.matchMedia("(max-width: 900px)");
    let raf = 0;

    const update = () => {
      if (mq.matches) {
        track.style.transform = "";
        return;
      }
      const total = sec.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-sec.getBoundingClientRect().top, 0),
        Math.max(total, 1),
      );
      const p = total > 0 ? scrolled / total : 0;
      const maxShift = track.scrollWidth - window.innerWidth;
      track.style.transform = "translate3d(" + -p * maxShift + "px,0,0)";
      setProg(p);
      setActive(Math.min(last, Math.round(p * last)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    let io;
    const setupMobile = () => {
      io && io.disconnect();
      if (!mq.matches) return;
      io = new IntersectionObserver(
        (ents) =>
          ents.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("is-active");
          }),
        { threshold: 0.3 },
      );
      track.querySelectorAll(".jpanel").forEach((el) => io.observe(el));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const onMode = () => {
      setupMobile();
      update();
    };
    mq.addEventListener
      ? mq.addEventListener("change", onMode)
      : mq.addListener(onMode);
    setupMobile();
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener
        ? mq.removeEventListener("change", onMode)
        : mq.removeListener(onMode);
      io && io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [last]);

  return (
    <section className="journey dscope" id="principe" ref={secRef}>
      <div className="journey__sticky">
        <div className="journey__intro">
          <div className="story__eyebrow">
            <span className="story__num serif-it">03</span>
            <span className="eyebrow">Le parcours</span>
          </div>
          <h2 className="journey__introtitle display">
            Quatre étapes,
            <br />
            zéro stress.
          </h2>
          <p className="journey__introtxt">
            Tu sécurises aujourd'hui ce que les autres chercheront en panique la
            veille.
          </p>
        </div>

        <div className="journey__bar">
          <div className="journey__bar-l">
            <div className="story__eyebrow" style={{ margin: 0 }}>
              <span className="story__num serif-it">03</span>
              <span className="eyebrow">Le parcours</span>
            </div>
            <h2 className="journey__title display">
              Quatre étapes,{" "}
              <Ringed variant="circle-1" color="var(--signal)">
                zéro stress.
              </Ringed>
            </h2>
          </div>
          <div className="journey__count">
            <b>{pad(active + 1)}</b>
            <i>/ {pad(steps.length)}</i>
          </div>
        </div>

        <div className="journey__viewport">
          <div className="journey__track" ref={trackRef}>
            {steps.map((s, i) => (
              <article
                className={"jpanel" + (active === i ? " is-active" : "")}
                key={s.n}
              >
                <div className="jpanel__inner">
                  <div className="jpanel__text">
                    <span className="jpanel__ghost display" aria-hidden="true">
                      {s.n}
                    </span>
                    <span className="jpanel__kicker">{s.tag}</span>
                    <h3 className="jpanel__title display">{s.t}</h3>
                    <p className="jpanel__desc">{s.d}</p>
                    {i < last && (
                      <Doodle
                        name="arrow-e"
                        w={96}
                        color="var(--ink)"
                        className="jpanel__arrow hide-sm"
                      />
                    )}
                  </div>
                  <div className="jpanel__media">
                    <div
                      className={
                        "jpanel__mediabox" +
                        (s.cover ? " jpanel__mediabox--cover" : "")
                      }
                    >
                      <img src={s.img} alt={s.t} />
                    </div>
                    <span className="jpanel__floor">Étape {s.n}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="journey__foot">
          <div className="journey__progress">
            <span className="journey__pline" />
            <span
              className="journey__pfill"
              style={{ width: "calc(" + prog + " * (100% - 14px))" }}
            />
            {steps.map((s, i) => {
              const f = last ? i / last : 0;
              return (
                <span
                  key={s.n}
                  className={
                    "jdot" +
                    (active >= i ? " is-done" : "") +
                    (active === i ? " is-on" : "")
                  }
                  style={{ left: "calc(7px + " + f + " * (100% - 14px))" }}
                />
              );
            })}
          </div>
          <div className="journey__labels">
            {steps.map((s, i) => (
              <span key={s.n} className={active === i ? "is-on" : ""}>
                {s.short}
              </span>
            ))}
          </div>
          <span
            className="journey__hint"
            style={{ opacity: Math.max(0, 1 - prog * 6) }}
          >
            Défile pour avancer
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Collection
   ============================================================ */
function Collection() {
  return (
    <section className="collection dscope" id="collection">
      <div className="wrap">
        <div className="collection__head">
          <div className="collection__headl">
            <span
              className="eyebrow"
              data-reveal
              style={{ color: "var(--muted)" }}
            >
              La sélection
            </span>
            <h2
              className="collection__title display"
              data-reveal
              style={{ "--reveal-delay": "60ms" }}
            >
              Collection
              <br />
              de la saison
            </h2>
            <Stamp
              tone="signal"
              rotate={-5}
              className="collection__stamp hide-sm"
            >
              la promo se l'arrache
            </Stamp>
          </div>
          <p
            className="collection__intro"
            data-reveal
            style={{ "--reveal-delay": "120ms" }}
          >
            Les modèles que la promo s'arrache. Choisis le tien, glisse-le en
            précommande —
            <Scribble variant="underline-2" color="var(--green)">
              {" "}
              le bouton suffit.
            </Scribble>
          </p>
          <Mark
            name="arrow-c"
            w={108}
            color="var(--ink)"
            pos={{ right: "6%", bottom: "-6%" }}
            rotate={18}
            flip
            className="collection__headarrow hide-sm"
          />
        </div>
        <div className="collection-grid">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Interstitial editorial band (black)
   ============================================================ */
function Interstitial() {
  return (
    <section className="inter dscope">
      <img
        src="assets/img/feet-af1.png"
        alt=""
        className="inter__img inter__img--l"
        data-reveal
      />
      <Mark
        name="sparkle"
        w={34}
        color="var(--signal)"
        pos={{ top: "16%", left: "20%" }}
        className="hide-sm"
      />
      <Mark
        name="star"
        w={22}
        color="var(--paper)"
        pos={{ bottom: "20%", left: "26%" }}
        rotate={-10}
        className="hide-sm"
      />
      <div className="inter__copy">
        <p className="inter__kick eyebrow" data-reveal>
          Un dernier mot
        </p>
        <h2
          className="inter__head display"
          data-reveal
          style={{ "--reveal-delay": "80ms" }}
        >
          L'avenir est radieux
          <br />
          quand on s'y prend
          <br />
          <Ringed
            variant="circle-1"
            color="var(--signal)"
            className="ringed--front"
          >
            du bon pas.
          </Ringed>
        </h2>
        <Doodle
          name="arrow-d"
          w={130}
          color="var(--signal)"
          className="inter__arrow hide-sm"
        />
      </div>
      <img
        src="assets/img/feet-converse.png"
        alt=""
        className="inter__img inter__img--r"
        data-reveal
        style={{ "--reveal-delay": "120ms" }}
      />
      <Mark
        name="sym-3"
        w={40}
        color="var(--signal)"
        pos={{ top: "22%", right: "22%" }}
        rotate={8}
        className="hide-sm"
      />
    </section>
  );
}

/* ============================================================
   Binôme
   ============================================================ */
function Binome() {
  return (
    <section className="binome dscope" id="binome">
      <div className="wrap binome__grid">
        <div className="binome__copy">
          <span
            className="eyebrow"
            data-reveal
            style={{ color: "var(--muted)" }}
          >
            Le duo
          </span>
          <h2
            className="binome__title display"
            data-reveal
            style={{ "--reveal-delay": "60ms" }}
          >
            Toi + ton binôme,
            <br />
            <span
              className="serif-it"
              style={{ textTransform: "none", fontWeight: 400 }}
            >
              assortis.
            </span>
          </h2>
          <p
            className="binome__body"
            data-reveal
            style={{ "--reveal-delay": "120ms" }}
          >
            Le jour de la soutenance, vous passez à deux. Avec nos prix
            abordables, toi et ton binôme irez de paire — même énergie, même
            allure, zéro fausse note.
          </p>
          <a
            href="#collection"
            className="btn binome__cta"
            data-reveal
            style={{ "--reveal-delay": "180ms" }}
          >
            <span>Composer le duo</span>
            <span className="btn-arrow">
              <Icon.Arrow />
            </span>
          </a>
          <Note
            className="hide-sm"
            tone="mut"
            rotate={-4}
            style={{ display: "block", marginTop: 16 }}
          >
            même énergie, zéro fausse note
          </Note>
        </div>
        <div className="binome__media">
          <div className="binome__card binome__card--a" data-reveal>
            <img src={binome_1} alt="Étudiante en tenue de soutenance" />
          </div>
          <div
            className="binome__card binome__card--b"
            data-reveal
            style={{ "--reveal-delay": "120ms" }}
          >
            <img src={binome_2} alt="Binôme d'étudiants assortis" />
          </div>
          <Doodle
            name="sym-5"
            w={74}
            color="var(--green)"
            className="binome__heart hide-sm"
          />
          <Mark
            name="sparkle"
            w={26}
            color="var(--ink)"
            pos={{ top: "-2%", right: "14%" }}
            className="hide-sm"
          />
        </div>
      </div>
    </section>
  );
}

export { Problem, Solution, Principle, Collection, Interstitial, Binome };
