import React, { useState } from "react";
import "../assets/css/home-page.css";
import { NavLink, Link } from "react-router-dom";
import BlogList from "../components/BlogList";
const ImageSource = "./src/assets/images";

function HomePage() {
  const [email, setEmail] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const handleSubscribe = () => {
    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email.trim())) {
      setSubmittedEmail(email);
      setEmail(""); // Clear input after submit
    } else {
      alert("Please enter a valid email address.");
    }
  };
  return (
    <>
      <section className="banner-sec">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-6">
              <div className="banner-left-sec">
                <div className="banner-heading">
                  <h1>
                    Powered by <span>Nature</span> <br />
                    Loved by <span>Skin</span>
                  </h1>
                  <p>
                    Nurture your skin with clean, plant-powered skincare made to
                    restore <br className="d-none d-md-block" /> balance,
                    radiance, and confidence—straight from nature’s best.
                  </p>

                  <div className="banner-right-sec d-md-none">
                    <img src={`${ImageSource}/banner-pc.png`} alt="Banner Pc" />
                  </div>
                  <ul className="banner-adv">
                    <li>
                      <img
                        src={`${ImageSource}/check-mark.svg`}
                        alt="Check Mark"
                      />
                      100% Plant-Based Ingredients
                    </li>
                    <li>
                      <img
                        src={`${ImageSource}/check-mark.svg`}
                        alt="Check Mark"
                      />
                      No Harmful Chemicals or Fillers
                    </li>
                    <li>
                      <img
                        src={`${ImageSource}/check-mark.svg`}
                        alt="Check Mark"
                      />
                      Cruelty-Free & Vegan Certified
                    </li>
                    <li>
                      <img
                        src={`${ImageSource}/check-mark.svg`}
                        alt="Check Mark"
                      />
                      Gentle on Sensitive Skin
                    </li>
                    <li>
                      <img
                        src={`${ImageSource}/check-mark.svg`}
                        alt="Check Mark"
                      />
                      Powered by Nature, Backed by Science
                    </li>
                  </ul>

                  <NavLink to="/products/" className="common-btn">
                    Try it today <img src={`${ImageSource}/arrow.svg`} alt="" />
                  </NavLink>

                  <div className="banner-review-content">
                    <p>
                      "Botaniq Glow completely changed my skincare game. The
                      Radiance Serum makes my skin look brighter and feel
                      smoother—plus, I love that it's all plant-based. So glad I
                      found this brand!"
                    </p>
                    <div className="banner-author-details">
                      <img
                        src={`${ImageSource}/review-author.png`}
                        alt="Review Author"
                      />
                      <div className="banner-author-sub-det">
                        <p>
                          Ananya Mehra <br />
                          <span>Mumbai, Maharastra</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="banner-right-sec">
                <img src={`${ImageSource}/banner-pc.png`} alt="Banner Pc" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-products-sec">
        <div className="container">
          <div className="our-prod-hdng">
            <h2 className="sec-hdng">Our Products</h2>
          </div>
          <div className="our-prod-content-container">
            <div className="our-prod-content">
              <div className="row">
                <div className="col-md-7">
                  <Link to="/collection/Facial-Care">
                    <img
                      src={`${ImageSource}/our-prod-pc1.png`}
                      alt="Facial Care"
                    />
                  </Link>
                </div>
                <div className="col-md-5">
                  <Link to="/collection/Special-Treatments"><img
                    src={`${ImageSource}/our-prod-pc2.png`}
                    alt="Special Treatments"
                  /></Link>
                   <Link to="/collection/Extras-Rituals"><img
                    src={`${ImageSource}/our-prod-pc3.png`}
                    alt="Extras / Rituals"
                  /></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="about-us-left-content">
                <img src={`${ImageSource}/about-us-pc.png`} alt="" className="d-none d-md-block" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-us-right-content">
                <h3>
                  <img src={`${ImageSource}/about-us-hdng.png`} alt="" /> About
                  Us
                </h3>
                <img src={`${ImageSource}/about-us-pc.png`} className="d-md-none" alt="" />
                <p>
                  At <strong>Botaniq Glow</strong>, we believe that radiant skin
                  starts with the earth. Inspired by the healing power of
                  botanicals and driven by a commitment to clean beauty, our
                  mission is simple: to create skincare that’s pure, effective,
                  and deeply nourishing — without compromise.
                </p>
                <p>
                  Every product is thoughtfully crafted using plant-based
                  ingredients known for their skin-loving benefits, backed by
                  gentle science and ethical sourcing. We leave out the harsh
                  chemicals, synthetic fragrances, and unnecessary fillers —
                  because your skin deserves better.
                </p>
                <p>
                  Rooted in nature and elevated by simplicity, our formulas are
                  designed to support real skin, real routines, and real
                  results. Whether you're looking to hydrate, restore, or simply
                  glow, Botaniq Glow is your partner in building a skincare
                  ritual that feels as good as it looks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ingredients-sec">
        <div className="container">
          <div className="ingredients-hdng">
            <h2 className="sec-hdng">Ingredients</h2>
          </div>
          <div className="ingredients-content-container">
            <div className="row">
              <div className="col-md-4">
                <div className="ingredients-content">
                  <img src={`${ImageSource}/ingredients-pc1.png`} alt="" />
                  <h4>Rosehip Oil</h4>
                  <p>
                    Rich in antioxidants and vitamins A & C, helps brighten skin
                    and reduce signs of aging.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="ingredients-content">
                  <img src={`${ImageSource}/ingredients-pc2.png`} alt="" />
                  <h4>Green Tea Extract</h4>
                  <p>Soothes inflammation and fights free radicals.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="ingredients-content">
                  <img src={`${ImageSource}/ingredients-pc3.png`} alt="" />
                  <h4>Sea Buckthorn</h4>
                  <p>
                    Boosts hydration and supports skin repair with omega fatty
                    acids.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="ingredients-content">
                  <img src={`${ImageSource}/ingredients-pc4.png`} alt="" />
                  <h4>Aloe Vera</h4>
                  <p>Deeply hydrates and calms sensitive skin.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="ingredients-content">
                  <img src={`${ImageSource}/ingredients-pc5.png`} alt="" />
                  <h4>Witch Hazel</h4>
                  <p>Gently tones and purifies without stripping moisture.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="ingredients-content">
                  <img src={`${ImageSource}/ingredients-pc6.png`} alt="" />
                  <h4>Chamomile</h4>
                  <p>Reduces redness and promotes a healthy glow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="always-clean-sec">
        <div className="container">
          <div className="always-clean-hdng">
            <h3>
              Always <span className="color-scheme-1">Clean,</span>
              <br />
              Never <span className="color-scheme-2">Compromised.</span>
            </h3>

            <ul>
              <li>
                <img src={`${ImageSource}/cross-mark.svg`} alt="" /> No Parabens
              </li>
              <li>
                <img src={`${ImageSource}/cross-mark.svg`} alt="" /> No Sulfates
              </li>
              <li>
                <img src={`${ImageSource}/cross-mark.svg`} alt="" /> No
                Artificial Fragrances
              </li>
              <li>
                <img src={`${ImageSource}/cross-mark.svg`} alt="" /> No Alcohols
                or Silicones
              </li>
              <li>
                <img src={`${ImageSource}/cross-mark.svg`} alt="" /> Not Tested
                on Animals.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BlogList />

      <section className="glow-email-sec">
        <div className="container">
          <div className="glow-email-content-container">
            <div className="glow-email-left-content d-md-block d-none">
              <img src={`${ImageSource}/glow-email-pc.png`} className="" alt="" />
            </div>
            <div className="glow-email-right-content">
              {!submittedEmail && (
                <>
                  <h3>Stay in the Glow</h3>
                  <img src={`${ImageSource}/glow-email-pc.png`} className="d-block d-md-none w-100" alt="" />
                  <p>
                    Be the first to know about exclusive offers, skincare tips,
                    and new botanical launches — straight to your inbox.
                  </p>

                  <div className="email-content-container">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                    />
                    <button className="common-btn" onClick={handleSubscribe}>
                      Glow With Us
                    </button>
                  </div>
                </>
              )}
              {submittedEmail && (
                <div className="after-email-content-container">
                  <img src={`${ImageSource}/thanks.png`} alt="Thank you" />
                  <p>
                    Thanks for putting your Trust upon us. We have received your
                    Email Address: <br />
                    <strong>{submittedEmail}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
