import React from "react";
import { css } from "emotion";
import "./styles.css";

const components = [
  {
    color: "rgba(255, 1, 5, 1.00)",
    title: "Magic Link",
    url: "https://github.com/sublayerio/magic-link",
    status: "concept",
    description:
      "Make passwords redundant. Let users sign in using magic links."
  },
  {
    color: "hsl(131, 72%, 51%)",
    title: "Webpage to PDF",
    url: "https://github.com/sublayerio/webpage-to-pdf",
    status: "dev-ready",
    description: "Turn webpages into PDF's using Chrome's headless API."
  },
  {
    color: "rgb(0, 189, 248)",
    title: "Webpage to Image",
    url: "https://github.com/sublayerio/webpage-to-image",
    status: "dev-ready",
    description: "Make screenshots of webpages using Chrome's headless API."
  },
  {
    color: "#6f42c1",
    title: "Message Service",
    status: "concept",
    description:
      "Send messages via multiple channels. E-mail, SMS, Slack, Webhook, Monday, etc."
  },
  {
    color: "rgb(0, 153, 255)",
    title: "Message Preview",
    status: "concept",
    description: "Preview and interact with dynamic message templates."
  },
  {
    color: "rgb(238, 228, 217)",
    title: "Task Manager",
    status: "concept",
    description:
      "Monitor (recurrent) tasks that have been added to a Bull queue."
  },
  {
    color: "rgb(170, 34, 170)",
    title: "Frame",
    status: "concept",
    description:
      "Quickly display relational data. Extend with custom components."
  },
  {
    color: "rgb(26, 187, 156)",
    title: "Schema",
    status: "concept",
    description: "Capture your data model in a schema."
  },
  {
    color: "rgb(51, 33, 153)",
    title: "Schema to GraphQL",
    status: "concept",
    description: "Auto-generate a GraphQL API of your schema."
  },
  {
    color: "rgb(251, 80, 59)",
    title: "Webhook Box",
    status: "concept",
    description: "Capture webhooks and redirect them."
  },
  {
    color: "rgb(166, 88, 147)",
    title: "Data Table",
    status: "concept",
    description: "Display, filter and sort your data across devices."
  },
  {
    color: "rgb(20, 46, 103)",
    title: "Fields",
    status: "concept",
    description: "Intuitively display and edit your pieces of data."
  },
  {
    color: "#000",
    title: "Search",
    status: "concept",
    description: "Search for data based on your schema."
  }
];

const library = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const box = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>box</title>
    <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
    <polyline points="2.32 6.16 12 11 21.68 6.16" />
    <line x1="12" y1="22.76" x2="12" y2="11" />
  </svg>
);

