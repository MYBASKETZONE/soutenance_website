import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
} from "react";
import { Icon, Magnetic } from "./ui";
import {
  air_force,
  converse,
  dr_martens,
  loafer,
  martens_mocassins,
  numeris,
  samba,
  vans,
  vans_knu,
} from "../assets/img";

/* ============================================================
   Product data
   ============================================================ */
const FCFA = (n) => n.toLocaleString("fr-FR") + " FCFA";

const PRODUCTS = [
  {
    id: "af1",
    brand: "Nike",
    name: "Air Force One",
    price: 13000,
    img: air_force,
    tone: "#E8E6E1",
    tag: null,
    colorway: "Blanc",
  },
  {
    id: "chuck",
    brand: "Converse",
    name: "Converse Chuck Taylor",
    price: 18000,
    img: converse,
    tone: "#E4E2DD",
    tag: null,
    colorway: "Blanc / Noir",
  },
  {
    id: "knu",
    brand: "Vans",
    name: "Knu Skool",
    price: 19000,
    img: vans_knu,
    tone: "#EAE8E3",
    tag: null,
    colorway: "Noir / Blanc",
  },
  {
    id: "oldsk",
    brand: "Vans",
    name: "Old Skool",
    price: 16000,
    img: vans,
    tone: "#E6E4DF",
    tag: null,
    colorway: "Noir / Blanc",
  },
  {
    id: "adrian",
    brand: "Loafer",
    name: "Mocassin",
    price: 22500,
    img: loafer,
    tone: "#E2E0DB",
    tag: null,
    colorway: "Cuir noir verni",
  },
  {
    id: "derby",
    brand: "Dr. Martens",
    name: "Chunky Derby",
    price: 30000,
    img: dr_martens,
    tone: "#E6E4DF",
    tag: null,
    colorway: "Cuir noir",
  },
  {
    id: "numeris",
    brand: "Numeris",
    name: "Numeris",
    price: 40000,
    img: numeris,
    tone: "#E6E4DF",
    tag: null,
    colorway: "Blanc / Noir",
  },
  {
    id: "adidas",
    brand: "Adidas",
    name: "Samba",
    price: 13000,
    img: samba,
    tone: "#E6E4DF",
    tag: null,
    colorway: "Blanc / Noir",
  },
  {
    id: "martens_mocassins",
    brand: "Dr Martens",
    name: "Dr Martens Mocassins",
    price: 35000,
    img: martens_mocassins,
    tone: "#E6E4DF",
    tag: null,
    colorway: "Cuir noir",
  },
];

const SIZES = [39, 40, 41, 42, 43, 44, 45];

/* ============================================================
   Order context (cart + modal)
   ============================================================ */
const OrderCtx = createContext(null);
const useOrder = () => useContext(OrderCtx);

function OrderProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState(null); // product being ordered
  const [drawer, setDrawer] = useState(false); // cart drawer open
  const [confirmed, setConfirmed] = useState(false);

  const lock = (on) => {
    document.body.style.overflow = on ? "hidden" : "";
  };

  const openOrder = useCallback((p) => {
    setActive(p);
    lock(true);
  }, []);
  const closeOrder = useCallback(() => {
    setActive(null);
    if (!drawer) lock(false);
  }, [drawer]);
  const openDrawer = useCallback(() => {
    setDrawer(true);
    lock(true);
  }, []);
  const closeDrawer = useCallback(() => {
    setDrawer(false);
    setConfirmed(false);
    lock(false);
  }, []);

  const addToCart = useCallback((p, size, qty) => {
    setCart((c) => {
      const key = p.id + "-" + size;
      const found = c.find((i) => i.key === key);
      if (found)
        return c.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
      return [
        ...c,
        {
          key,
          id: p.id,
          brand: p.brand,
          name: p.name,
          price: p.price,
          img: p.img,
          size,
          qty,
        },
      ];
    });
  }, []);

  const setQty = (key, q) =>
    setCart((c) =>
      c.flatMap((i) =>
        i.key === key ? (q <= 0 ? [] : [{ ...i, qty: q }]) : [i],
      ),
    );
  const removeItem = (key) => setCart((c) => c.filter((i) => i.key !== key));

  const count = cart.reduce((a, i) => a + i.qty, 0);
  const total = cart.reduce((a, i) => a + i.qty * i.price, 0);

  return (
    <OrderCtx.Provider
      value={{
        cart,
        count,
        total,
        active,
        drawer,
        confirmed,
        setConfirmed,
        openOrder,
        closeOrder,
        openDrawer,
        closeDrawer,
        addToCart,
        setQty,
        removeItem,
      }}
    >
      {children}
    </OrderCtx.Provider>
  );
}

