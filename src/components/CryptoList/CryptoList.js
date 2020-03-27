import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import FetchCoinData from "../../actions/FetchCoinData";
import CryptoItem from "../CryptoItem/CryptoItem";
import Spinner from "react-native-loading-spinner-overlay";
import { ContentContainer } from "./CryptoList.styles";

const CryptoList = ({ crypto, FetchCoinData }) => {
  useEffect(() => {
    FetchCoinData();
  }, []);

  return (
    <ContentContainer>
      {crypto.isFetching ? (
        <Spinner
          visible={crypto.isFetching}
          textStyle={{ color: "#253145" }}
          animation='fade'
        />
      ) : (
        crypto.data.map((coin, index) => (
          <CryptoItem
            key={index}
            coin_name={coin.name}
            symbol={coin.symbol}
            price_usd={coin.quote.USD.price}
            percent_change_24h={coin.quote.USD.percent_change_24h}
          />
        ))
      )}
    </ContentContainer>
  );
};

const mapStateToProps = state => ({
  crypto: state.crypto
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoList);
