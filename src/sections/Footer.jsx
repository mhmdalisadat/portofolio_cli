const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/mhmdalisadat">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://t.me/MR_A_SADAT">
          <div className="social-icon">
            <img src="/assets/telegram.svg" alt="telegram" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.instagram.com/mhmd.ali.sadat/">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram0" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">© 2023 Mohammad Ali Sadat. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
