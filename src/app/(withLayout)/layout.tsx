import ReduxProvider from '@/provider/ReduxProvider';
import Navbar from '@/app/shared/Navbar/Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen min-h-screen'>
      <ReduxProvider>
        <Navbar></Navbar>
        {children}
      </ReduxProvider>
    </div>
  );
};

export default MainLayout;