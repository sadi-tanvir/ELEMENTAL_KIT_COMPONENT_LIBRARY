import ReduxProvider from '@/provider/ReduxProvider';
import Navbar from '@/app/shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen min-h-screen'>
      <ReduxProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </ReduxProvider>
    </div>
  );
};

export default MainLayout;