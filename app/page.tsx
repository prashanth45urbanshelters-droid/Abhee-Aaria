const homes = [
  ["01", "1 BHK", "709 – 755", "1T"],
  ["02", "2 BHK", "1320 – 1330", "2T"],
  ["03", "2.5 BHK", "1430 – 1440", "2T"],
  ["04", "3 BHK", "1670 – 1780", "3T"],
  ["05", "3.5 BHK", "2020 – 2030", "3T"],
  ["06", "4.5 BHK", "2500", "4T"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav wrap">
          <a href="#home" className="brand" aria-label="Abhee Aaria home">
            <span className="brand-mark">A</span><span>ABHEE <i>Aaria</i></span>
          </a>
          <div className="links">
            <a href="#overview">Overview</a><a href="#residences">Residences</a><a href="#amenities">Amenities</a>
          </div>
          <a href="#enquire" className="nav-cta">Enquire now <span>↗</span></a>
        </nav>
        <div className="hero-content wrap">
          <p className="eyebrow light">An address above the ordinary</p>
          <h1>Elevate every<br/><em>day.</em></h1>
          <p className="hero-copy">A refined collection of residences, thoughtfully positioned in the heart of Gunjur, East Bangalore.</p>
          <div className="hero-actions"><a className="button" href="#enquire">Request a callback</a><a className="text-link" href="#overview">Discover the project <span>↓</span></a></div>
        </div>
        <div className="hero-bottom wrap"><span>ABHEE AARIA</span><span>Near Gunjur Lake · East Bangalore</span></div>
      </section>

      <section className="intro wrap" id="overview">
        <div><p className="eyebrow">Welcome to Abhee Aaria</p><h2>Space to live<br/>on a <em>higher plane.</em></h2></div>
        <div className="intro-copy"><p>Designed for those who seek a fuller expression of life, Abhee Aaria brings contemporary architecture, expansive spaces and a considered lifestyle together.</p><p>Set beside Akshatha Palace, this is an address that puts you close to what matters, while keeping the everyday beautifully removed from the ordinary.</p><a href="#enquire" className="text-link gold">Explore your future home <span>↗</span></a></div>
      </section>

      <section className="stats"><div className="wrap stat-grid">
        <div><strong>12</strong><span>Acres of elevated living</span></div><div><strong>G + 31</strong><span>Floors of thoughtful design</span></div><div><strong>50+</strong><span>Curated lifestyle amenities</span></div><div><strong>60,000</strong><span>Sq.ft luxury clubhouse</span></div>
      </div></section>

      <section className="residences wrap" id="residences">
        <div className="section-top"><div><p className="eyebrow">The residences</p><h2>Made for<br/><em>more living.</em></h2></div><p>From an efficient one-bedroom retreat to an expansive family residence, every home is composed for light, ease and lasting comfort.</p></div>
        <div className="home-grid">{homes.map(([number, name, size, beds]) => <article className="home-card" key={name}><span className="number">{number}</span><h3>{name}</h3><p>{size} <small>Sq.ft</small></p><div><span>{beds} Bedrooms</span><span>{beds.replace('T', '')} Toilets</span></div><a href="#enquire">Request floor plan <b>↗</b></a></article>)}</div>
      </section>

      <section className="feature-image"><img src="/elevation.png" alt="Abhee Aaria residential towers"/><div className="image-caption wrap"><p className="eyebrow light">A landmark presence</p><h2>Architecture that<br/>rises with <em>intention.</em></h2></div></section>

      <section className="amenities wrap" id="amenities"><p className="eyebrow">A life beyond your door</p><div className="section-top"><h2>Every indulgence,<br/><em>in its place.</em></h2><p>Over 50 experiences across a vibrant social and wellness landscape, anchored by a 60,000 sq.ft. luxury clubhouse.</p></div><div className="amenity-grid"><div><b>01</b><h3>Wellness</h3><p>Fitness studio, yoga spaces and places to recharge at your pace.</p></div><div><b>02</b><h3>Leisure</h3><p>Clubhouse experiences designed for connection and celebration.</p></div><div><b>03</b><h3>Recreation</h3><p>Active spaces for sport, play and effortless family time.</p></div><div><b>04</b><h3>Convenience</h3><p>Two-level basement parking and a seamless everyday arrival.</p></div></div></section>

      <section className="location"><div className="wrap location-inner"><div><p className="eyebrow light">The location</p><h2>Close to the city.<br/>Closer to <em>yourself.</em></h2></div><div className="location-list"><p><span>01</span> Next to Akshatha Palace</p><p><span>02</span> Near Gunjur Lake</p><p><span>03</span> East Bangalore</p></div></div></section>

      <section className="enquire wrap" id="enquire"><div className="enquire-copy"><p className="eyebrow">Begin your story here</p><h2>Live the life<br/>you&apos;ve <em>imagined.</em></h2><p>Starting from <strong>₹10,699 / Sq.ft</strong><br/><small>All inclusive. Additional charges apply: FRC, PLC, Corpus Fund & Registration.</small></p></div><form><h3>Request a callback</h3><p>Our team will be in touch to share plans, pricing and availability.</p><div className="form-row"><label>First name<input placeholder="Your name" required/></label><label>Phone number<input type="tel" placeholder="+91 00000 00000" required/></label></div><label>Email address<input type="email" placeholder="you@email.com" required/></label><label>Interested in<select defaultValue=""><option value="" disabled>Select configuration</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>3.5 BHK</option><option>4.5 BHK</option></select></label><button type="submit">Request a call <span>↗</span></button><small>By submitting, you agree to be contacted about Abhee Aaria.</small></form></section>

      <footer><div className="wrap footer-top"><div className="footer-brand"><img src="/abhee-aariya-logo.png" alt="Abhee Aaria logo"/><p>An elevated residential address near Gunjur Lake, East Bangalore.</p></div><div><p className="eyebrow light">Explore</p><a href="#overview">Overview</a><a href="#residences">Residences</a><a href="#amenities">Amenities</a></div><div><p className="eyebrow light">Connect</p><a href="#enquire">Enquire now</a><a href="#home">Back to top ↑</a></div></div><div className="wrap legal">© 2026 Abhee Aaria. All rights reserved. <span>Images are artistic impressions.</span></div></footer>
    </main>
  );
}
