export function formatPrice(price: number) {
  return price.toFixed(2)
}

const date = new Date()
date.setUTCHours(0, 0, 0, 0)
export const TODAY = JSON.parse(JSON.stringify(date))
