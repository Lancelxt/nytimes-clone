import React from "react";
import "./HeroSection.css";
import useFetch from "../../hooks/UseFetch";
import moment from "moment";
const HeroSection = () => {
  const { data, loading, error } = useFetch("topstories/v2/world.json?api-key=");

  const formattedDate = data?.results?.[0]?.created_date
    ? moment(data?.results?.[0]?.created_date).fromNow()
    : "";

  return (
    <div className="hero-section">
      <div className="top-story">
        <figure>
          <img
            src={data?.results?.[0]?.multimedia?.[0]?.url ?? ""}
            alt="article"
            className="img-1"
          />
          <figcaption className="caption" style={{textAlign:"right"}}>
            {data?.results?.[0]?.multimedia?.[0]?.copyright}
          </figcaption>
        </figure>
        <h3 className="hero-heading">{data?.results?.[0]?.title}</h3>
        <p className="hero-abstract">{data?.results?.[0]?.abstract}</p>
        <p className="hero-credit"><span>{formattedDate}</span> . <span style={{textTransform:"uppercase"}}>{data?.results?.[0]?.byline}</span></p>
      </div>
      <div className="second-story">
        <figure>
          <img
            src={data?.results?.[1]?.multimedia?.[0]?.url ?? ""}
            alt="article"
            className="img-2"
          />
          <figcaption className="caption" style={{textAlign:"right"}}>
            {data?.results?.[1]?.multimedia?.[0]?.copyright}
          </figcaption>
        </figure>
        <h3 className="hero-heading">{data?.results?.[1]?.title}</h3>
        <p className="hero-abstract">{data?.results?.[1]?.abstract}</p>
        <p className="hero-credit"><span>{formattedDate}</span> . <span style={{textTransform:"uppercase"}}>{data?.results?.[1]?.byline}</span></p>
      </div>
      <div className="right-story-container">
      <div className="right-story">
        <figure>
          <img
            src={data?.results?.[2]?.multimedia?.[0]?.url ?? ""}
            alt="article"
            className="img-2"
          />
          <figcaption className="caption" style={{textAlign:"right"}}>
            {data?.results?.[2]?.multimedia?.[0]?.copyright}
          </figcaption>
        </figure>
        <h3 className="hero-heading">{data?.results?.[2]?.title}</h3>
        <p className="hero-abstract">{data?.results?.[2]?.abstract}</p>
        <p className="hero-credit"><span>{formattedDate}</span> . <span style={{textTransform:"uppercase"}}>{data?.results?.[2]?.byline}</span></p>
      </div>
      <div className="right-story">
        <figure>
          <img
            src={data?.results?.[3]?.multimedia?.[0]?.url ?? ""}
            alt="article"
            className="img-2"
          />
          <figcaption className="caption" style={{textAlign:"right"}}>
            {data?.results?.[3]?.multimedia?.[0]?.copyright}
          </figcaption>
        </figure>
        <h3 className="hero-heading">{data?.results?.[3]?.title}</h3>
        <p className="hero-abstract">{data?.results?.[3]?.abstract}</p>
        <p className="hero-credit"><span>{formattedDate}</span> . <span style={{textTransform:"uppercase"}}>{data?.results?.[3]?.byline}</span></p>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;