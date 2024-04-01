import { Outlet } from 'react-router-dom';
import { useLoginUserStore } from '@stores/useLoginUserStore.ts';

const Layout = () => {
  const { loginUser } = useLoginUserStore();
  return (
    <>
      <div style={{ padding: 10 }}>
        User - {loginUser?.username || 'not logged in.'}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