/* ============================================================
   Product card — editorial, with P448-style side order button
   ============================================================ */
function ProductCard({ p, index }) {
  const { openOrder } = useOrder();
  return (
    <article
      className="pcard"
      data-reveal
      style={{ "--reveal-delay": (index % 3) * 90 + "ms" }}
    >
      <div
        className="pcard__media"
        style={{ background: p.tone }}
        onClick={() => openOrder(p)}
      >
        {p.tag && <span className="pcard__tag">{p.tag}</span>}
        <span className="pcard__idx">{String(index + 1).padStart(2, "0")}</span>
        <img src={p.img} alt={p.brand + " " + p.name} loading="lazy" />
        {/* P448-style quick-add: square + that reveals a product thumbnail */}
        <button
          className="pcard__side"
          onClick={(e) => {
            e.stopPropagation();
            openOrder(p);
          }}
          aria-label={"Pré-commander " + p.name}
        >
          <span className="pcard__side-thumb" style={{ background: p.tone }}>
            <img src={p.img} alt="" />
          </span>
          <span className="pcard__side-ic">
            <Icon.Plus />
          </span>
        </button>
      </div>
      <div className="pcard__foot">
        <div className="pcard__info">
          <span className="pcard__brand">{p.brand}</span>
          <h3 className="pcard__name">{p.name}</h3>
          <span className="pcard__cw">{p.colorway}</span>
        </div>
        <div className="pcard__price">{FCFA(p.price)}</div>
      </div>
      <button className="pcard__mobbtn" onClick={() => openOrder(p)}>
        <span>Pré-commander</span>
        <Icon.Arrow />
      </button>
    </article>
  );
}

/* ============================================================
   Order modal / bottom sheet
   ============================================================ */
