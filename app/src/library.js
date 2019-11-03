export function formatPrice(price) {
  return price.toFixed(2);
}

export let TODAY = new Date();
TODAY.setUTCHours(0,0,0,0);
TODAY = JSON.parse(JSON.stringify(TODAY));