import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SatConverter = () => {
  const [sats, setSats] = useState('');
  const [btc, setBtc] = useState('');
  const [fiat, setFiat] = useState('');
  const [btcFiatRate, setBtcFiatRate] = useState(null);
  const [fiatCurrency, setFiatCurrency] = useState('USD');
  const selectRef = useRef(null);

  const currencyPairs = {
    USD: 'XBTUSD',
    EUR: 'XBTEUR',
    CHF: 'XBTCHF',
  };

  useEffect(() => {
    const fetchBtcFiatRate = async () => {
      const response = await fetch(
        `https://api.kraken.com/0/public/Ticker?pair=${currencyPairs[fiatCurrency]}`
      );
      const data = await response.json();
      const pair = Object.keys(data.result)[0];
      const rate = parseFloat(data.result[pair].c[0]);
      setBtcFiatRate(rate);

      // Recalculate FIAT value based on the new rate
      if (btc) {
        const plainBtcValue = btc.replace(/,/g, '');
        setFiat(formatWithCommas((parseFloat(plainBtcValue) * rate).toFixed(2)));
      }
    };
    fetchBtcFiatRate();
  }, [fiatCurrency]);

  const formatWithCommas = (number) => {
    const parts = number.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  const handleSatsChange = (e) => {
    const satValue = e.target.value.replace(/[^0-9]/g, '');
    setSats(formatWithCommas(satValue));
    if (satValue) {
      const btcValue = (satValue / 100_000_000).toFixed(8);
      setBtc(formatWithCommas(btcValue));
      setFiat(formatWithCommas((btcValue * btcFiatRate).toFixed(2)));
    } else {
      setBtc('');
      setFiat('');
    }
  };

  const handleBtcChange = (e) => {
    const btcValue = e.target.value.replace(/[^0-9.]/g, '');
    const plainBtcValue = btcValue.replace(/,/g, ''); // Remove commas for calculations

    const formattedBtcValue = btcValue.split('.').length > 1 
      ? `${formatWithCommas(btcValue.split('.')[0])}.${btcValue.split('.')[1].slice(0, 8)}` 
      : formatWithCommas(btcValue);
    
    setBtc(formattedBtcValue);
    if (plainBtcValue) {
      const satValue = Math.floor(plainBtcValue * 100_000_000).toString();
      setSats(formatWithCommas(satValue));
      setFiat(formatWithCommas((parseFloat(plainBtcValue) * btcFiatRate).toFixed(2)));
    } else {
      setSats('');
      setFiat('');
    }
  };

  const handleFiatChange = (e) => {
    const fiatValue = e.target.value.replace(/[^0-9.]/g, '');
    setFiat(fiatValue);

    if (fiatValue && btcFiatRate) {
      const btcValue = (parseFloat(fiatValue) / btcFiatRate).toFixed(8);
      setBtc(formatWithCommas(btcValue));
      setSats(formatWithCommas(Math.floor(btcValue * 100_000_000).toString()));
    } else {
      setBtc('');
      setSats('');
    }
  };

  const handleFiatBlur = () => {
    if (fiat) {
      setFiat(formatWithCommas(parseFloat(fiat).toFixed(2)));
    }
  };

  const handleFiatCurrencyChange = (e) => {
    setFiatCurrency(e.target.value);
    // Recalculate FIAT value based on the current BTC value and new exchange rate
    if (btc) {
      const plainBtcValue = btc.replace(/,/g, '');
      setFiat(formatWithCommas((parseFloat(plainBtcValue) * btcFiatRate).toFixed(2)));
    }
  };

  return (
    <div className="form-group">
      <div className="input-container">
        <input
          type="text"
          id="sats"
          placeholder="Enter satoshis amount"
          value={sats}
          onChange={handleSatsChange}
          disabled={!btcFiatRate}
        />
        <div className="input-icon sats">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g> 
              <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM8.69253 8.74209L16.3304 10.8053L16.6668 9.34348L9.02893 7.2803L8.69253 8.74209ZM14.2194 5.69235L13.8127 7.46639L12.3649 7.07388L12.7717 5.29984L14.2194 5.69235ZM11.2272 18.7L11.6352 16.9263L10.1872 16.535L9.77913 18.3087L11.2272 18.7ZM15.6482 13.7661L8.01124 11.6995L8.34708 10.2376L15.984 12.3042L15.6482 13.7661ZM7.33193 14.6559L14.9696 16.7197L15.3059 15.2579L7.66823 13.1941L7.33193 14.6559Z" fill="#000000"></path> 
            </g>
          </svg>
          SATS
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          id="btc"
          placeholder="Enter bitcoin amount"
          value={btc}
          onChange={handleBtcChange}
          disabled={!btcFiatRate}
        />
        <div className="input-icon btc">
          <FontAwesomeIcon icon={brands('bitcoin')} />
          BTC
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          id="fiat"
          placeholder="Enter FIAT amount"
          value={fiat}
          onChange={handleFiatChange}
          onBlur={handleFiatBlur}
          disabled={!btcFiatRate}
        />
        <div className="input-icon usd">
          <FontAwesomeIcon icon={solid('dollar-sign')} />
          {fiatCurrency}
        </div>
      </div>
      <div className="input-container">
        <select 
          id="fiatCurrency" 
          value={fiatCurrency} 
          onChange={handleFiatCurrencyChange}
          ref={selectRef}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CHF">CHF</option>
        </select>
      </div>
    </div>
  );
};

export default SatConverter;