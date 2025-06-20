import { useState, useEffect } from 'react';

const PAYMENT_WALLETS = {
  BTC: 'bc1qnltnxqdetv6lax9g8njzye5yt4a6prkqgfk44q',
  ETH: '0x6dF5FC126223326B081fA14710157517898C7234',
  USDT: 'TFsnebhTqCohGq34dWisnotcivikrJCn2G',
  BNB: '0x6dF5FC126223326B081fA14710157517898C7234'
};

export default function Checkout() {
  const [timeRemaining, setTimeRemaining] = useState(15 * 60);
  const [cryptoRates, setCryptoRates] = useState({
    BTC: 0,
    ETH: 0,
    USDT: 0,
    BNB: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Payment Timer</h2>
          <p className="text-red-500 text-2xl">{formatTime(timeRemaining)}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Payment Wallets</h2>
          {Object.entries(PAYMENT_WALLETS).map(([currency, wallet]) => (
            <div key={currency} className="mb-2 p-3 bg-gray-50 rounded">
              <p><strong>{currency} Wallet:</strong> {wallet}</p>
            </div>
          ))}
        </div>

        {timeRemaining === 0 && (
          <div className="bg-red-100 p-4 rounded text-red-700">
            Payment time has expired. Please restart the checkout process.
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            After payment confirmation, the item will be sent to your email.
          </p>
        </div>
      </div>
    </div>
  );
}