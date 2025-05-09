"use client";

import { useEffect, useRef, useState } from "react";

const navbar = [
  { text: "Competition", id: "#competition" },
  { text: "Team", id: "#team" },
  { text: "Design", id: "#design" },
  { text: "Blog", id: "#blog" },
  { text: "Sponsors", id: "#sponsors" },
  { text: "Contact", id: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function setFalse() {
      setIsOpen(false);
    }

    function click(e: MouseEvent) {
      if (!isOpen) return;

      const rect = ref.current?.getBoundingClientRect();
      if (
        !rect ||
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", setFalse);
    window.addEventListener("scroll", setFalse);
    window.addEventListener("mousedown", click);
    return () => {
      window.removeEventListener("resize", setFalse);
      window.removeEventListener("scroll", setFalse);
      window.removeEventListener("mousedown", click);
    };
  }, [isOpen]);
  return (
    <nav className="fixed z-100 top-0 w-full h-18 bg-white border-b-3 border-red-700 flex flex-row items-center justify-between gap-4 p-4">
      <img src="/ruauto_logo.png" className="h-full" />
      <div className="hidden sm:flex flex-row gap-6">
        {navbar.map((n) => (
          <a
            key={n.id}
            href={n.id}
            className="cursor-pointer hover:text-red-700 text-nowrap"
          >
            {n.text}
          </a>
        ))}
      </div>
      {/* Hamburger on smaller screen */}
      <button
        className="flex flex-col gap-1.5 sm:hidden relative cursor-pointer"
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
      >
        <span className="w-6 h-0.5 bg-black" />
        <span className="w-6 h-0.5 bg-black" />
        <span className="w-6 h-0.5 bg-black" />

        <div
          ref={ref}
          className="absolute flex flex-col gap-2 p-4 w-48 bg-white border border-red-700 rounded-lg right-0 top-[150%]"
          hidden={!isOpen}
        >
          {navbar.map((n) => (
            <a
              key={n.id}
              href={n.id}
              className="cursor-pointer hover:text-red-700 text-nowrap w-full text-start"
            >
              {n.text}
            </a>
          ))}
        </div>
      </button>
    </nav>
  );
}

function Landing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src="/background.png"
        className="absolute -z-1 left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 min-w-[1080px]"
      />

      <div className="my-[180px] flex flex-col items-center font-bold">
        <h3 className="text-red-700 text-2xl">Rutgers' Drone Team</h3>
        <h1 className="text-8xl">RUAuto</h1>
      </div>
    </div>
  );
}

function Competition() {
  return (
    <div
      id="competition"
      className="scroll-m-24 px-6 md:px-12 w-full flex flex-col items-center gap-8 max-w-3xl lg:max-w-7xl"
    >
      {/* Flight readiness embed */}
      <div className="flex flex-col items-center text-center lg:text-left lg:justify-center lg:flex-row-reverse gap-12">
        <div>
          <p>See you at</p>
          <h1 className="text-6xl font-bold">SUAS 2025 🎉</h1>
          <div className="flex flex-col gap-2 mt-5">
            <p>
              RUAuto is competing in the{" "}
              <span className="text-red-700 font-bold">
                Student Unmanned Aerial System (SUAS)
              </span>{" "}
              competition!
            </p>
            <p>
              SUAS is an annual competition where schools from{" "}
              <span className="text-red-700 font-bold">across the world</span>{" "}
              (including Cornell, UPenn, UT-Austin, etc) fly their custom-built
              drones.
            </p>
            <p>We strive to grow and improve every year!</p>
          </div>
        </div>
        <iframe
          className="w-full h-full max-w-xl aspect-video rounded-2xl"
          src="https://www.youtube.com/embed/mxcdBDJY_zc"
          allowFullScreen
        />
      </div>
      {/* What is SUAS */}
      <div className="text-center md:text-left space-y-3">
        <h2 className="text-4xl font-bold">What is SUAS?</h2>
        <p>
          For the{" "}
          <a
            href="https://suas-competition.org/competitions"
            className="text-red-700 underline"
          >
            SUAS competition
          </a>{" "}
          teams are tasked with building an{" "}
          <span className="text-red-700 font-bold">autonomous vehicle</span>{" "}
          from scratch. That's right, it needs to be able to fly and complete
          tasks all on its own 😎. This includes taking off and landing,
          waypoint navigation, object detection and classification, and payload
          delivery.
        </p>

        <p>
          Rutgers has a pretty good record at SUAS, and we're constantly
          learning and improving as we grow!
        </p>
      </div>
    </div>
  );
}

const ratiosFirst = {
  "/pictures/everett.jpg": 1.5,
  "/pictures/drone.jpg": 1.3333,
  "/pictures/quad_flying.jpg": 1.14,
};

const ratiosSecond = {
  "/pictures/hex.jpg": 1.5,
  "/pictures/fpv.jpg": 1.5,
  "/pictures/flightday.jpg": 1.5,
};

