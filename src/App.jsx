import { useMemo, useState } from 'react';
import './App.css';
import Logo from './assets/bitzli_logo.png';

const eventsData = [
  {
    id: 'e-1',
    title: 'Barbecue & Rock',
    date: 'Sa,11. Juli 2026',
    description: 'Barbecue und Live-Musik im Hof Schänis.'
  },
  {
    id: 'e-2',
    title: 'Event 2',
    date: 'Sa, 26. September 2026',
    description: 'Beschreibung Event 2.'
  },
  {
    id: 'e-3',
    title: 'Event 3',
    date: 'Fr, 30. November 2026',
    description: 'Beschreibung Event 3.'
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
          <h1 className="hero__title">Bitzli Events</h1>
          <p className="hero__subtitle">
            Eifach überall bitzli besser <br />
            Gemeinsam gestalten wir Veranstaltungen in unserer Umgebung.
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
                <h3>Transparenz</h3>
                <p>
                  Wir kommunizieren Termine, Themen und Entscheidungen offen. Bei unseren Treffen sind alle
                  Stimmen wichtig.
                </p>
              </div>
              <div className="card">
                <h3>Offenheit</h3>
                <p>
                  Bei unseren Events ist jeder willkommen – egal ob jung oder alt, mit oder ohne Vorerfahrung. Wir freuen uns auf euch.
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
                <p>Bitzli Events<br />Beispielstraße 12<br />12345 Musterstadt</p>

                <h3>Mail</h3>
                <p>
                  <a href="mailto:kontakt@bitzli.de">kontakt@bitzli.de</a>
                </p>
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
