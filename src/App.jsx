import { useMemo, useState } from 'react';
import './App.css';
import Logo from './assets/logo.svg';

const eventsData = [
  {
    id: 'e-1',
    title: 'Frühlingsfest im Park',
    date: 'Sa, 18. April 2026',
    description: 'Gemeinsamer Spaziergang, Spiele & gemütliches Beisammensein mit Kuchenbuffet.'
  },
  {
    id: 'e-2',
    title: 'Workshop: Urban Gardening',
    date: 'Mi, 29. April 2026',
    description: 'Lerne, wie man auf kleinem Raum nachhaltiges Gemüse und Kräuter anbaut.'
  },
  {
    id: 'e-3',
    title: 'Konzertabend im Gemeindehaus',
    date: 'Fr, 10. Mai 2026',
    description: 'Live-Musik von lokalen Bands, Getränke & Open-Stage für Talente.'
  }
];

function App() {
  const [events] = useState(eventsData);
  const nextEvent = useMemo(() => events[0], [events]);

  return (
    <div className="app">
      <header className="hero">
        <div className="hero__content">
          <img className="hero__logo" src={Logo} alt="Bitzli Logo" />
          <h1 className="hero__title">Bitzli e.V.</h1>
          <p className="hero__subtitle">
            Gemeinsam gestalten wir Veranstaltungen für unsere Nachbarschaft.
          </p>
          <a className="hero__cta" href="#events">
            Jetzt Events entdecken
          </a>
        </div>
      </header>

      <main>
        <section className="section" id="events">
          <div className="section__inner">
            <h2 className="section__title">Aktuelle Events</h2>
            <p className="section__lead">
              Diese Veranstaltungen planen wir aktuell – sei gern mit dabei.
            </p>

            <div className="events">
              {events.map((event) => (
                <article key={event.id} className="event-card">
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__date">{event.date}</p>
                  <p className="event-card__description">{event.description}</p>
                </article>
              ))}
            </div>

            <div className="event-cta">
              <p>
                Nächstes Event: <strong>{nextEvent.title}</strong> am{' '}
                <strong>{nextEvent.date}</strong>
              </p>
              <a className="button" href="#contact">
                Fragen? Schreib uns!
              </a>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="about">
          <div className="section__inner">
            <h2 className="section__title">Über uns</h2>
            <p className="section__lead">
              Bitzli e.V. ist ein lokaler Verein, der Menschen aus der Umgebung vernetzt und gemeinsam
              Veranstaltungen organisiert. Unser Ziel ist es, Gemeinschaft zu fördern und einen Raum für
              Austausch, Kultur und Freizeit zu schaffen.
            </p>

            <div className="cards">
              <div className="card">
                <h3>Unsere Werte</h3>
                <p>
                  Offenheit, Nachhaltigkeit und Zusammenarbeit stehen für uns an erster Stelle. Wir freuen
                  uns über jede neue Idee und jedes neue Gesicht.
                </p>
              </div>
              <div className="card">
                <h3>Mitmachen</h3>
                <p>
                  Du kannst bei uns aktiv werden oder einfach an unseren Veranstaltungen teilnehmen. Jeder
                  ist willkommen – bring dich ein, so viel du willst.
                </p>
              </div>
              <div className="card">
                <h3>Transparenz</h3>
                <p>
                  Wir kommunizieren Termine, Themen und Entscheidungen offen. Bei unseren Treffen sind alle
                  Stimmen wichtig.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section__inner">
            <h2 className="section__title">Kontakt</h2>
            <p className="section__lead">
              Schreibe uns eine Nachricht oder folge uns auf unseren Social-Media-Kanälen.
            </p>

            <div className="contact">
              <div className="contact__info">
                <h3>Adresse</h3>
                <p>Vereinsheim Bitzli<br />Beispielstraße 12<br />12345 Musterstadt</p>

                <h3>Mail</h3>
                <p>
                  <a href="mailto:kontakt@bitzli.de">kontakt@bitzli.de</a>
                </p>

                <h3>Telefon</h3>
                <p>+49 123 456789</p>
              </div>

              <form className="contact__form" onSubmit={(event) => event.preventDefault()}>
                <label>
                  Dein Name
                  <input type="text" name="name" placeholder="Name" required />
                </label>

                <label>
                  Deine E‑Mail
                  <input type="email" name="email" placeholder="mail@example.com" required />
                </label>

                <label>
                  Nachricht
                  <textarea name="message" rows="5" placeholder="Worum geht's?" required />
                </label>

                <button className="button" type="submit">
                  Nachricht senden
                </button>

                <p className="hint">Hinweis: Dieses Formular ist aktuell nur für die lokale Vorschau.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Bitzli e.V. &bull; Alle Rechte vorbehalten.
        </p>
      </footer>
    </div>
  );
}

export default App;
