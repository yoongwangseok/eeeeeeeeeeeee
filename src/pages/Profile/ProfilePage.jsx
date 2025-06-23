import { useState } from 'react';
import styles from './Profilepage.module.css';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import ProfileInfo from '../../components/common/ProfileInfo';
import PostList from '../../components/ProfileView/PostList';
import ProfileStore from '../../components/ProfileView/ProfileStore';
import MyProfileAction from './Myview/MyProfileAction';
import YourProfileAction from './Yourview/YourProfileAction';

import Modal from '../../components/common/Modal';

function ProfilePage() {
  // 로그인한 유저 ID와 페이지의 주인 ID를 비교해서 이 값을 결정
  const isMyProfile = true;
  const [isFollowed, setIsFollowed] = useState(false);
  const [followers, setFollowers] = useState(2950);

  // 상품 모달의 열림/닫힘 상태를 관리
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  // 어떤 상품을 선택했는지 기억
  const [selectedProduct, setSelectedProduct] = useState(null);
  // 팔로워 증가 감소
  const handleFollowToggle = () => {
    setIsFollowed((prev) => !prev);
    setFollowers((prev) => prev + (isFollowed ? -1 : 1));
  };

  // 상품 클릭시 실행
  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  // 유저 프로필 정보
  const profileData = {
    image: '/assets/basic-profile-img.png',
    name: '애월읍 위니브 감귤농장',
    accountname: 'weniv_Mandarin',
    intro: '애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장',
    followerCount: followers,
    followingCount: 128,
  };

  // 판매 중인 상품 정보
  const productsData = [
    {
      id: 1,
      name: '애월읍 노지 감귤',
      price: 35000,
      image: 'https://i.imgur.com/tG4vS3S.jpeg',
    },
    {
      id: 2,
      name: '애월읍 한라봉 10kg',
      price: 45000,
      image: 'https://i.imgur.com/tG4vS3S.jpeg',
    },
    {
      id: 3,
      name: '감귤 파치',
      price: 25000,
      image: 'https://i.imgur.com/tG4vS3S.jpeg',
    },
  ];

  // 작성글 정보
  const postsData = [
    { id: 1, imageUrl: 'https://i.imgur.com/3Z42L3s.jpeg' },
    { id: 2, imageUrl: 'https://i.imgur.com/3Z42L3s.jpeg' },
    { id: 3, imageUrl: 'https://i.imgur.com/3Z42L3s.jpeg' },
    { id: 4, imageUrl: 'https://i.imgur.com/3Z42L3s.jpeg' },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerWrapper}>
        <Header title={isMyProfile ? '내 프로필' : ''} />
      </div>

      <div className={styles.content}>
        <ProfileInfo {...profileData} />

        {isMyProfile ? (
          <MyProfileAction />
        ) : (
          <YourProfileAction
            isFollowed={isFollowed}
            onFollowToggle={handleFollowToggle}
          />
        )}

        <ProfileStore
          products={productsData}
          onProductClick={handleOpenProductModal}
        />

        <PostList posts={postsData} />
      </div>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>

      <Modal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
      >
        <div className={styles.actionSheet}>
          <div className={styles.handle}></div>
          <ul className={styles.menuList}>
            <li>
              <button type="button" className={styles.menuButton}>
                삭제
              </button>
            </li>
            <li>
              <button type="button" className={styles.menuButton}>
                수정
              </button>
            </li>
            <li>
              <button type="button" className={styles.menuButton}>
                웹사이트에서 상품 보기
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default ProfilePage;
