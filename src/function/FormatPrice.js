const formatPrice = (value, locale = 'cs-CZ', currency = 'CZK') => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default formatPrice