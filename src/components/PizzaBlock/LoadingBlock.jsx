import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="314" rx="6" ry="6" width="280" height="83" />
      <rect x="0" y="270" rx="0" ry="0" width="280" height="24" />
      <rect x="0" y="427" rx="0" ry="0" width="100" height="30" />
      <rect x="130" y="413" rx="25" ry="25" width="150" height="44" />
      <circle cx="140" cy="130" r="130" />
    </ContentLoader>
  );
}

export default LoadingBlock;