function OrderModal() {
  const { active, closeOrder, addToCart, openDrawer } = useOrder();
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (active) {
      setSize(null);
      setQty(1);
      setErr(false);
    }
  }, [active]);

  if (!active) return null;
  const p = active;

  const confirm = () => {
    if (!size) {
      setErr(true);
      return;
    }
    addToCart(p, size, qty);
    closeOrder();
    openDrawer();
  };

  return (
    <div className="sheet-root" role="dialog" aria-modal="true">
      <div className="sheet-scrim" onClick={closeOrder} />
      <div className="sheet">
        <button className="sheet__x" onClick={closeOrder} aria-label="Fermer">
          <Icon.Close />
        </button>
        <div className="sheet__grid">
          <div className="sheet__media" style={{ background: p.tone }}>
            <img src={p.img} alt={p.name} />
          </div>
          <div className="sheet__body">
            <span className="eyebrow" style={{ color: "var(--muted)" }}>
              {p.brand}
            </span>
            <h3 className="sheet__name display">{p.name}</h3>
            <div className="sheet__price">{FCFA(p.price)}</div>
            <p className="sheet__note">
              Précommande — réglée maintenant. On garde ta pointure à ton nom et
              on te livre ta paire chez toi à Cotonou.
            </p>

            <div className="sheet__label">
              Pointure {err && <em>· choisis une pointure</em>}
            </div>
            <div className="sizes">
              {SIZES.map((s) => (
                <button
                  key={s}
                  className={"size" + (size === s ? " is-on" : "")}
                  onClick={() => {
                    setSize(s);
                    setErr(false);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="sheet__row">
              <div>
                <div className="sheet__label">Quantité</div>
                <div className="qty">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Moins"
                  >
                    <Icon.Minus />
                  </button>
                  <span>{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(9, q + 1))}
                    aria-label="Plus"
                  >
                    <Icon.Plus />
                  </button>
                </div>
              </div>
              <div className="sheet__subtotal">
                <span>Sous-total</span>
                <b>{FCFA(p.price * qty)}</b>
              </div>
            </div>

            <button className="btn sheet__cta" onClick={confirm}>
              <span>Précommander & payer</span>
              <span className="btn-arrow">
                <Icon.Arrow />
              </span>
            </button>
            <div className="sheet__trust">
              <Icon.Check style={{ color: "var(--green)" }} /> Paiement à la
              précommande · Stock garanti pour ta soutenance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   WhatsApp confirm — editable message before sending
   ============================================================ */
const WA_PHONE = "2290156685767";

function WhatsAppConfirm({ cart, total, onClose }) {
  const buildMsg = () => {
    const lines = cart
      .map(
        (i) =>
          `• ${i.brand} ${i.name} (Pointure ${i.size} × ${i.qty}) — ${FCFA(i.price * i.qty)}`,
      )
      .join("\n");
    return `Bonjour MYBASKETZONE 👋\n\nJe voudrais confirmer ma précommande :\n\n${lines}\n\nTotal : ${FCFA(total)}\n\nLivraison à Cotonou 🚚`;
  };

  const [msg, setMsg] = useState(() => buildMsg());

  const send = () => {
    window.open(
      `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="wa-confirm">
      <div className="wa-confirm__head">
        <div className="confirm__badge">
          <Icon.Check />
        </div>
        <h4 className="display">Précommande confirmée !</h4>
        <p className="wa-confirm__desc">
          Finalise ta réservation en envoyant le message ci-dessous sur
          WhatsApp. Tu peux le modifier avant d'envoyer.
        </p>
      </div>
      <div>
        <div className="wa-confirm__label">Message WhatsApp</div>
        <textarea
          className="wa-confirm__msg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={9}
        />
      </div>
      <div className="wa-confirm__actions">
        <button className="btn wa-confirm__send" onClick={send}>
          <Icon.Whatsapp />
          <span>Envoyer sur WhatsApp</span>
          <span className="btn-arrow">
            <Icon.Arrow />
          </span>
        </button>
        <button className="btn btn--ghost wa-confirm__close" onClick={onClose}>
          <span>Fermer</span>
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   Cart drawer
   ============================================================ */
function CartDrawer() {
  const {
    drawer,
    closeDrawer,
    cart,
    total,
    count,
    setQty,
    removeItem,
    confirmed,
    setConfirmed,
  } = useOrder();
  return (
    <div
      className={"drawer-root" + (drawer ? " is-open" : "")}
      aria-hidden={!drawer}
    >
      <div className="drawer-scrim" onClick={closeDrawer} />
      <aside className="drawer">
        <header className="drawer__head">
          <div>
            <span className="eyebrow" style={{ color: "var(--muted)" }}>
              Ta précommande
            </span>
            <h3 className="drawer__title display">Panier · {count}</h3>
          </div>
          <button
            className="drawer__x"
            onClick={closeDrawer}
            aria-label="Fermer"
          >
            <Icon.Close />
          </button>
        </header>

        {confirmed ? (
          <WhatsAppConfirm cart={cart} total={total} onClose={closeDrawer} />
        ) : cart.length === 0 ? (
          <div className="drawer__empty">
            <p className="serif-it">Ton panier est vide.</p>
            <span>Choisis ta paire avant la rupture.</span>
            <button className="btn btn--ghost" onClick={closeDrawer}>
              <span>Voir la collection</span>
            </button>
          </div>
        ) : (
          <>
            <div className="drawer__items">
              {cart.map((i) => (
                <div className="citem" key={i.key}>
                  <div className="citem__img">
                    <img src={i.img} alt={i.name} />
                  </div>
                  <div className="citem__mid">
                    <span className="citem__brand">{i.brand}</span>
                    <h4>{i.name}</h4>
                    <span className="citem__size">Pointure {i.size}</span>
                    <div className="qty qty--sm">
                      <button
                        onClick={() => setQty(i.key, i.qty - 1)}
                        aria-label="Moins"
                      >
                        <Icon.Minus />
                      </button>
                      <span>{i.qty}</span>
                      <button
                        onClick={() => setQty(i.key, i.qty + 1)}
                        aria-label="Plus"
                      >
                        <Icon.Plus />
                      </button>
                    </div>
                  </div>
                  <div className="citem__right">
                    <button
                      className="citem__rm"
                      onClick={() => removeItem(i.key)}
                      aria-label="Retirer"
                    >
                      <Icon.Close />
                    </button>
                    <span className="citem__price">
                      {FCFA(i.price * i.qty)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <footer className="drawer__foot">
              <div className="drawer__line">
                <span>Sous-total</span>
                <b>{FCFA(total)}</b>
              </div>
              <div className="drawer__line drawer__line--mut">
                <span>Livraison Cotonou</span>
                <b>Offerte</b>
              </div>
              <div className="drawer__total">
                <span>Total à régler</span>
                <b>{FCFA(total)}</b>
              </div>
              <button
                className="btn drawer__pay"
                onClick={() => setConfirmed(true)}
              >
                <span>Payer la précommande</span>
                <span className="btn-arrow">
                  <Icon.Arrow />
                </span>
              </button>
              <div className="sheet__trust">
                <Icon.Check style={{ color: "var(--green)" }} /> Paiement
                maintenant · Pas de paiement à la livraison
              </div>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}

export {
  PRODUCTS,
  SIZES,
  FCFA,
  OrderProvider,
  useOrder,
  ProductCard,
  OrderModal,
  CartDrawer,
};
