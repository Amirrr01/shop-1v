import React from "react";
const CORRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const formatCurrency = (number: number) => {
  return CORRENCY_FORMATTER.format(number);
};

export default formatCurrency;
