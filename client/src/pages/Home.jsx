import NavigationBar from '../components/NavigationBar';
import '../assets/home/Home.css' 

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <main className="home-content">
        <h1>Welcome to the Home Page!</h1>
        {/* Thêm nội dung khác của trang Home ở đây */}
      </main>
    </div>
  );
};

export default Home;