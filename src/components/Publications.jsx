
// Publications.jsx
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import publications from "../data/publicationData";

export const Publications = () => {
  const refs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el, idx) => {
      if (el) {
        el.dataset.index = idx;
        observer.observe(el);
      }
    });

    return () => {
      refs.current.forEach(el => el && observer.unobserve(el));
    };
  }, [visibleItems]);

  return (
    <section className="publications-section" id="publications">
      <Container>
        <h2 className="section-title">Publications</h2>
        <div className="timeline">
          {publications.map((pub, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                ref={el => (refs.current[idx] = el)}
                className={`timeline-item ${isLeft ? "left" : "right"} ${
                  visibleItems.includes(idx) ? "visible" : ""
                }`}
              >
                {/* Date pill */}
                <div className={`date-pill ${isLeft ? "left" : "right"}`}>
                   <span>{pub.date}</span>
                </div>

                {/* Content */}
                <div className="timeline-content">
                  <h3 className="pub-title">{pub.title}</h3>
                  {pub.award && (
    <div className="pub-award">
      🏆 <em>{pub.award}</em>
    </div>
  )}
                  <div className="pub-conference">{pub.conference}</div>
                  <div className="pub-summary">{pub.summary}</div>
                  <div className="pub-story">{pub.story}</div>
                  {pub.link && (
                    <button onClick={() => window.open(pub.link, "_blank")}>
                      Read Paper
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};