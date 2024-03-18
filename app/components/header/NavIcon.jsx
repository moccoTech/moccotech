function NavIcon({ onClick }) {
  return (
    <div
      role="button"
      onClick={onClick}
      className="menu-icon flex flex-col w-30 gap-[0.35rem]"
    >
      <div className="w-7 h-[2px] bg-gray-800 rounded-sm"></div>
      <div className="w-7 h-[2px] bg-gray-800 rounded-sm"></div>
      <div className="w-7 h-[2px] bg-gray-800 rounded-sm"></div>
    </div>
  );
}

export default NavIcon;
