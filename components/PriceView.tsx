import React from "react";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className: string;
}

const PriceView = ({ price, discount, className }: Props) => {
  return (
    <div>
      <div>
        <span>
          <PriceFormatter amount={price} className={className} />
        </span>
      </div>
    </div>
  );
};

export default PriceView;
