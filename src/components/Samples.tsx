import "../styles/Samples.css";
import apiFetcherPic from "../imgs/apifetcher.png";
import youtubePic from "../imgs/youtube.png";
import { wrap } from "module";

const Samples = () => {
  const YOUTUBE_URL = "https://nilk15.github.io/youtube-design-html-css-only/";
  const APIFETCHER_URL = "https://nilk15.github.io/react-multi-api-fetcher/";

  return (
    <section id="samplesSection" className="samplesSection">
      <header className="samplesHeader">Projects</header>
      <header className="samplesHeaderDesktop">
        <p>Hosted Apps</p>
      </header>
      <main className="samplesMain">
        <div
          className="samplesProject"
          onClick={() => window.open(APIFETCHER_URL, "_blank")}
        >
          <p>API Fetcher</p>
          <img src={apiFetcherPic} alt="Nothing"></img>
        </div>
        <div
          style={{ backgroundColor: "black" }}
          className="samplesProject"
          onClick={() => window.open(YOUTUBE_URL, "_blank")}
        >
          <p style={{ color: "white" }}>YouTube Design</p>
          <img src={youtubePic} alt="Nothing"></img>
        </div>
        <div className="samplesProject">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                whiteSpace: "pre-wrap",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              More Projects Coming Soon...
            </p>
          </div>
        </div>
      </main>
      <footer className="samplesFooter">
        <p>More Projects on GitHub</p>
        <a href="www.github.com/nilk15">Learn More</a>
      </footer>
    </section>
  );
};
export default Samples;
