export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            🇵🇰 Pakistan&apos;s Auto Parts Marketplace
          </div>

          <h1>
            Find the Right <span>Auto Parts</span>
            <br />
            for Your Vehicle
          </h1>

          <p>
            Search genuine and used car parts from trusted suppliers,
            shops and auto-part dealers across Pakistan.
          </p>

          <div className="hero-buttons">
            <a href="#vehicle-search" className="btn btn-primary">
              Find Auto Parts →
            </a>

            <a href="#request-part" className="btn btn-outline hero-light-btn">
              Request a Part
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <strong>10,000+</strong>
              <span>Parts Listed</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Verified Sellers</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Cities Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}