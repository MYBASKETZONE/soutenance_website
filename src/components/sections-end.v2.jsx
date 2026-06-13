import React, { useState } from "react";
import { Icon, Magnetic, CountdownGrid } from "./ui";
import { useOrder } from "./shop";
import { Doodle, Mark, Note, Stamp, Scribble, Ringed } from "./doodles";
import { mbz_logo } from "../assets/img";

/* ============================================================
   04 — Countdown (narrative climax) — doodle peak, on black
   ============================================================ */
function CountdownSection() {
  return (
    <section className="cdsec noise dscope">
      <Mark
        name="sym-3"
        w={48}
        color="var(--signal)"
        pos={{ top: "12%", left: "9%" }}
        rotate={-8}
        className="hide-sm"
      />
      <Mark
        name="sparkle"
        w={40}
        color="var(--paper)"
        pos={{ top: "18%", right: "11%" }}
        className="hide-sm"
      />
      <Mark
        name="star"
        w={24}
        color="var(--signal)"
        pos={{ bottom: "24%", left: "13%" }}
        rotate={10}
        className="hide-sm"
      />
      <Mark
        name="sym-3"
        w={34}
        color="var(--paper)"
        pos={{ bottom: "18%", right: "14%" }}
        rotate={14}
        className="hide-sm"
      />
      <div className="wrap cdsec__inner">
        <div className="story__eyebrow cdsec__eyebrow" data-reveal>
          <span
            className="story__num serif-it"
            style={{ color: "var(--signal)" }}
          >
            04
          </span>
          <span className="eyebrow" style={{ color: "rgba(244,242,239,.6)" }}>
            Le compte à rebours
          </span>
        </div>
        <Note
          className="cdsec__note"
          tone="signal"
          rotate={-3}
          style={{ color: "var(--signal)" }}
        >
          dernier appel&nbsp;✋
        </Note>
        <h2
          className="cdsec__head display"
          data-reveal
          style={{ "--reveal-delay": "60ms" }}
        >
          La précommande ferme
          <br />
          le{" "}
          <Ringed
            variant="circle-1"
            color="var(--signal)"
            className="ringed--front"
          >
            15 juin.
          </Ringed>
        </h2>
        <p
          className="cdsec__sub"
          data-reveal
          style={{ "--reveal-delay": "120ms" }}
        >
          Après cette date, les réservations sont closes — et c'est la rupture
          qui guette tout le monde. Réserve ta paire pendant qu'il est temps.
        </p>
        <div
          className="cdsec__grid"
          data-reveal
          style={{ "--reveal-delay": "180ms" }}
        >
          <CountdownGrid light />
        </div>
        <div className="cdsec__ctawrap">
          <Doodle
            name="arrow-b"
            w={88}
            color="var(--signal)"
            className="cdsec__arrow hide-sm"
          />
          <Magnetic>
            <a
              href="#collection"
              className="btn cdsec__cta"
              data-reveal
              style={{ "--reveal-delay": "240ms" }}
            >
              <span>Précommander avant la clôture</span>
              <span className="btn-arrow">
                <Icon.Arrow />
              </span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Testimonials
   ============================================================ */
function Testimonials() {
  const data = [
    [
      "Sarah A.",
      "Étudiante · UAC",
      "J'ai eu mes Air Force pile pour ma soutenance. Zéro stress, livré à la maison la veille.",
    ],
    [
      "Aristide K.",
      "Étudiant · HECM",
      "Précommande le matin, payé direct, paire réservée à mon nom. Du sérieux, vraiment.",
    ],
    [
      "Inès D.",
      "Étudiante · ESGIS",
      "Mon binôme et moi assortis le jour J. Tout le monde a demandé où on avait trouvé ça.",
    ],
    [
      "Yann O.",
      "Étudiant · IUT",
      "Les loafers étaient parfaits avec mon costume. Qualité au top pour le prix.",
    ],
  ];
  return (
    <section className="avis dscope" id="avis">
      <div className="wrap">
        <div className="avis__head">
          <div className="avis__headl">
            <span
              className="eyebrow"
              data-reveal
              style={{ color: "var(--muted)" }}
            >
              La preuve
            </span>
            <h2
              className="avis__title display"
              data-reveal
              style={{ "--reveal-delay": "60ms" }}
            >
              Ils ont précommandé
              <br />
              chez MBZ
            </h2>
            <Note
              className="hide-sm"
              tone="green"
              rotate={-4}
              style={{ display: "inline-block", marginTop: 12 }}
            >
              vrai de vrai
              <Doodle
                name="arrow-e"
                w={70}
                color="var(--green)"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 6,
                }}
              />
            </Note>
          </div>
          <div
            className="avis__rating"
            data-reveal
            style={{ "--reveal-delay": "120ms" }}
          >
            <Doodle
              name="sparkle"
              w={26}
              color="var(--signal)"
              className="avis__ratingspark hide-sm"
            />
            <div className="avis__stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon.Star key={i} style={{ color: "var(--signal)" }} />
              ))}
            </div>
            <span>
              <Scribble variant="underline-1" color="var(--signal)">
                <b>4,9/5</b>
              </Scribble>{" "}
              · 100+ étudiants servis
            </span>
          </div>
        </div>
        <div className="avis__grid">
          {data.map(([n, r, q], i) => (
            <figure
              className="avcard"
              key={n}
              data-reveal
              style={{ "--reveal-delay": (i % 4) * 80 + "ms" }}
            >
              <div className="avcard__stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Icon.Star key={s} style={{ color: "var(--signal)" }} />
                ))}
              </div>
              <blockquote>{q}</blockquote>
              <figcaption>
                <span className="avcard__avatar">{n[0]}</span>
                <div>
                  <b>{n}</b>
                  <span>{r}</span>
                </div>
                <span className="avcard__verified">
                  <Icon.Check /> Vérifié
                </span>
              </figcaption>
              {i === 1 && (
                <Doodle
                  name="sym-5"
                  w={34}
                  color="var(--green)"
                  className="avcard__heart hide-sm"
                />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA — stay informed (on black)
   ============================================================ */
function CtaBand() {
  return (
    <section className="ctaband dscope">
      <div className="wrap">
        <div className="ctaband__box noise">
          <Mark
            name="sparkle"
            w={30}
            color="var(--signal)"
            pos={{ top: "14%", left: "6%" }}
            className="hide-sm"
          />
          <Mark
            name="star"
            w={18}
            color="var(--paper)"
            pos={{ bottom: "18%", left: "10%" }}
            rotate={-12}
            className="hide-sm"
          />
          <div className="ctaband__l">
            <h2 className="ctaband__head display">
              Reste informé de
              <br />
              nos prochains drops
            </h2>
            <p className="ctaband__sub">
              Nouvelles paires, dates de clôture, événements soutenance —
              directement sur WhatsApp.
            </p>
          </div>
          <div className="ctaband__actions">
            <Doodle
              name="arrow-a"
              w={96}
              color="var(--signal)"
              className="ctaband__arrow hide-sm"
            />
            <a
              href="https://wa.me/2290156685767"
              target="_blank"
              rel="noopener"
              className="btn ctaband__btn ctaband__btn--wa"
            >
              <Icon.Whatsapp />
              <span>Contactez-nous sur WhatsApp</span>
            </a>
            <a
              href="#"
              className="btn btn--ghost ctaband__btn ctaband__btn--ghost-light"
            >
              <span>Visiter nos réseaux sociaux</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Footer (on paper)
   ============================================================ */
function Footer() {
  const cols = [
    [
      "Boutique",
      [
        ["Collection", "#collection"],
        ["Le principe", "#principe"],
        ["Le binôme", "#binome"],
        ["Avis", "#avis"],
      ],
    ],
    [
      "Marques",
      [
        ["Nike", "#"],
        ["Vans", "#"],
        ["Converse", "#"],
        ["Dr. Martens", "#"],
      ],
    ],
    [
      "Aide",
      [
        ["Livraison Cotonou", "#"],
        ["Précommande", "#"],
        ["Contact", "#"],
        ["WhatsApp", "#"],
      ],
    ],
  ];
  return (
    <footer className="footer dscope">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={mbz_logo} alt="MYBASKETZONE" className="footer__logo" />
            <p>
              La boutique qui accompagne les étudiants de Cotonou. Des paires de
              qualité, livrées chez toi — prêtes pour ta soutenance.
            </p>
            <Note className="footer__sign" tone="mut" rotate={-3}>
              fait main, à Cotonou
              <Doodle
                name="sym-5"
                w={22}
                color="var(--green)"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 6,
                }}
              />
            </Note>
            <div className="footer__social">
              <a
                href="https://wa.me/2290156685767"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
                <Icon.Whatsapp />
              </a>
              <a
                href="https://www.instagram.com/e.m.and___y?igsh=dDY4dnFpcnhrandr&utm_source=qr"
                aria-label="Instagram"
                className="footer__ig"
              >
                IG
              </a>
            </div>
          </div>
          {cols.map(([t, links]) => (
            <div className="footer__col" key={t}>
              <h4>{t}</h4>
              <ul>
                {links.map(([l, h]) => (
                  <li key={l}>
                    <a href={h}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>© 2026 MYBASKETZONE · Cotonou, Bénin</span>
          <span className="footer__made">
            Édition Soutenance — précommande jusqu'au 17 juin 2026
          </span>
        </div>
      </div>
    </footer>
  );
}

export { CountdownSection, Testimonials, CtaBand, Footer };