const brand = props => (
  <svg
    {...props}
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path
        d="M40.6901947,1.05560821 C43.1419644,-0.351816746 46.1624723,-0.351816746 48.6140831,1.05560821 C57.0765253,5.91390205 76.8328674,17.2562401 85.2953096,22.1145339 C87.7469203,23.5219589 89.2572539,26.1232228 89.2572539,28.9382307 C89.2572539,38.6548183 89.2572539,61.3393365 89.2572539,71.055924 C89.2572539,73.870932 87.7469203,76.472196 85.2953096,77.879621 C76.8328674,82.7380725 57.0765253,94.080253 48.6140831,98.9385465 C46.1624723,100.346129 43.1419644,100.346129 40.6901947,98.9385465 C32.2277526,94.080253 12.4715693,82.7380725 4.00912722,77.879621 C1.55735751,76.472196 0.0471830236,73.870932 0.0471830236,71.055924 C0.0471830236,61.3393365 0.0471830236,38.6548183 0.0471830236,28.9382307 C0.0471830236,26.1232228 1.55735751,23.5219589 4.00912722,22.1145339 C12.4715693,17.2562401 32.2277526,5.91390205 40.6901947,1.05560821 Z"
        id="path-1"
      />
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
        <stop stopColor="#FF385C" offset="0%" />
        <stop stopColor="#E61E4D" offset="22.2735431%" />
        <stop stopColor="#E31C5F" offset="44.8453336%" />
        <stop stopColor="#D70466" offset="68.7077703%" />
        <stop stopColor="#BD1E59" offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-9" transform="translate(5.000000, 0.000000)">
        <g id="Fill-1-Clipped">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <g id="path-1" />
          <path
            d="M40.6901947,1.05560821 C43.1419644,-0.351816746 46.1624723,-0.351816746 48.6140831,1.05560821 C57.0765253,5.91390205 76.8328674,17.2562401 85.2953096,22.1145339 C87.7469203,23.5219589 89.2572539,26.1232228 89.2572539,28.9382307 C89.2572539,38.6548183 89.2572539,61.3393365 89.2572539,71.055924 C89.2572539,73.870932 87.7469203,76.472196 85.2953096,77.879621 C76.8328674,82.7380725 57.0765253,94.080253 48.6140831,98.9385465 C46.1624723,100.346129 43.1419644,100.346129 40.6901947,98.9385465 C32.2277526,94.080253 12.4715693,82.7380725 4.00912722,77.879621 C1.55735751,76.472196 0.0471830236,73.870932 0.0471830236,71.055924 C0.0471830236,61.3393365 0.0471830236,38.6548183 0.0471830236,28.9382307 C0.0471830236,26.1232228 1.55735751,23.5219589 4.00912722,22.1145339 C12.4715693,17.2562401 32.2277526,5.91390205 40.6901947,1.05560821 Z"
            id="Fill-1"
            fill="url(#linearGradient-3)"
            fillRule="nonzero"
            mask="url(#mask-2)"
          />
        </g>
      </g>
      <g
        id="noun_Layers_145272"
        transform="translate(23.000000, 23.000000)"
        fill="#FFFFFF"
        fillRule="nonzero"
      >
        <g id="Group">
          <path
            d="M25.9875,0.7875 L1.35,13.6125 C0.3375,14.175 0.3375,15.75 1.35,16.3125 L25.9875,29.1375 C26.6625,29.475 27.45,29.475 28.125,29.1375 L52.7625,16.3125 C53.775,15.75 53.775,14.175 52.7625,13.6125 L28.0125,0.7875 C27.3375,0.45 26.6625,0.45 25.9875,0.7875 Z"
            id="Path"
            fillOpacity="0.75"
          />
          <path
            d="M52.65,25.5375 L48.0375,23.175 C47.8125,23.0625 47.475,23.0625 47.1375,23.175 L29.475,32.4 C28.6875,32.85 27.7875,32.9625 27,32.9625 C26.1,32.9625 25.3125,32.7375 24.525,32.4 L6.8625,23.175 C6.6375,23.0625 6.3,23.0625 5.9625,23.175 L1.35,25.5375 C0.3375,26.1 0.3375,27.675 1.35,28.2375 L25.9875,41.0625 C26.6625,41.4 27.45,41.4 28.125,41.0625 L52.7625,28.2375 C53.6625,27.675 53.6625,26.1 52.65,25.5375 Z"
            id="Path"
          />
          <path
            d="M52.65,37.6875 L48.0375,35.325 C47.8125,35.2125 47.475,35.2125 47.1375,35.325 L29.475,44.55 C28.6875,45 27.7875,45.1125 27,45.1125 C26.1,45.1125 25.3125,44.8875 24.525,44.55 L6.8625,35.325 C6.6375,35.2125 6.3,35.2125 5.9625,35.325 L1.35,37.6875 C0.3375,38.25 0.3375,39.825 1.35,40.3875 L25.9875,53.2125 C26.6625,53.55 27.45,53.55 28.125,53.2125 L52.7625,40.3875 C53.6625,39.825 53.6625,38.25 52.65,37.6875 Z"
            id="Path"
            fillOpacity="0.75"
          />
        </g>
      </g>
    </g>
  </svg>
);

const NavLinkList = ({ children }) => (
  <ul
    className={css`
      padding: 0;
      list-style: none;
      line-height: 1.5;
      margin-bottom: 8px;
    `}
  >
    {children}
  </ul>
);

const NavLink = ({ children }) => (
  <li
    className={css`
      margin-bottom: 8px;
    `}
  >
    <a
      className={css`
        font-size: 18px;
      `}
    >
      {children}
    </a>
  </li>
);

