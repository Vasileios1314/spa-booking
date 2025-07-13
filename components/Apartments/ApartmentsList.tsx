"use client";
import { useEffect } from "react";

const AIRBNB_SDK_URL = "https://www.airbnb.com/embeddable/airbnb_jssdk";

const ApartmentsList = () => {
  useEffect(() => {
    // Remove any existing Airbnb SDK script
    const existingScript = document.querySelector(`script[src="${AIRBNB_SDK_URL}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add the script again to force re-initialization
    const script = document.createElement("script");
    script.src = AIRBNB_SDK_URL;
    script.async = true;
    document.body.appendChild(script);

    // After a short delay, force all airbnb iframes to be 100% width
    const timeout = setTimeout(() => {
      document.querySelectorAll('.airbnb-embed-frame iframe').forEach((iframe) => {
        const el = iframe as HTMLIFrameElement;
        el.style.width = '100%';
        el.style.maxWidth = '100vw';
        el.style.boxSizing = 'border-box';
      });
    }, 800);

    // Clean up on unmount
    return () => {
      script.remove();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full m-0 p-0 px-2 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2" style={{ margin: 0, padding: 0 }}>
      <div
        className="airbnb-embed-frame w-full max-w-[250px] mx-auto h-[300px] sm:max-w-[450px]"
        data-id="49529825"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/49529825?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/49529825?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★4.79 · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="925080660358939939"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/925080660358939939?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/925080660358939939?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★4.93 · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="49529757"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/49529757?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/49529757?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★4.89 · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="49671963"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/49671963?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/49671963?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★4.60 · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="49672026"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/49672026?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/49672026?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★4.86 · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="49026142"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/49026142?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/49026142?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="49529445"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/49529445?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/49529445?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★4.78 · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="1186035698985620835"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/1186035698985620835?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/1186035698985620835?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlora · ★New · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="1186014726154543745"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/1186014726154543745?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/1186014726154543745?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★New · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>

      <div
        className="airbnb-embed-frame w-full h-[300px] sm:max-w-[450px] sm:mx-auto"
        data-id="1186015011018433127"
        data-view="home"
        data-hide-price="true"
      >
        <a href="https://www.airbnb.com/rooms/1186015011018433127?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
          View On Airbnb
        </a>
        <a
          href="https://www.airbnb.com/rooms/1186015011018433127?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
          rel="nofollow"
        >
          Rental unit in Vlorë · ★New · 1 bedroom · 2 beds · 1 bath
        </a>
      </div>
    </div>
  );
};

export default ApartmentsList;
