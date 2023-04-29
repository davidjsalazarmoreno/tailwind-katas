import "./styles.module.css";

export default function DropdownUI8() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen font-semibold bg-primary font-inter">
      <div className="dropdown cursor-pointer space-y-2 rounded-[25px] bg-secondary p-1 text-3xl transition-all duration-1000 ease-in-out">
        <div className="dropdown-selected m-1 flex h-fit items-center justify-around rounded-2xl bg-tertiary px-5 py-5 text-white shadow-inner shadow-[#2D3136]">
          Components
          <span className="flex flex-col pl-8 transition-all dropdown-arrows">
            <svg
              width="20"
              height="20"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 6C7.82405 6 8.29443 5.05924 7.8 4.4L5.3 1.06667C4.9 0.533334 4.1 0.533334 3.7 1.06667L1.2 4.4C0.705573 5.05924 1.17595 6 2 6L7 6Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M7 6C7.82405 6 8.29443 5.05924 7.8 4.4L5.3 1.06667C4.9 0.533334 4.1 0.533334 3.7 1.06667L1.2 4.4C0.705573 5.05924 1.17595 6 2 6L7 6Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>

        <ul className="absolute invisible space-y-2 opacity-0 dropdown-list">
          <li className="px-8 py-5 m-1 text-white dropdown-item bg-shade rounded-2xl bg-opacity-10 text-opacity-30 hover:bg-opacity-70 hover:text-hightlight top-2">
            Pages
          </li>
          <li className="px-8 py-5 m-1 text-white dropdown-item bg-shade rounded-2xl bg-opacity-10 text-opacity-30 hover:bg-opacity-70 hover:text-hightlight top-2">
            Template
          </li>
        </ul>
      </div>
    </div>
  );
}
