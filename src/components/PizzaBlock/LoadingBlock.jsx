import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock (props) {
  return (
    <div>
        <ContentLoader 
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="140" cy="131" r="130" /> 
            <rect x="0" y="316" rx="5" ry="5" width="280" height="72" /> 
            <rect x="138" y="363" rx="0" ry="0" width="1" height="0" /> 
            <rect x="0" y="273" rx="5" ry="5" width="280" height="24" /> 
            <rect x="2" y="414" rx="5" ry="5" width="90" height="27" /> 
            <rect x="161" y="284" rx="0" ry="0" width="0" height="1" /> 
            <rect x="126" y="408" rx="5" ry="5" width="150" height="42" /> 
            <rect x="219" y="449" rx="0" ry="0" width="0" height="1" />
        </ContentLoader>
    </div>
  )
}

export default LoadingBlock;