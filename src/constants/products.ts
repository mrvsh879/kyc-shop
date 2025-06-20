export interface Product {
  id: number;
  name: string;
  category: 'crypto' | 'social' | 'payment';
  price: number;
  logo: string;
  description?: string;
}

export const PRODUCTS: Product[] = [
  // --- CRYPTO ACCOUNTS ---
  {
    id: 1,
    name: "Binance Verified Account",
    category: "crypto",
    price: 105.21,
    logo: "/logos/binance.svg",
    description: "Fully verified Binance account with KYC and email access."
  },
  {
    id: 2,
    name: "Coinbase Verified Account",
    category: "crypto",
    price: 60.76,
    logo: "/logos/coinbase.svg",
    description: "Fully verified Coinbase account with KYC and email access."
  },
  {
    id: 3,
    name: "Kraken Verified Account",
    category: "crypto",
    price: 138.04,
    logo: "/logos/kraken.svg",
    description: "Fully verified Kraken account with KYC and email access."
  },
  {
    id: 4,
    name: "Bybit Verified Account",
    category: "crypto",
    price: 86.11,
    logo: "/logos/bybit.svg",
    description: "Fully verified Bybit account with KYC and email access."
  },
  {
    id: 5,
    name: "OKX Verified Account",
    category: "crypto",
    price: 64.66,
    logo: "/logos/okx.svg",
    description: "Fully verified OKX account with KYC and email access."
  },
  {
    id: 6,
    name: "Bitfinex Verified Account",
    category: "crypto",
    price: 101.7,
    logo: "/logos/bitfinex.svg",
    description: "Fully verified Bitfinex account with KYC and email access."
  },
  {
    id: 7,
    name: "KuCoin Verified Account",
    category: "crypto",
    price: 61.34,
    logo: "/logos/kucoin.svg",
    description: "Fully verified KuCoin account with KYC and email access."
  },
  {
    id: 8,
    name: "Huobi Verified Account",
    category: "crypto",
    price: 41.87,
    logo: "/logos/huobi.svg",
    description: "Fully verified Huobi account with KYC and email access."
  },
  {
    id: 9,
    name: "Gate.io Verified Account",
    category: "crypto",
    price: 93.38,
    logo: "/logos/gateio.svg",
    description: "Fully verified Gate.io account with KYC and email access."
  },
  {
    id: 10,
    name: "Poloniex Verified Account",
    category: "crypto",
    price: 66.97,
    logo: "/logos/poloniex.svg",
    description: "Fully verified Poloniex account with KYC and email access."
  },

  // --- SOCIAL ACCOUNTS ---
  {
    id: 11,
    name: "Facebook Verified Account",
    category: "social",
    price: 70.28,
    logo: "/logos/facebook.svg",
    description: "Fully verified Facebook account with business access."
  },
  {
    id: 12,
    name: "Instagram Verified Account",
    category: "social",
    price: 45.99,
    logo: "/logos/instagram.svg",
    description: "Verified Instagram account with bio and profile photo."
  },
  {
    id: 13,
    name: "Telegram Verified Account",
    category: "social",
    price: 96.66,
    logo: "/logos/telegram.svg",
    description: "Telegram Premium or verified account with real number."
  },
  {
    id: 14,
    name: "TikTok Verified Account",
    category: "social",
    price: 138.73,
    logo: "/logos/tiktok.svg",
    description: "TikTok creator account with followers and real identity."
  },
  {
    id: 15,
    name: "Twitter Verified Account",
    category: "social",
    price: 95.34,
    logo: "/logos/twitter.svg",
    description: "Twitter (X) account with verification and KYC info."
  },
  {
    id: 16,
    name: "Snapchat Verified Account",
    category: "social",
    price: 142.78,
    logo: "/logos/snapchat.svg",
    description: "Verified Snapchat account with phone/email linked."
  },
  {
    id: 17,
    name: "LinkedIn Verified Account",
    category: "social",
    price: 91.28,
    logo: "/logos/linkedin.svg",
    description: "LinkedIn account with work profile and ID verification."
  },
  {
    id: 18,
    name: "Reddit Verified Account",
    category: "social",
    price: 86.53,
    logo: "/logos/reddit.svg",
    description: "Trusted Reddit user with activity and karma."
  },
  {
    id: 19,
    name: "Discord Verified Account",
    category: "social",
    price: 34.75,
    logo: "/logos/discord.svg",
    description: "Verified Discord account with Nitro and email."
  },
  {
    id: 20,
    name: "Pinterest Verified Account",
    category: "social",
    price: 117.61,
    logo: "/logos/pinterest.svg",
    description: "Verified Pinterest business account with access."
  },

  // --- PAYMENT ACCOUNTS ---
  {
    id: 21,
    name: "PayPal Verified Account",
    category: "payment",
    price: 142.31,
    logo: "/logos/paypal.svg",
    description: "Verified PayPal account with email and withdrawal."
  },
  {
    id: 22,
    name: "Skrill Verified Account",
    category: "payment",
    price: 107.34,
    logo: "/logos/skrill.svg",
    description: "Verified Skrill account with KYC submitted."
  },
  {
    id: 23,
    name: "Neteller Verified Account",
    category: "payment",
    price: 144.92,
    logo: "/logos/neteller.svg",
    description: "Verified Neteller account with email and funds ready."
  },
  {
    id: 24,
    name: "Payeer Verified Account",
    category: "payment",
    price: 95.55,
    logo: "/logos/payeer.svg",
    description: "Verified Payeer account with full KYC submitted."
  },
  {
    id: 25,
    name: "WebMoney Verified Account",
    category: "payment",
    price: 86.69,
    logo: "/logos/webmoney.svg",
    description: "Verified WebMoney account ready for transactions."
  },
  {
    id: 26,
    name: "Wise Verified Account",
    category: "payment",
    price: 90.84,
    logo: "/logos/wise.svg",
    description: "Wise account with full verification and IBAN."
  },
  {
    id: 27,
    name: "Revolut Verified Account",
    category: "payment",
    price: 149.62,
    logo: "/logos/revolut.svg",
    description: "Verified Revolut account with ID and address confirmed."
  },
  {
    id: 28,
    name: "CashApp Verified Account",
    category: "payment",
    price: 54.81,
    logo: "/logos/cashapp.svg",
    description: "Fully verified CashApp with payment history."
  },
  {
    id: 29,
    name: "Zelle Verified Account",
    category: "payment",
    price: 97.53,
    logo: "/logos/zelle.svg",
    description: "Zelle account linked with US bank and ID."
  },
  {
    id: 30,
    name: "Stripe Verified Account",
    category: "payment",
    price: 104.67,
    logo: "/logos/stripe.svg",
    description: "Stripe business account with verification and payouts."
  }
];
