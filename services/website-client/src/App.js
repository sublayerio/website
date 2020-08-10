import React, { useState, useEffect } from "react";
import { css, keyframes } from "emotion";
// import axios from 'axios'
import data from './data.json'
import "./styles.css";

const pulsate = keyframes`
0% {
  transform: scale(1);
  opacity: 0;
}
50% {
  opacity: 0.5;
}
100% {
  transform: scale(2.5);
  opacity: 0;
}
`

const repo = props => (
  <svg {...props} viewBox="0 0 24 24" version="1.1" fill="currentColor"><path fillRule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"></path><path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path></svg>
)

const link = props => (
  <svg {...props} viewBox="0 0 16 16" version="1.1" fill="currentColor"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
)

const book = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fillRule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z" fill="currentColor" /></svg>
)

const eye = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4c0-2.2 1.8-4 4-4c2.22 0 4 1.8 4 4c0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z" fill="currentColor" /></svg>
)

const pkg = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z" fill="currentColor" /></svg>
)

const icons = {
  pkg,
  repo,
  link,
  eye,
  book
}

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

const LinkButton = ({ type, url, title }) => {

  const icon = icons[type] || icons.link

  return (
    <div
      className={css`
      flex: 1;
      border-left: 2px solid rgb(255,245,247);
      &:first-child {
        border-left: none;
      }
      `}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 44px;
        padding: 0 16px;
        text-decoration: none;
        color: #000;
        background-color: rgba(255, 255, 255, 1);
        &:hover {
          background-color: rgba(255, 255, 255, 0.75);
        }
      `}
      >
        {icon({ height: 12 })}
        <div className={css`margin-left: 8px;`}>
          {title}
        </div>
      </a>
    </div>

  )
}

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

const ComponentItem = ({ title, description, color, status, links }) => (
  <div
    className={css`
      width: 100%;
      height: 100%;
      padding-bottom: 32px;
      text-decoration: none;
      display: block;
      user-select: none;
      color: inherit;
    `}
  >
    <div
      className={css`
        border-radius: 8px;
        width: 100%;
        height: 100%;
        cursor: pointer;
        overflow: hidden;
        background-color: ${links ? 'transparent' : '#fff'};
      `}
    >
      <div
        className={css`
        padding: 16px;
        background-color: #fff;
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
            display: flex;
            align-items: center;
            color: ${status === 'released' ? 'rgb(0, 204, 136)' : status === 'development' ? 'rgb(255, 170, 0)' : 'rgb(255, 85, 153)'};
          `}
          >
            <div
              className={css`
                      flex-shrink: 0;
                        background-color: currentColor;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        position: relative;
                        &:before {
                          width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    border-radius: 100%;
    border: 2px solid currentColor;
    box-sizing: border-box;
    animation: ${pulsate} 1.5s ease-out;
    animation-iteration-count: infinite;
    animation-delay: 1.1s;
                        }
                      `}
            />
            <div
              className={css`font-size: 12px; margin-left: 8px;`}
            >
              {status}
            </div>
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
      {links ? (
        <div
          className={css`
              display: flex;
              justify-content: space-around;
              border-top: 2px solid rgb(255,245,247);
            `}
        >
          {links.map((link, index) => {

            return (
              <LinkButton key={index} {...link} />
            )
          })}
        </div>
      ) : null}
    </div>
  </div>
);

const ComponentsList = ({ title, components }) => (
  <div>
    <h3 className={css`font-weight: 600; font-size: 26px; font-family: geomanistregular, sans-serif;`}>{title}</h3>
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
)



const ComponentsSection = () => {

  const [sections, setSections] = useState(null)

  useEffect(() => {
    (async () => {
      // const response = await axios.request({
      //   method: 'get',
      //   url: 'https://cdn.sublayer.io/sublayer-website.json',
      //   headers: {
      //     Origin: window.location.origin
      //   }
      // });

      const sectionData = data.reduce((result, component) => {

        return component.labels.reduce((result, label) => {
  
          let section = result.find(s => {
            return s.title === label
          })
  
          if (!section) {
            section = {
              title: label,
              components: []
            }
            result.push(section)
          }
  
          section.components.push(component)
  
          return result
  
        }, result)
  
      }, [])
      setSections(sectionData)
    })();
  }, [])

  return (
    <div
      className={css`
    background-color: rgb(255, 245, 247);
      padding-top: var(--section-padding);
      padding-bottom: var(--section-padding);
    `}
    >
      <div className="container">
        <h2 className={css`font-weight: 900; font-size: 47px; font-family: geomanistregular, sans-serif;`}>
          Components
      </h2>
        {sections ? (
          <div>
            {sections.map(section => {

              return (
                <ComponentsList
                  title={section.title}
                  components={section.components}
                />
              )
            })}
          </div>
        ) : (
            <div>
              Loading...
            </div>
          )}
      </div>
    </div >
  );
}

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