const Header = ({ children }) => (
  <div
    className={css`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 101;
      background-color: #fff;
      box-shadow: 0 1px 0 0 #e4e4e4;
      display: flex;
      align-items: center;
      height: 75px;
    `}
  >
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col"}>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            {brand({ width: 40 })}
            <div
              className={css`
                font-size: 24px;
                font-weight: 900;
                margin-left: 8px;
              `}
            >
              Sublayer
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = ({ children }) => (
  <footer>
    <div className={"container"}>
      <div className="row">
        <div className="col">
          <div
            className={css`
              padding-top: var(--section-padding);
              padding-bottom: var(--section-padding);
            `}
          >
            <div className={"row"}>
              <div className={"col-12 col-md-1"}>
                <div
                  className={css`
                    display: flex;
                    align-items: center;
                  `}
                >
                  {brand({ width: 35 })}
                </div>
              </div>
              {/* <div className={"col-12 col-md-4"}>
                <h3
                  className={css`
                    font-size: 18px;
                    font-weight: 700;
                    margin: 0 0 16px 0;
                  `}
                >
                  Components
                </h3>
                <NavLinkList>
                  {components.map(component => {
                    return <NavLink>{component.title}</NavLink>;
                  })}
                </NavLinkList>
              </div>
              <div className={"col-12 col-md-4"}>
                <h3
                  className={css`
                    font-size: 18px;
                    font-weight: 700;
                    margin: 0 0 16px 0;
                  `}
                >
                  Learn
                </h3>
                <NavLinkList>
                  {[{ title: "Best practices" }].map(item => {
                    return <NavLink>{item.title}</NavLink>;
                  })}
                </NavLinkList>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Hero = () => (
  <div
    className={css`
      padding-top: var(--section-padding);
      padding-bottom: var(--section-padding);
    `}
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className={css`
              text-align: center;
            `}
          >
            <div
              className={css`
                font-size: 42px;
                line-height: 1.3;
                font-family: geomanistregular, sans-serif;
                font-weight: 900;
                padding: 0;
                margin: 0;
                @media (min-width: 786px) {
                  font-size: 72px;
                  line-height: 1;
                  margin: 0 0 16px 0;
                }
              `}
            >
              Components to{" "}
              <span
                className={css`
                  background-color: #ffa500;
                  padding: 0px 16px;
                  color: #fff;
                  border-radius: 16px;
                `}
              >
                speed
              </span>{" "}
              up
            </div>
            <div
              className={css`
                font-size: 42px;
                line-height: 1.3;
                font-family: geomanistregular, sans-serif;
                font-weight: 900;
                padding: 0;
                margin: 0 0 16px 0;
                @media (min-width: 786px) {
                  line-height: 1;
                  font-size: 72px;
                }
              `}
            >
              application development.
            </div>
            <p
              className={css`
                font-family: geomanistregular, Arial, Helvetica, sans-serif;
                font-size: 16px;
                margin: 16px 0 0 0;
                @media (min-width: 786px) {
                  font-size: 32px;
                }
              `}
            >
              We shape our tools and thereafter our tools shape us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DarkSection = () => (
  <div
    className={css`
      padding-top: var(--section-padding);
      padding-bottom: var(--section-padding);
    `}
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className={css`
              background-color: #000;
              border-radius: 8px;
              padding: var(--section-padding);
              text-align: center;
            `}
          >
            <h2
              className={css`
                color: #fff;
                font-weight: 900;
                font-size: 72px;
                line-height: var(--section-padding);
              `}
            >
              Super fancy catchy title here
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Badge = ({ color, children }) => (
  <span
    className={css`
      background-color: ${children === "concept"
        ? "#f9f9f9"
        : "hsl(131,72%,51%)"};
      color: ${children === "concept" ? "#000" : "#fff"};
      padding: 2px 9px;
      border-radius: 4px;
      font-size: 12px;
    `}
  >
    {children}
  </span>
);

const ComponentItem = ({ title, description, color, status, url }) => (
  <a
    className={css`
      width: 100%;
      height: 100%;
      padding-bottom: 32px;
      text-decoration: none;
      display: block;
      user-select: none;
      color: inherit;
    `}
    target="_blank"
    href={url}
    rel="noopener noreferrer"
  >
    <div
      className={css`
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.01),
          2px 4px 8px 0 rgba(0, 48, 111, 0.04);
        background-color: #fff;
        padding: 16px;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        cursor: pointer;
        border: 2px solid transparent;
        &:hover {
          border: 2px solid #bd1e59;
        }
      `}
    >
      <div
        className={css`
          position: relative;
          margin-bottom: 32px;
        `}
      >
        <div
          className={css`
            /* border-radius: 16px;
            background-color: #fff;
            border: 1px solid #ebebeb;
            padding: 8px;
            display: inline-block; */
          `}
        >
          <div
            className={css`
              border-radius: 50%;
              background-color: ${color};
              width: 60px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
            `}
          >
            {box({ width: 24 })}
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0;
            right: 0;
          `}
        >
          <Badge>{status}</Badge>
        </div>
      </div>
      <div
        className={css`
          margin-left: 8px;
        `}
      >
        <div
          className={css`
            font-weight: 800;
            font-size: 18px;
            margin-bottom: 4px;
          `}
        >
          {title}
        </div>
        <div
          className={css`
            color: #666;
          `}
        >
          {description}
        </div>
      </div>
    </div>
  </a>
);

const ComponentsSection = () => (
  <div
    className={css`
      background-color: #fff5f7;
      padding-top: var(--section-padding);
      padding-bottom: var(--section-padding);
    `}
  >
    <div className="container">
      <div className="row">
        {components.map((component, index) => {
          return (
            <div className="col-md-4" key={index}>
              <ComponentItem {...component} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div
      className={css`
        padding-top: 75px;
      `}
    >
      <Header />
      <Hero />
      <ComponentsSection />
      {/* <DarkSection /> */}
      <Footer />
    </div>
  );
}
