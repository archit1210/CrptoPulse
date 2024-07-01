import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import { SpinnerCircular } from "spinners-react";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-zhWkRvuZwVY1xWKLQSTVsUU8",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [coinId, currency]);

  if (coinData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt={coinData.name} />
          <p>
            <b>
              {coinData.name} ({coinData.symbol})
            </b>
          </p>
        </div>
        {/* Add more coin details here if needed */}
      </div>
    );
  } else {
    return (
      <div className="spinner-container">
        <SpinnerCircular
          size={90}
          thickness={120}
          speed={122}
          color="rgba(255, 255, 255, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );
  }
};

export default Coin;
