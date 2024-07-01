import React from "react";

const Features = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures it takes full height of viewport
        padding: "20px", // Optional: Adds padding around the content
        textAlign: "center", // Centers text horizontally
      }}
    >
      Our cryptocurrency app delivers a seamless and comprehensive experience
      for exploring digital assets. It provides detailed information on each
      coin, including market rank, prices, and 24-hour high and low values.
      Users can analyze recent trends with an interactive line chart and enjoy
      real-time data updates from the CoinGecko API. The app supports various
      currencies and offers a powerful search feature for quick access to any
      cryptocurrency. With dynamic routing and a user-friendly interface, it
      ensures smooth navigation. Consistent styling and effective error handling
      enhance reliability, making it ideal for both casual observers and
      seasoned investors seeking up-to-date market insights.
    </div>
  );
};

export default Features;
