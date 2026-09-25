import React from 'react';
import { menuMidiData } from '../data/menuData';
import './MenuMidi.css';

function MenuMidi() {
  const formules = menuMidiData["Formules du Midi"];
  const softs = menuMidiData["Softs"];
  const mojito = menuMidiData["Mojito"];
  const mocktails = menuMidiData["Mocktails"];

  return (
    <section className="menu-midi">
      <div className="menu-midi__hero">
        <span className="menu-midi__eyebrow">CURRY GRILL · DÉJEUNER</span>
        <h2 className="menu-midi__title">Menu Midi</h2>
        <p className="menu-midi__intro">Des formules généreuses, des boissons fraîches et des créations maison.</p>
      </div>

      <div className="formule-grid">
        {formules.map((f, index) => (
          <article className="formule-card" key={f.name}>
            <div className="formule-card__topline">
              <span className="formule-card__number">0{index + 1}</span>
              <span className="formule-card__label">FORMULE MIDI</span>
            </div>
            <h3 className="formule-card__name">{f.name}</h3>
            <p className="formule-card__list">{f.desc}</p>
            <div className="formule-card__bottom">
              <span className="formule-card__included">COMPOSITION INCLUSE</span>
              <span className="formule-card__price">{f.price}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="menu-midi__section-heading">
        <span>01</span>
        <h3>Boissons</h3>
        <div />
      </div>

      <div className="drinks-grid">
        <article className="drink-block drink-block--softs">
          <div className="drink-block__top">
            <h3 className="drink-block__title">Les Softs</h3>
            <span className="drink-block__price"><b>{softs.price}</b><small>LE VERRE</small></span>
          </div>
          <div className="drink-chips">
            {softs.items.map((item) => (
              <span className="drink-chip" key={item}>{item}</span>
            ))}
          </div>
          {softs.note && <p className="drink-note">{softs.note}</p>}
          <div className="drink-sizes">
            {softs.extras.map((extra) => (
              <div className="size-row" key={extra.name}>
                <span>{extra.name}</span>
                <span>{extra.sizes.map((s) => `${s.label} : ${s.price}`).join(' / ')}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="drink-block drink-block--mojito">
          <div className="drink-block__top">
            <h3 className="drink-block__title">Les Mojito</h3>
            <span className="drink-block__price"><b>{mojito.price}</b><small>LE VERRE</small></span>
          </div>
          <div className="drink-chips">
            {mojito.items.map((item) => (
              <span className="drink-chip" key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>

      <div className="menu-midi__section-heading menu-midi__section-heading--mocktails">
        <span>02</span>
        <h3>Mocktails maison</h3>
        <div />
      </div>

      <div className="mocktail-grid">
        {mocktails.map((m, index) => (
          <article className="mocktail-card" key={m.name}>
            <span className="mocktail-card__number">0{index + 1}</span>
            <h3>{m.name}</h3>
            <p>{m.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MenuMidi;
