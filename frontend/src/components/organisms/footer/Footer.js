import React from "react";
import "./Footer.scss";
import Logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer w-full bg-primary text-white font-bold py-5 flex flex-col">
      <div className="container flex flex-col justify-between items-start lg:flex-row my-5">
        {/* part 1 */}
        <div>
          <div className="mb-1">
            <div className="icon"></div>
            <div className="text">
              <h2 className="text-[17px]">Hotline</h2>
              <p className="text-2xl">0123456789</p>
            </div>
          </div>
          <div className="mb-1">
            <div className="icon"></div>
            <div className="text">
              <h2 className="text-[17px]">Email</h2>
              <p className="text-[17px]">cskh@olc.vn</p>
            </div>
          </div>
          <ul>
            <li className="text-sm">CHÍNH SÁCH MUA HÀNG</li>
            <li className="text-sm">HƯỚNG DẪN MUA HÀNG</li>
          </ul>
        </div>
        {/* part 2 */}
        <div>
          <h2 className="uppercase text-[17px] mb-2">Hà nội (9h - 22h)</h2>
          <ul className="list-disc text-sm pl-6">
            <li>81 Bà Triệu, Hai Bà Trưng</li>
            <li>241 Chùa Bộc, Đống Đa</li>
            <li>60 Trần Đại Nghĩa, Hai Bà Trưng</li>
            <li>157 Xuân Thủy, Cầu Giấy</li>
          </ul>
        </div>
        {/* part 3 */}
        <div>
          <h2 className="uppercase text-[17px] mb-2">
            TP Hồ Chí Minh (9h30 - 22h)
          </h2>
          <ul className="list-disc text-sm pl-6">
            <li>92 Hồ Tùng Mậu, P.Bến Nghé, Q1</li>
            <li>708 Sư Vạn Hạnh, P.12, Q.10 (đối diện chéo Vạn Hạnh Mall)</li>
            <li>87 Bàu Cát, P.14, Q.Tân Bình (khúc giao Nguyễn Hồng Đào)</li>
          </ul>
        </div>
        {/* part 4 */}
        <div className="flex flex-col items-center">
          <div className="logo mb-2">
            <img src={Logo} alt="" className="h-16 header--left" />
          </div>
          <div>
            <p className="text-sm mb-1">Hãy kết nối với chúng mình</p>
            <div className="flex gap-x-2">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[3px] bg-white"></div>
      <div className="mt-5">
        <p className="text-center">
          Copyright&copy;{" "}
          <a href="https://moji.vn/" className="text-hover font-bold">
            moji.vn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
