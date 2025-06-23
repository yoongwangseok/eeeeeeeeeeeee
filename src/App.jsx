import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { FooterProvider } from './contexts/FooterContext';
import Index from './pages/Index';
import Page404 from './pages/Page404';
import Products from './pages/products/Products';

import FollowListPage from './pages/Profile/FollowListPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  return (
    <BrowserRouter basename="/gamgyul-social-market">
      <FooterProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Page404 />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:accountname" element={<ProfilePage />} />

          <Route
            path="/profile/:accountname/followers"
            element={<FollowListPage />}
          />
          <Route
            path="/profile/:accountname/followings"
            element={<FollowListPage />}
          />

          <Route path="/profile/edit" element={<ProfileEditPage />} />
        </Routes>

        <Footer />
      </FooterProvider>
    </BrowserRouter>
  );
}

export default App;
