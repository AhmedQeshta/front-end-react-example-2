import { useEffect, useState } from 'react';

export const useNavBar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 850);
  const [isShowMobile, setIsShowMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
      setIsShowMobile(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, setIsMobile, isShowMobile, setIsShowMobile };
};
