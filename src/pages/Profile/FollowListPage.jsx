import styles from './FollowListPage.module.css';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserListItem from '../../components/common/UserListItem';

const mockFollowerData = [
  {
    id: 1,
    image: 'https://i.imgur.com/tG4vS3S.jpeg',
    name: '애월읍 위니브 감귤농장',
    accountname: 'weniv_Mandarin',
    initialIsFollowed: true,
  },
  {
    id: 2,
    image: 'https://i.imgur.com/3Z42L3s.jpeg',
    name: '제주코딩베이스캠프',
    accountname: 'jejucodingcamp',
    initialIsFollowed: false,
  },
  {
    id: 3,
    image: 'https://i.imgur.com/iR32Y4R.jpeg',
    name: '멋쟁이사자처럼',
    accountname: 'likelion.official',
    initialIsFollowed: true,
  },
];

// "followers" 또는 "followings" 같은 type을 props로 받기
function FollowListPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerWrapper}>
        <Header title="Followers" /> {/*지금은 follower로 고정*/}
      </div>

      <main className={styles.mainContent}>
        <ul className={styles.userList}>
          {mockFollowerData.map((user) => (
            <UserListItem
              key={user.id}
              image={user.image}
              name={user.name}
              accountname={user.accountname}
              initialIsFollowed={user.initialIsFollowed}
            />
          ))}
        </ul>
      </main>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}

export default FollowListPage;
