import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { suggestions } from "../functions/Suggestion";
import { Product } from "../interface/interfaces";
import data from "../../data.json";

const Recommendations = (prop: Product) => {
  const [recommendations, setRecommendations] = useState<Product[]>();

  useEffect(() => {
    setRecommendations(suggestions(prop, data));
  }, []);

  return (
    <div className="recommendations-container">
      <h3>You may also like</h3>
      <div className="boxes">
        {recommendations?.map((item) => {
          return (
            <div key={item.id} className="productBox">
              <div className="imageBox">
                  <Image src={item.image.mobile} alt="" width={500}  height={500} />
              </div>
              <h3>{item.others[0].name}</h3>
              <Link href={`/product/${item.slug}`}>
                <button>
                  <a>See Product</a>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
