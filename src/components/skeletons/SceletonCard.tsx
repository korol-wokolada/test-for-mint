import React from "react";
import "./skeletonStyle.css";

export function SceletonCard() {
  return (
    <div className="skeleton-wrapper__card">
      <div className="skeleton-card__avatar"></div>

      <div className="skeleton-card__information">
        <div className="skeleton-information">
          <div className="skeleton-information__FIO"></div>
        </div>

        <p className="skeleton-card__depatrment"></p>
      </div>
    </div>
  );
}

export default function SceletonWrapperCard() {
  return (
    <>
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
      <SceletonCard />
    </>
  );
}
