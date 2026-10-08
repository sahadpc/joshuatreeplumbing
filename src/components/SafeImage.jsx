import React, { useState, useEffect } from 'react';

/**
 * Bulletproof SafeImage component that ensures images are 100% visible immediately.
 */
export const SafeImage = ({
  src,
  fallbackSrc,
  alt = 'Apex Plumbing',
  className = '',
  loading = 'eager',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        onError={handleError}
        className="w-full h-full object-cover object-center block"
        {...props}
      />
    </div>
  );
};

export default SafeImage;
