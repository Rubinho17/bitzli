import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Logo from './assets/bitzli_logo.png';

const eventsData = [
  {
    id: 'e-1',
    title: 'Barbecue & Rock',
    date: 'Sa, 11. Juli 2026',
    time: '17:30 - 23:00',
    location: 'Hof Schänis, Dorfstrasse 8',
    description: 'Barbecue und Live-Musik im Hof Schänis.',
    details: 'Geniesse Grill-Spezialitäten, Bier und regionale Bands unter freiem Himmel. Anmeldung empfohlen.'
  },
  {
    id: 'e-2',
    title: 'Street Art Tour',
    date: 'Sa, 26. September 2026',
    time: '15:00 - 18:00',
    location: 'Start: Bahnhofplatz',
    description: 'Geführte Tour durch urbane Kunstwerke.',
    details: 'Treffpunkt am Bahnhof, bequeme Schuhe tragen. Dauer ca. 3 Stunden, Regenjacke mitnehmen.'
  },
  {
    id: 'e-3',
    title: 'Wintermarkt',
    date: 'Fr, 30. November 2026',
    time: '10:00 - 20:00',
    location: 'Marktplatz',
    description: 'Markt mit Kunsthandwerk, Punsch und Musik.',
    details: 'Viele lokale Anbieter und eine Bühne mit Live-Acts. Eintritt frei.'
  }
];

function App() {
  const [events] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const nextEvent = useMemo(() => events[0], [events]);

  const openEventDetails = (event) => setSelectedEvent(event);
  const closeEventDetails = () => setSelectedEvent(null);

  useEffect(() => {
    if (!selectedEvent) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeEventDetails();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

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
                <article key={event.id} className="event-card" onClick={() => openEventDetails(event)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openEventDetails(event); }}>
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__date">{event.date} | {event.time}</p>
                  <p className="event-card__location">{event.location}</p>
                  <p className="event-card__description">{event.description}</p>
                  <p className="event-card__hint">Klicke hier für Details</p>
                </article>
              ))}
            </div>

            {selectedEvent && (
              <div className="event-modal" onClick={closeEventDetails} role="dialog" aria-modal="true" aria-label="Event Details">
                <div className="event-modal__content" onClick={(e) => e.stopPropagation()}>
                  <button className="event-modal__close" onClick={closeEventDetails} aria-label="Schliessen">×</button>
                  <h3>{selectedEvent.title}</h3>
                  <p><strong>Datum:</strong> {selectedEvent.date}</p>
                  <p><strong>Uhrzeit:</strong> {selectedEvent.time}</p>
                  <p><strong>Ort:</strong> {selectedEvent.location}</p>
                  <p><strong>Beschreibung:</strong> {selectedEvent.description}</p>
                  <p>{selectedEvent.details}</p>
                </div>
              </div>
            )}

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
                <p>Bitzli Events<br />Rüti Dorf<br />8718 Schänis</p>

                <h3>Mail</h3>
                <p>
                  <a href="mailto:kontakt@bitzli.de">bitzli@??.ch</a>
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
