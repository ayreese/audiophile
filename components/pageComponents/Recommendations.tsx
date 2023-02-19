import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RecommendationStyle } from "../../styles/Recommendations.style";
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
                <img src={item.categoryImage.mobile} alt="" />
              </div>
              <h4>{item.others[0].name}</h4>
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
