
const Header = () => {
  return <div className="absolute top-0 z-0 bg-white h-16 w-full flex justify-center items-center border-b">
    <h1 className="font-semibold">{
      window.location.pathname === "/" ? "DashBoard View" : "Timer View"
    }</h1>
  </div>;
};

export default Header;
