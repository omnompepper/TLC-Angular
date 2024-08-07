export class ProductData {
  TICKER: string;
  SELL_LIMIT: number;
  LAST_TRADED_PRICE: number;
  MAX_PRICE_SHIFT: number;
  ASK_PRICE: number;
  BID_PRICE: number;
  BUY_LIMIT: number;

  constructor(
    TICKER: string,
    SELL_LIMIT: number,
    LAST_TRADED_PRICE: number,
    MAX_PRICE_SHIFT: number,
    ASK_PRICE: number,
    BID_PRICE: number,
    BUY_LIMIT: number
  ) {
    this.TICKER = TICKER;
    this.SELL_LIMIT = SELL_LIMIT;
    this.LAST_TRADED_PRICE = LAST_TRADED_PRICE;
    this.MAX_PRICE_SHIFT = MAX_PRICE_SHIFT;
    this.ASK_PRICE = ASK_PRICE;
    this.BID_PRICE = BID_PRICE;
    this.BUY_LIMIT = BUY_LIMIT;
  }
}
