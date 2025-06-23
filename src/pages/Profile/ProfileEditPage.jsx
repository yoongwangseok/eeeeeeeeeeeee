import styles from './ProfileEditPage.module.css';

import basicProfileImage from '../../assets/basic-profile-img.png';
import Header from '../../components/Header';

function ProfileEditPage() {
  //나중에 state 로 관리될 데이터
  const currentUsername = '애월읍 위니브 감귤농장';
  const currentAccountId = 'weniv_Mandarin';
  const currentIntro = '애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장';

  return (
    <div className={styles.pageContainer}>
      <Header type="products" title="프로필 수정" />

      <main className={styles.mainContent}>
        <form className={styles.form}>
          <div className={styles.imageSection}>
            <img
              src={basicProfileImage}
              alt="현재 프로필 이미지"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="username">사용자 이름</label>
            <input
              type="text"
              id="username"
              placeholder="2~10자 이내여야 합니다."
              defaultValue={currentUsername}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="accountId">계정 ID</label>
            <input
              type="text"
              id="accountId"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              defaultValue={currentAccountId}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="intro">소개</label>
            <textarea
              id="intro"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              defaultValue={currentIntro}
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default ProfileEditPage;
