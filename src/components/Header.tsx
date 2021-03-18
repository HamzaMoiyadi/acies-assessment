type HeaderComponent = {
  activeTab: number;
};
const Header: React.FC<HeaderComponent> = ({ activeTab }) => {
  return (
    <header id="header">
      <h1>Analysis Tab {activeTab}</h1>
    </header>
  );
};

export default Header;
