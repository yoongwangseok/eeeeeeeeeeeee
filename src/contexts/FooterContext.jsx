import { createContext } from 'react';
import { useLocation } from 'react-router-dom';

const FooterContext = createContext(false);

export const FooterProvider = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const visiblePathPatterns = [
    '/', // 홈
    '/products', // 상품 목록
    '/profile', // 프로필 관련 모든 페이지 (내 프로필, 다른 사람 프로필, 팔로워/팔로잉 목록 포함)
    '/chat', // 채팅 페이지
  ];

  const isVisibled = visiblePathPatterns.some((pattern) => {
    if (pattern === '/') {
      return path === '/';
    }
    return path.startsWith(pattern);
  });

  return (
    <FooterContext.Provider value={isVisibled}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterContext;
