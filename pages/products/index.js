import { useEffect, useRef, useState } from "react";
import Head from "next/head";

export default function Home() {
  const sections = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    let activeIndex = 0;
    let minDistance = Math.abs(
      currentScrollPos - sections.current[0].offsetTop
    );

    sections.current.forEach((section, index) => {
      const distance = Math.abs(currentScrollPos - section.offsetTop);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    setActiveSection(activeIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    sections.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const getDotBackgroundColor = (sectionIndex) => {
    if (typeof window !== "undefined") {
      const sectionRef = sections.current[sectionIndex];
      const computedStyle = window.getComputedStyle(sectionRef);
      const backgroundColor =
        computedStyle.getPropertyValue("background-color");
      const rgbValues = backgroundColor.match(/\d+/g);
      const brightness =
        (Number(rgbValues[0]) * 299 +
          Number(rgbValues[1]) * 587 +
          Number(rgbValues[2]) * 114) /
        1000;
      return brightness < 128 ? "white" : "black";
    }
    return "black"; // Fallback color in case window object is not available
  };

  return (
    <div>
      <Head>
        <title>Scrolling Page</title>
      </Head>

      <div className="dots-container">
        <div
          className={`dot ${activeSection === 0 ? "active" : ""}`}
          style={{ backgroundColor: getDotBackgroundColor(0) }}
          onClick={() => scrollToSection(0)}
        />
        <div
          className={`dot ${activeSection === 1 ? "active" : ""}`}
          style={{ backgroundColor: getDotBackgroundColor(1) }}
          onClick={() => scrollToSection(1)}
        />
        <div
          className={`dot ${activeSection === 2 ? "active" : ""}`}
          style={{ backgroundColor: getDotBackgroundColor(2) }}
          onClick={() => scrollToSection(2)}
        />
        <div
          className={`dot ${activeSection === 3 ? "active" : ""}`}
          style={{ backgroundColor: getDotBackgroundColor(3) }}
          onClick={() => scrollToSection(3)}
        />
        <div
          className={`dot ${activeSection === 4 ? "active" : ""}`}
          style={{ backgroundColor: getDotBackgroundColor(4) }}
          onClick={() => scrollToSection(4)}
        />
      </div>

      <div className="sections-container">
        <section
          ref={(ref) => (sections.current[0] = ref)}
          className={`section ${activeSection === 0 ? "active" : ""}`}
          style={{ backgroundColor: "white" }} // Set the background color of section 1
        >
          <h2>Section 1</h2>
          <p>This is some dummy content for section 1.</p>
        </section>

        <section
          ref={(ref) => (sections.current[1] = ref)}
          className={`section ${activeSection === 1 ? "active" : ""}`}
          style={{
            backgroundImage: 'url("your-image-url")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} // Set the background image of section 2
        >
          <h2>Section 2</h2>
          <p>This is some different content for section 2.</p>
        </section>

        {/* Rest of the sections with their respective styles */}
      </div>

      <style jsx>{`
        .dots-container {
          position: fixed;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .dot.active {
          background-color: white;
        }

        .sections-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

// import { useEffect, useRef, useState } from "react";
// import Head from "next/head";

// export default function Home() {
//   const sections = useRef([]);
//   const [activeSection, setActiveSection] = useState(0);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     let activeIndex = 0;
//     let minDistance = Math.abs(
//       currentScrollPos - sections.current[0].offsetTop
//     );

//     sections.current.forEach((section, index) => {
//       const distance = Math.abs(currentScrollPos - section.offsetTop);
//       if (distance < minDistance) {
//         minDistance = distance;
//         activeIndex = index;
//       }
//     });

//     setActiveSection(activeIndex);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToSection = (index) => {
//     sections.current[index].scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <div className="dots-container">
//         <div
//           className={`dot ${activeSection === 0 ? "active" : ""}`}
//           onClick={() => scrollToSection(0)}
//         />
//         <div
//           className={`dot ${activeSection === 1 ? "active" : ""}`}
//           onClick={() => scrollToSection(1)}
//         />
//         <div
//           className={`dot ${activeSection === 2 ? "active" : ""}`}
//           onClick={() => scrollToSection(2)}
//         />
//         <div
//           className={`dot ${activeSection === 3 ? "active" : ""}`}
//           onClick={() => scrollToSection(3)}
//         />
//         <div
//           className={`dot ${activeSection === 4 ? "active" : ""}`}
//           onClick={() => scrollToSection(4)}
//         />
//       </div>

//       <div className="sections-container">
//         <section
//           ref={(ref) => (sections.current[0] = ref)}
//           className={`section ${activeSection === 0 ? "active" : ""}`}
//         >
//           <h2>Section 1</h2>
//           <p>This is some dummy content for section 1.</p>
//         </section>

//         <section
//           ref={(ref) => (sections.current[1] = ref)}
//           className={`section ${activeSection === 1 ? "active" : ""}`}
//         >
//           <h2>Section 2</h2>
//           <p>This is some different content for section 2.</p>
//         </section>

//         <section
//           ref={(ref) => (sections.current[2] = ref)}
//           className={`section ${activeSection === 2 ? "active" : ""}`}
//         >
//           <h2>Section 3</h2>
//           <p>Some unique content for section 3.</p>
//         </section>

//         <section
//           ref={(ref) => (sections.current[3] = ref)}
//           className={`section ${activeSection === 3 ? "active" : ""}`}
//         >
//           <h2>Section 4</h2>
//           <p>Content specific to section 4.</p>
//         </section>

//         <section
//           ref={(ref) => (sections.current[4] = ref)}
//           className={`section ${activeSection === 4 ? "active" : ""}`}
//         >
//           <h2>Section 5</h2>
//           <p>Different content for section 5.</p>
//         </section>
//       </div>

//       <style jsx>{`
//         .dots-container {
//           position: fixed;
//           top: 50%;
//           right: 20px;
//           transform: translateY(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .dot {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           margin-bottom: 10px;
//           background-color: black;
//           cursor: pointer;
//         }

//         .dot.active {
//           background-color: white;
//         }

//         .sections-container {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         .section {
//           height: 100vh;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }
//       `}</style>
//     </div>
//   );
// }