// const minWidth = 800;
const minWidth = 0;
const firstWidth = Object.values(ratiosFirst).reduce((a, b) => a + b, 0);
const secondWidth = Object.values(ratiosSecond).reduce((a, b) => a + b, 0);
function Pictures() {
  return (
    <div className="relative w-screen overflow-clip flex flex-col items-center">
      <div className="flex flex-row">
        {Object.entries(ratiosFirst).map(([k, v]) => (
          <img
            key={k}
            src={k}
            className="border-2 border-white"
            style={{
              width: `${(100 * v) / firstWidth}vw`,
              minWidth: `${(minWidth * v) / firstWidth}px`,
            }}
          />
        ))}
      </div>
      <div className="flex flex-row">
        {Object.entries(ratiosSecond).map(([k, v]) => (
          <img
            key={k}
            src={k}
            className="border-2 border-white"
            style={{
              width: `${(100 * v) / secondWidth}vw`,
              minWidth: `${(minWidth * v) / secondWidth}px`,
            }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-700 px-8 py-4 text-2xl text-white font-bold text-nowrap rounded-xl border-4 border-white">
        RUAUTO ♥︎ DRONES
      </div>
    </div>
  );
}

function Aviation() {
  return (
    <div className="max-w-3xl px-6 md:px-12 lg:max-w-7xl flex flex-col items-center text-center lg:text-left lg:justify-center lg:flex-row gap-12">
      <div>
        <h1 className="text-4xl font-bold">We just love aviation ✈️</h1>
        <div className="flex flex-col gap-2 mt-5">
          <p>
            We’ve built all kinds of drones, like quadcopters, hexacopters, and
            even many FPV drones 🤩!
          </p>
          <p>
            The only thing that stays the same is our team’s work ethic and
            relentless <span className="text-red-700 font-bold">passion</span>{" "}
            for designing high-quality hardware and software.
          </p>
          <p>
            At SUAS 2025, we’re flying our beloved quadcopter! She’s fast,
            nimble, and ready to win 🥇 (or at least do her best)!
          </p>
        </div>
      </div>
      <img
        src="/pictures/drone.jpg"
        className="w-96 max-w-full rounded-2xl border-2 border-red-700"
      />
    </div>
  );
}

const people = [
  {
    file: "/people/everett.jpeg",
    name: "Everett Murray",
    role: "Team Captain",
  },
  {
    file: "/people/rishabh.webp",
    name: "Rishabh Narayanan",
    role: "Autopilot Lead",
  },
  {
    file: "/people/hena.webp",
    name: "Hena Patel",
    role: "Hardware Lead",
  },
  {
    file: "/people/nolan.webp",
    name: "Nolan Carr",
    role: "Airdrop Lead",
  },
  {
    file: "/people/alejandro.webp",
    name: "Alejandro Pinto",
    role: "Imaging Lead",
  },
];
function CoreTeam() {
  return (
    <div id="team" className="scroll-m-24 flex flex-col items-center gap-12">
      <h1 className="px-6 md:px-12 font-bold text-4xl">
        Meet our <span className="text-red-700">core team</span>
      </h1>

      <div className="w-full px-6 md:px-12 max-w-7xl flex flex-col lg:flex-row justify-between gap-4">
        {people.map((p) => (
          <div key={p.file} className="flex flex-col gap-2 items-center">
            <img
              src={p.file}
              className="aspect-square object-cover rounded-full size-40 border-2 border-red-700"
            />
            <div className="text-center text-nowrap">
              <p className="font-bold">{p.name}</p>
              <p>{p.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DDItem({
  name,
  resource,
  right,
  children,
}: {
  name: string;
  children: React.ReactNode;
  resource: string;
  right: boolean;
}) {
  return (
    <div
      className={`w-full flex flex-col gap-6 items-center lg:gap-12 ${
        right ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start">
        <h4 className="font-bold text-2xl mb-4">{name}</h4>
        <div className="flex flex-col gap-3">{children}</div>
      </div>
      {resource.endsWith("mp4") ? (
        <video
          controls
          className="w-full max-w-96 rounded-2xl border-2 border-red-700"
        >
          <source src={resource} type="video/mp4" />
        </video>
      ) : (
        <img
          src={resource}
          className="w-full max-w-96 rounded-2xl border-2 border-red-700"
        />
      )}
    </div>
  );
}

function DDTemplate({
  name,
  svgIcon,
  children,
}: {
  name: string;
  svgIcon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-row items-center gap-4 text-red-700">
        <div className="hidden sm:block w-24 h-1 bg-current" />
        {svgIcon}
        <h3 className="text-3xl font-bold">{name}</h3>
        <div className="hidden sm:block w-24 h-1 bg-current" />
      </div>

      {children}
    </div>
  );
}

function DDHardware() {
  return (
    <DDTemplate
      name="Hardware"
      svgIcon={
        <svg
          width="40"
          height="40"
          viewBox="0 0 75 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 35.4999C35 32.7 34.0234 30.3096 32.0703 28.3285C30.1172 26.3475 27.7604 25.357 25 25.357C22.2396 25.357 19.8828 26.3475 17.9297 28.3285C15.9766 30.3096 15 32.7 15 35.4999C15 38.2997 15.9766 40.6901 17.9297 42.6712C19.8828 44.6522 22.2396 45.6427 25 45.6427C27.7604 45.6427 30.1172 44.6522 32.0703 42.6712C34.0234 40.6901 35 38.2997 35 35.4999ZM65 55.7856C65 54.4121 64.5052 53.2234 63.5156 52.2197C62.526 51.216 61.3542 50.7141 60 50.7141C58.6458 50.7141 57.474 51.216 56.4844 52.2197C55.4948 53.2234 55 54.4121 55 55.7856C55 57.1855 55.4883 58.3807 56.4648 59.3712C57.4414 60.3617 58.6198 60.857 60 60.857C61.3802 60.857 62.5586 60.3617 63.5352 59.3712C64.5117 58.3807 65 57.1855 65 55.7856ZM65 15.2141C65 13.8406 64.5052 12.652 63.5156 11.6483C62.526 10.6446 61.3542 10.1427 60 10.1427C58.6458 10.1427 57.474 10.6446 56.4844 11.6483C55.4948 12.652 55 13.8406 55 15.2141C55 16.6141 55.4883 17.8093 56.4648 18.7998C57.4414 19.7903 58.6198 20.2856 60 20.2856C61.3802 20.2856 62.5586 19.7903 63.5352 18.7998C64.5117 17.8093 65 16.6141 65 15.2141ZM50 31.8944V39.2242C50 39.4883 49.9089 39.7459 49.7266 39.9968C49.5443 40.2477 49.3359 40.3864 49.1016 40.4128L43.0469 41.3637C42.7604 42.2882 42.3438 43.2919 41.7969 44.3749C42.6823 45.6427 43.8542 47.1615 45.3125 48.9312C45.4948 49.2218 45.5859 49.4859 45.5859 49.7236C45.5859 50.0406 45.4948 50.2915 45.3125 50.4764C44.7135 51.2688 43.6393 52.4508 42.0898 54.0225C40.5404 55.5941 39.5182 56.3799 39.0234 56.3799C38.737 56.3799 38.4635 56.2874 38.2031 56.1025L33.7109 52.5367C32.7474 53.0385 31.7448 53.448 30.7031 53.7649C30.4167 56.6176 30.1172 58.6647 29.8047 59.9061C29.6224 60.54 29.2318 60.857 28.6328 60.857H21.3672C21.0807 60.857 20.8203 60.7579 20.5859 60.5598C20.3516 60.3617 20.2214 60.1306 20.1953 59.8665L19.2969 53.8045C18.4115 53.5404 17.4349 53.131 16.3672 52.5763L11.7578 56.1025C11.5755 56.2874 11.3151 56.3799 10.9766 56.3799C10.6901 56.3799 10.4167 56.2742 10.1562 56.0629C6.40625 52.5499 4.53125 50.4368 4.53125 49.7236C4.53125 49.4859 4.6224 49.235 4.80469 48.9708C5.0651 48.601 5.59896 47.9011 6.40625 46.871C7.21354 45.8408 7.82552 45.0352 8.24219 44.4541C7.64323 43.2919 7.1875 42.2089 6.875 41.2052L0.9375 40.2543C0.677083 40.2279 0.455729 40.1024 0.273438 39.8779C0.0911458 39.6534 0 39.3959 0 39.1053V31.7755C0 31.5114 0.0911458 31.2539 0.273438 31.0029C0.455729 30.752 0.664062 30.6133 0.898438 30.5869L6.95312 29.636C7.23958 28.7115 7.65625 27.7078 8.20312 26.6249C7.31771 25.357 6.14583 23.8382 4.6875 22.0685C4.50521 21.7779 4.41406 21.5138 4.41406 21.2761C4.41406 20.9591 4.50521 20.695 4.6875 20.4837C5.26042 19.6913 6.32812 18.5159 7.89062 16.9574C9.45312 15.399 10.4818 14.6198 10.9766 14.6198C11.263 14.6198 11.5365 14.7123 11.7969 14.8972L16.2891 18.463C17.1745 17.9876 18.1771 17.565 19.2969 17.1952C19.5833 14.3425 19.8828 12.3086 20.1953 11.0936C20.3776 10.4597 20.7682 10.1427 21.3672 10.1427H28.6328C28.9193 10.1427 29.1797 10.2418 29.4141 10.4399C29.6484 10.638 29.7786 10.8691 29.8047 11.1332L30.7031 17.1952C31.5885 17.4593 32.5651 17.8687 33.6328 18.4234L38.2422 14.8972C38.4505 14.7123 38.7109 14.6198 39.0234 14.6198C39.3099 14.6198 39.5833 14.7255 39.8438 14.9368C43.5938 18.4498 45.4688 20.5629 45.4688 21.2761C45.4688 21.4874 45.3776 21.7383 45.1953 22.0289C44.8828 22.4515 44.3359 23.1647 43.5547 24.1684C42.7734 25.1721 42.1875 25.9645 41.7969 26.5456C42.3958 27.8135 42.8385 28.8964 43.125 29.7945L49.0625 30.7058C49.3229 30.7586 49.5443 30.8973 49.7266 31.1218C49.9089 31.3463 50 31.6038 50 31.8944ZM75 53.0121V58.559C75 58.9816 73.0599 59.391 69.1797 59.7872C68.8672 60.5004 68.4766 61.1872 68.0078 61.8475C69.3359 64.8323 70 66.6548 70 67.3151C70 67.4208 69.9479 67.5132 69.8438 67.5925C66.6667 69.4679 65.0521 70.4055 65 70.4055C64.7917 70.4055 64.1927 69.7848 63.2031 68.5434C62.2135 67.3019 61.5365 66.4039 61.1719 65.8492C60.651 65.902 60.2604 65.9284 60 65.9284C59.7396 65.9284 59.349 65.902 58.8281 65.8492C58.4635 66.4039 57.7865 67.3019 56.7969 68.5434C55.8073 69.7848 55.2083 70.4055 55 70.4055C54.9479 70.4055 53.3333 69.4679 50.1562 67.5925C50.0521 67.5132 50 67.4208 50 67.3151C50 66.6548 50.6641 64.8323 51.9922 61.8475C51.5234 61.1872 51.1328 60.5004 50.8203 59.7872C46.9401 59.391 45 58.9816 45 58.559V53.0121C45 52.5895 46.9401 52.1801 50.8203 51.7839C51.1589 51.0179 51.5495 50.3311 51.9922 49.7236C50.6641 46.7389 50 44.9163 50 44.256C50 44.1503 50.0521 44.0579 50.1562 43.9787C50.2604 43.9258 50.7161 43.6617 51.5234 43.1862C52.3307 42.7108 53.099 42.2618 53.8281 41.8391C54.5573 41.4165 54.9479 41.2052 55 41.2052C55.2083 41.2052 55.8073 41.8193 56.7969 43.0476C57.7865 44.2758 58.4635 45.1673 58.8281 45.722C59.349 45.6691 59.7396 45.6427 60 45.6427C60.2604 45.6427 60.651 45.6691 61.1719 45.722C62.5 43.8466 63.6979 42.3674 64.7656 41.2845L65 41.2052C65.1042 41.2052 66.7188 42.1297 69.8438 43.9787C69.9479 44.0579 70 44.1503 70 44.256C70 44.9163 69.3359 46.7389 68.0078 49.7236C68.4505 50.3311 68.8411 51.0179 69.1797 51.7839C73.0599 52.1801 75 52.5895 75 53.0121ZM75 12.4407V17.9876C75 18.4102 73.0599 18.8196 69.1797 19.2158C68.8672 19.929 68.4766 20.6157 68.0078 21.2761C69.3359 24.2608 70 26.0834 70 26.7437C70 26.8494 69.9479 26.9418 69.8438 27.0211C66.6667 28.8964 65.0521 29.8341 65 29.8341C64.7917 29.8341 64.1927 29.2134 63.2031 27.972C62.2135 26.7305 61.5365 25.8324 61.1719 25.2778C60.651 25.3306 60.2604 25.357 60 25.357C59.7396 25.357 59.349 25.3306 58.8281 25.2778C58.4635 25.8324 57.7865 26.7305 56.7969 27.972C55.8073 29.2134 55.2083 29.8341 55 29.8341C54.9479 29.8341 53.3333 28.8964 50.1562 27.0211C50.0521 26.9418 50 26.8494 50 26.7437C50 26.0834 50.6641 24.2608 51.9922 21.2761C51.5234 20.6157 51.1328 19.929 50.8203 19.2158C46.9401 18.8196 45 18.4102 45 17.9876V12.4407C45 12.0181 46.9401 11.6087 50.8203 11.2125C51.1589 10.4465 51.5495 9.75972 51.9922 9.1522C50.6641 6.16746 50 4.34491 50 3.68457C50 3.57892 50.0521 3.48647 50.1562 3.40723C50.2604 3.3544 50.7161 3.09026 51.5234 2.61482C52.3307 2.13937 53.099 1.69034 53.8281 1.26772C54.5573 0.845099 54.9479 0.633789 55 0.633789C55.2083 0.633789 55.8073 1.24791 56.7969 2.47614C57.7865 3.70438 58.4635 4.59584 58.8281 5.15053C59.349 5.0977 59.7396 5.07129 60 5.07129C60.2604 5.07129 60.651 5.0977 61.1719 5.15053C62.5 3.27516 63.6979 1.79599 64.7656 0.71303L65 0.633789C65.1042 0.633789 66.7188 1.55827 69.8438 3.40723C69.9479 3.48647 70 3.57892 70 3.68457C70 4.34491 69.3359 6.16746 68.0078 9.1522C68.4505 9.75972 68.8411 10.4465 69.1797 11.2125C73.0599 11.6087 75 12.0181 75 12.4407Z"
            fill="currentColor"
          />
        </svg>
      }
    >
      <DDItem
        name="eCalc Optimization"
        resource="/hardware/ecalc.png"
        right={true}
      >
        <p>
          <span className="text-red-700 font-bold">eCalc</span> is a powerful
          industry-standard tool to calculate various metrics about custom
          vehicles. We use eCalc to measure and optimize battery weight, battery
          power, propeller diameter, propeller pitch, motor KV, and ESCs.
        </p>
        <p>
          With eCalc, we first{" "}
          <span className="text-red-700 font-bold">fine-tune</span> our drone’s
          parameters to ensure maximal performance for drone. Then we move on
          the designing and building.
        </p>
      </DDItem>

      <DDItem name="3D Modeling" resource="/hardware/frame.jpg" right={false}>
        <p>
          Once our optimal drone has been configured using eCalc, we then move
          on to designing the frame in 3D CAD software.
        </p>
        <p>
          We use <span className="text-red-700 font-bold">SolidWorks</span> to
          precisely measure and machine drone parts, include motor plates,
          mounting brackets, and component housing. Here's one of the models we
          built for the central plate.
        </p>
      </DDItem>

      <DDItem
        name="Quadcopter"
        resource="/hardware/quad_flying.jpg"
        right={true}
      >
        <p>
          One of our most pivotal decisions was to build a{" "}
          <span className="text-red-700 font-bold">quadcopter</span> for this
          year’s competition. Our team considered various other form factors,
          like a hexacopter and a coaxial quadcopter.
        </p>
        <p>
          However, we settled on the quadcopter because we calculated that a
          lightweight, fast drone would be able to complete the multi-lap course
          more efficiently.
        </p>
      </DDItem>
    </DDTemplate>
  );
}

function DDAirdrop() {
  return (
    <DDTemplate
      name="Airdrop"
      svgIcon={
        <svg
          width="40"
          height="40"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.8783 39.9998C31.9183 35.9598 35.9588 33.9398 40 33.9398C44.0411 33.9398 48.0816 35.9598 52.1216 39.9998C56.8361 35.9598 60.3711 33.9398 62.7266 33.9398C65.0844 33.9398 68.62 35.9598 73.3333 39.9998C73.3333 21.5898 58.41 6.6665 40 6.6665C21.59 6.6665 6.66663 21.5898 6.66663 39.9998C11.3811 35.9598 14.9166 33.9398 17.2733 33.9398C19.63 33.9398 23.165 35.9598 27.8783 39.9998Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M6.66663 40L40 73.3333M40 73.3333L27.8783 40M40 73.3333L52.1216 40M40 73.3333L73.3333 40"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      <DDItem
        name="Iterative Designing"
        resource="/airdrop/airdrop.png"
        right={false}
      >
        <p>
          Just like hardware, our airdrop team begins first and foremost with
          designing our payloads in popular 3D software, like{" "}
          <span className="text-red-700 font-bold">SolidWorks</span>.
        </p>
        <p>
          We’ve gone through{" "}
          <span className="text-red-700 font-bold">many iterations</span> to
          optimize the payload housing, and decided with a ring like structure.
          This ensures even weight distribution while allowing a centralized
          area for routing servos and cables.
        </p>
      </DDItem>

      <DDItem name="Safe Delivery" resource="/airdrop/drop.mp4" right={true}>
        <p>
          To safely drop each payload, we considered various different options,
          namely winches and parachutes. Although winches offer more precision,
          they require the drone to be hovering in place for longer.
        </p>
        <p>
          To optimize on speed, we elected for{" "}
          <span className="text-red-700 font-bold">parachutes</span> to ensure
          our drone could accurately deliver a package and immediately move on
          to the next task.
        </p>
      </DDItem>
    </DDTemplate>
  );
}

function DDImaging() {
  return (
    <DDTemplate
      name="Imaging"
      svgIcon={
        <svg
          width="40"
          height="40"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13H22.75L29.25 6.5H48.75L55.25 13H65C66.7239 13 68.3772 13.6848 69.5962 14.9038C70.8152 16.1228 71.5 17.7761 71.5 19.5V58.5C71.5 60.2239 70.8152 61.8772 69.5962 63.0962C68.3772 64.3152 66.7239 65 65 65H13C11.2761 65 9.62279 64.3152 8.40381 63.0962C7.18482 61.8772 6.5 60.2239 6.5 58.5V19.5C6.5 17.7761 7.18482 16.1228 8.40381 14.9038C9.62279 13.6848 11.2761 13 13 13ZM39 22.75C34.6902 22.75 30.557 24.462 27.5095 27.5095C24.462 30.557 22.75 34.6902 22.75 39C22.75 43.3098 24.462 47.443 27.5095 50.4905C30.557 53.538 34.6902 55.25 39 55.25C43.3098 55.25 47.443 53.538 50.4905 50.4905C53.538 47.443 55.25 43.3098 55.25 39C55.25 34.6902 53.538 30.557 50.4905 27.5095C47.443 24.462 43.3098 22.75 39 22.75ZM39 29.25C41.5859 29.25 44.0658 30.2772 45.8943 32.1057C47.7228 33.9342 48.75 36.4141 48.75 39C48.75 41.5859 47.7228 44.0658 45.8943 45.8943C44.0658 47.7228 41.5859 48.75 39 48.75C36.4141 48.75 33.9342 47.7228 32.1057 45.8943C30.2772 44.0658 29.25 41.5859 29.25 39C29.25 36.4141 30.2772 33.9342 32.1057 32.1057C33.9342 30.2772 36.4141 29.25 39 29.25Z"
            fill="currentColor"
          />
        </svg>
      }
    >
      <DDItem
        name="Computer Vision"
        resource="/imaging/classification.png"
        right={false}
      >
        <p>
          We aggregate numerous{" "}
          <span className="text-red-700 font-bold">high-quality datasets</span>,
          including COCO and VisDrone to train our machine learning models.
        </p>
        <p>
          Once data is collected, we train and validate a{" "}
          <span className="text-red-700 font-bold">YOLO</span> model to identify
          and classify points. “You Only Look Once (YOLO)” models were
          intentionally selected to combine object detection and classification
          for faster data recognition.
        </p>
      </DDItem>

      <DDItem
        name="Map Stitching"
        resource="/imaging/classification.png"
        right={true}
      >
        <p>
          Just like Google Earth, one of our tasks this year is to stitch many
          images to form a single high-quality map. Image stitching involves
          identifying shared features among images to merge them.
        </p>
        <p>
          Our team integrates GPS data with image data to ensure our stitching
          algorithm is high-quality. We use{" "}
          <span className="text-red-700 font-bold">OpenCV</span> and image
          processing to ensure a more consistent image quality.
        </p>
      </DDItem>
    </DDTemplate>
  );
}

function DDAutopilot() {
  return (
    <DDTemplate
      name="Autopilot"
      svgIcon={
        <svg
          width="40"
          height="40"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36 -3.14934e-05C32.1703 -0.17965 28.3453 0.442341 24.7698 1.82613C21.1943 3.20991 17.9471 5.325 15.2361 8.03601C12.5251 10.747 10.41 13.9942 9.0262 17.5697C7.64241 21.1452 7.02042 24.9702 7.20004 28.8C7.20004 37.872 14.4 46.8 18 50.4C21.6 54 36 72 36 72C36 72 50.4 54 54 50.4C57.6 46.8 64.8 37.872 64.8 28.8C64.9797 24.9702 64.3577 21.1452 62.9739 17.5697C61.5901 13.9942 59.475 10.747 56.764 8.03601C54.053 5.325 50.8058 3.20991 47.2303 1.82613C43.6548 0.442341 39.8298 -0.17965 36 -3.14934e-05ZM36 40.5C33.686 40.5 31.4239 39.8138 29.4999 38.5282C27.5758 37.2425 26.0762 35.4153 25.1907 33.2774C24.3051 31.1395 24.0734 28.787 24.5249 26.5174C24.9763 24.2478 26.0906 22.1631 27.7269 20.5268C29.3632 18.8905 31.4479 17.7762 33.7175 17.3248C35.9871 16.8733 38.3395 17.105 40.4774 17.9906C42.6153 18.8761 44.4426 20.3757 45.7282 22.2998C47.0138 24.2239 47.7 26.4859 47.7 28.8C47.7 30.3364 47.3974 31.8579 46.8094 33.2774C46.2215 34.6969 45.3596 35.9867 44.2732 37.0731C43.1867 38.1596 41.8969 39.0214 40.4774 39.6094C39.0579 40.1973 37.5365 40.5 36 40.5Z"
            fill="currentColor"
          />
        </svg>
      }
    >
      <DDItem
        name="Ground Control Station"
        resource="/autopilot/gcs.png"
        right={false}
      >
        <p>
          For monitoring our drone as it flies, we use the popular open source
          software{" "}
          <span className="text-red-700 font-bold">QGroundControl</span>.
        </p>
        <p>
          With QGroundControl, we can plan missions, navigate waypoints, perform
          safety checks, and calibrate our drone for optimal performance.
        </p>
      </DDItem>

      <DDItem
        name="Software Simulation"
        resource="/autopilot/sitl.jpg"
        right={true}
      >
        <p>
          It’s unsafe and expensive to test new code on our physical drone, so
          we use{" "}
          <span className="text-red-700 font-bold">ArduPilot’s SITL</span>{" "}
          (software in the loop) to simulate a safer environment.
        </p>
        <p>
          Basically, we simulate the flight controller (
          <span className="text-red-700 font-bold">Pixhawk</span>) and
          environment to trick our code into believing it’s running on the real
          thing!
        </p>
      </DDItem>
      <DDItem
        name="MAVLink Protocol"
        resource="/autopilot/mavlink.png"
        right={false}
      >
        <p>
          Instead of sending data back to the ground for processing, our code
          runs directly on the drone. We use python and the{" "}
          <span className="text-red-700 font-bold">pymavlink</span> library to
          command our drone from this onboard computer.
        </p>
        <p>
          We intentionally designed our system this way to{" "}
          <span className="text-red-700 font-bold">minimize latency</span> and
          to ensure our drone can fly even under a shaky connection with the
          ground.
        </p>
      </DDItem>
    </DDTemplate>
  );
}

function DesignDocumentation() {
  return (
    <div
      id="design"
      className="scroll-m-24 max-w-3xl lg:max-w-7xl w-full px-6 md:px-12 flex flex-col items-center gap-12"
    >
      <h1 className="font-bold text-4xl">Drone Design</h1>
      <DDHardware />
      <DDAirdrop />
      <DDImaging />
      <DDAutopilot />
    </div>
  );
}

const entries = [
  {
    date: "Sep 2024",
    content:
      "Our technical groundwork began with the software team establishing the development environment. This involved installing pymavlink for low-level communication with the anticipated flight controller, QGroundControl as the primary interface for ground station monitoring and control, and ArduPilot's SITL functionality to enable early-stage simulation and algorithm development without the constraints of physical hardware. Simultaneously, the hardware team initiated a detailed reverse-engineering process. This involved meticulously disassembling both a commercially available drone platform and the team's existing hexacopter, providing crucial insights into component integration and informing the design of the new vehicle's mechanical and electrical systems. Early technical discussions were centered on the MAVLink communication protocol, with the team analyzing its structure and message types to understand how onboard systems would exchange data with the ground station and control algorithms. The imaging subgroup's initial technical efforts focused on exploring fundamental image processing techniques relevant to object detection and establishing the software pipelines necessary for the eventual creation and annotation of a custom image dataset tailored to the competition's specific requirements.",
  },
  {
    date: "Oct 2024",
    content:
      "October saw us focusing on solidifying the core technical specifications of the drone. Utilizing the eCalc tool, a detailed analysis of various motor, propeller, and power system combinations was performed to optimize for key performance metrics such as thrust-to-weight ratio, flight endurance, and overall efficiency. This analysis led to the preliminary selection of a coaxial quadcopter configuration due to its potential advantages in stability and maneuverability. The physical dimensions of the drone frame were initially estimated based on the chosen propeller size and the anticipated volume required for payload integration. The technical feasibility and potential benefits of incorporating gearboxes to optimize propeller speed and torque were also under investigation. On the power management front, we evaluated the technical characteristics of various lithium-ion battery chemistries and configurations based on energy density, discharge rates, and inherent safety considerations. The airdrop mechanism specifically underwent intensive conceptual design, with multiple solutions explored and translated into initial CAD models and engineering sketches, considering factors like payload security during flight and precise release timing. The imaging team's technical focus was on establishing a reliable live video feed from potential onboard cameras, evaluating different camera interfaces and video transmission protocols. They also developed preliminary technical procedures for capturing and storing image data for the training dataset. The software team initiated the technical implementation of basic communication with the simulated flight controller within the SITL environment using the pymavlink library, focusing on sending and receiving essential telemetry data and control commands.",
  },
  {
    date: "Nov 2024",
    content:
      "November marked the transition to tangible technical development with the airdrop subgroup constructing functional prototypes of their release mechanisms, often utilizing rapid prototyping techniques like 3D printing and laser cutting for iterative design and evaluation. These prototypes were then integrated with standard radio control (RC) components and the Pixhawk flight controller on our benchtop setup for initial bench testing and evaluation of payload release reliability and precision. Technical challenges encountered during this phase, such as ensuring secure and vibration-dampened mounting of actuators like servos, prompted immediate design revisions and the exploration of alternative mounting strategies. The hardware team began the detailed technical design of critical structural elements, including lightweight and robust landing gear optimized for stability during takeoff and landing, and a secure, modular mounting interface for the airdrop device capable of withstanding flight loads. Software development efforts focused on implementing the core autonomous flight functionalities: precise takeoff and landing sequences, accurate navigation to predefined GPS waypoints, and the implementation of virtual geofences to constrain the drone's operational airspace. These software modules underwent rigorous testing within the ArduPilot SITL environment to validate their behavior and identify potential failure modes before deployment on physical hardware. The mapping subgroup initiated the technical planning for the competition's survey task, generating a preliminary \"snaking\" flight path optimized for efficient coverage of the designated area. The imaging team concentrated on the technical refinement of their chosen object detection algorithms, training initial models on publicly available datasets and beginning to evaluate their performance metrics such as precision and recall. They also started exploring the integration of the PyTorch deep learning framework for more advanced model development.",
  },
  {
    date: "Dec 2024",
    content:
      "We continued to iterate on the technical designs of various subsystems and conduct thorough evaluations of key hardware components. This involved further detailed analysis of motor and ESC (Electronic Speed Controller) pairings to ensure optimal power delivery and efficiency, as well as detailed studies of different propeller designs to maximize thrust and minimize power consumption. The structural integrity of the evolving airframe design was analyzed using CAD software, potentially incorporating finite element analysis (FEA) to simulate stress under load. The imaging team delved deeper into various object detection architectures, such as YOLO and Faster R-CNN, and experimented with different hyperparameter configurations to improve model accuracy and robustness. The software team expanded their technical exploration by investigating more advanced features of the MAVLink protocol for more complex communication and began investigating potential sensor integration strategies, considering how data from various onboard sensors could be utilized by the flight control algorithms.",
  },
  {
    date: "Jan 2025",
    content:
      "January saw a significant push towards the integration of various drone subsystems and the development of more advanced autonomous functionalities. The final CAD models for the drone's primary airframe components were completed, and manufacturing processes for lightweight carbon fiber parts were initiated. The procurement of all essential electronic components was finalized, and the intricate process of wiring and soldering these components onto the power distribution board (PDB) and flight controller began. Recognizing potential performance advantages, we became engaged with specialized manufacturers to develop custom planetary gearboxes tailored to the chosen motors and propellers. The airdrop mechanism underwent a significant design iteration, with a precision prototype being fabricated to identify and rectify remaining mechanical integration issues. Initial functional prototypes of the landing gear were 3D printed for structural evaluation. The development of the parachute recovery system progressed with the construction and testing of cloth-based parachute prototypes at lower altitudes. The imaging team achieved a refined state with their primary object detection model, completing extensive fine-tuning using both general and custom-annotated datasets. Recognizing limitations in standard image processing for mapping, the team began researching advanced, machine learning-driven image stitching methods, exploring transformer networks and relevant literature. The autopilot team transitioned to integrating and testing new, higher-performance hardware, including the advanced Pixhawk 6X flight controller, high-resolution cameras, and lidar sensors, and began generating complex flight paths optimized for both mapping and airdrop missions. A key area of development focused on the seamless integration of camera triggering and data acquisition into the autonomous mission planning software via the MAVLink Camera V2 Protocol, enabling precisely timed image capture. Furthermore, we began tackling the complex software challenge of dynamically adjusting mission parameters during flight, specifically focusing on modifying waypoint coordinates based on real-time sensor data or ground station commands.",
  },
  {
    date: "Feb 2025",
    content:
      "February involved continued refinement of the drone's subsystems based on initial integration and testing feedback. The airdrop mechanism underwent further optimization, focusing on the reliability and speed of the servo-based actuation system and the secure mounting of the payload to prevent unwanted movement during flight. Detailed design files for all custom-fabricated components were finalized and prepared for manufacturing. The autopilot team made significant progress in integrating the lidar sensor for precise altitude control and obstacle detection, developing the necessary software drivers and incorporating lidar data into the flight control algorithms to improve low-altitude stability and enable basic avoidance maneuvers. The technical challenges of reliably triggering and synchronizing image capture with the drone's GPS coordinates were a key focus, as we experimented with different MAVLink commands and communication protocols to ensure accurate geotagging of images. Advanced flight control algorithms were explored to enhance the drone's stability and responsiveness in varying wind conditions, potentially investigating adaptive control methods. The imaging team continued their research into advanced image stitching techniques, experimenting with different algorithms for image registration and blending, and evaluating their computational efficiency for potential onboard implementation on the drone's processing unit.",
  },
  {
    date: "Mar 2025",
    content:
      "The autopilot team focused on developing and rigorously testing more complex autonomous flight behaviors, including precision landing algorithms that utilized data from the lidar and potentially the camera for accurate touchdown, and dynamic path planning capabilities that allowed the drone to autonomously alter its flight path in response to real-time sensor input or updated mission objectives. A major technical undertaking during this period was the integration of the imaging subsystem with the autopilot system to enable real-time object detection and tracking during flight. This required the development of efficient data sharing and processing pipelines to transfer image data from the camera to the onboard computer running the object detection algorithms and then relay the detection results (e.g., object coordinates, object class) to the autopilot for potential mission adjustments, such as directing the drone to investigate a detected object or trigger the payload release. The team also began exploring the integration of a gimbal system for camera stabilization and independent pointing control, developing the necessary control interfaces between the gimbal and the flight controller and conducting initial performance testing to ensure stable and accurate camera pointing during autonomous flight.",
  },
  {
    date: "Apr 2025",
    content:
      "April marked the culmination of the development process, with a strong emphasis on comprehensive system integration and rigorous flight testing of the fully assembled drone under realistic operational conditions mimicking the competition environment. Meticulous evaluation and optimization of key performance metrics were conducted, including detailed analysis of flight stability (assessing attitude control and vibration levels), navigation accuracy (evaluating GPS precision and waypoint tracking), object detection rates and accuracy (quantifying the model's ability to correctly identify target objects with minimal false positives), payload delivery precision and reliability (measuring the accuracy and consistency of payload releases at designated locations), and overall flight endurance (monitoring battery consumption and achievable flight time). The team systematically addressed any remaining integration challenges through meticulous debugging of hardware and software interfaces, fine-tuning control parameters within the flight controller software (e.g., PID gains, navigation parameters), and making final mechanical adjustments to ensure smooth and reliable operation of all subsystems. Extensive testing protocols were implemented to verify the robustness and reliability of the entire drone system, including simulated mission runs, stress tests of individual components and the integrated platform, and thorough pre-flight checklists. The data gathered from these intensive flight tests directly informed final optimization efforts, leading to adjustments in flight control parameters, object detection model thresholds, image processing pipelines, and payload release timing to maximize overall performance and ensure mission success during the competition.",
  },
];
function Blog() {
  const [activeMonth, setActiveMonth] = useState(entries.length - 1);

  return (
    <div
      id="blog"
      className="scroll-m-24 max-w-3xl lg:max-w-7xl w-full px-6 md:px-12 flex flex-col items-center gap-8"
    >
      <h1 className="font-bold text-4xl">
        Monthly <span className="text-red-700">Blog</span>
      </h1>
      <div className="flex flex-row gap-4 items-center font-bold text-xl">
        <button
          className="cursor-pointer disabled:cursor-default text-red-700 disabled:text-gray-700"
          disabled={activeMonth == 0}
          onClick={() => setActiveMonth(activeMonth - 1)}
        >
          ←
        </button>
        <h2>{entries[activeMonth].date}</h2>
        <button
          className="cursor-pointer disabled:cursor-default text-red-700 disabled:text-gray-700"
          disabled={activeMonth == entries.length - 1}
          onClick={() => setActiveMonth(activeMonth + 1)}
        >
          →
        </button>
      </div>
      <p className="text-left">{entries[activeMonth].content}</p>
    </div>
  );
}

const sponsors = [
  "apd.png",
  "dassault.png",
  "ecalc.png",
  "egc.png",
  "lockheed.png",
  "minestone.png",
  "pcbway.png",
  "raa.png",
  "tmotor.png",
];
function Sponsors() {
  return (
    <div className="flex flex-col w-full items-center gap-8">
      <div
        id="sponsors"
        className="scroll-m-24 bg-red-700 w-full font-bold text-white flex flex-col items-center p-12"
      >
        <h2 className="text-xl">We're grateful for</h2>
        <h1 className="text-4xl">Our Sponsors ♥︎ </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center px-12">
        {sponsors.map((s) => (
          <img key={s} src={`/sponsors/${s}`} className="max-h-16" />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      id="contact"
      className="scroll-m-24 w-full p-16 bg-gray-200 flex flex-col gap-8 items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <img src="/ruauto_logo.png" className="h-16" />
        <img src="/aiaa.png" className="h-16" />
        <img src="/rutgers_soe.png" className="h-16" />
      </div>
      <div className="flex flex-col gap-1 text-center">
        <p className="text-gray-700">98 Brett Road, Piscataway, NJ 08854</p>
        <a
          href="mailto:rutgersaiaa@gmail.com"
          className="text-red-700 underline"
        >
          rutgersaiaa@gmail.com
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="size-full flex flex-col items-center gap-16">
      <Navbar />
      <Landing />
      <Competition />
      <Pictures />
      <Aviation />
      <CoreTeam />
      <img src="/people/group.jpg" className="w-full" />
      <DesignDocumentation />
      <img src="/people/group2.jpg" className="w-full" />
      <Blog />
      <Sponsors />
      <Footer />
    </div>
  );
}
