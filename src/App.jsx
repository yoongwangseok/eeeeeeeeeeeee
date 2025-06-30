import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FooterProvider } from './contexts/FooterContext';

import Index from './pages/Index';
import Products from './pages/products/Products';
import Sample from './pages/Sample';

import ChatListPage from './pages/Chat/ChatListPage';
import MessageRoom from './pages/Chat/MessageRoom';
import FollowListPage from './pages/Profile/FollowListPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProfilePage from './pages/Profile/ProfilePage';

import Footer from './components/Footer';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter basename="/gamgyul-social-market">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sample" element={<Sample />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/profile/:accountname" element={<ProfilePage />} />
        <Route
          path="/profile/:accountname/followers"
          element={<FollowListPage />}
        />
        <Route
          path="/profile/:accountname/followings"
          element={<FollowListPage />}
        />
        <Route path="/chat" element={<ChatListPage />} />
        <Route path="/chat/:chatId" element={<MessageRoom />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
      <FooterProvider>
        <Footer />
      </FooterProvider>
    </BrowserRouter>
  );
}

export default App;
