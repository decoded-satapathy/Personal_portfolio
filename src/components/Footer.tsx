const Footer = () => {
  return (
    <section className="c-space border-t border-black-300 pt-7 pb-3 flex flex-row justify-between items-center">
      <div className="flex justify-center items-center">
        <p className="text-gray-400">Created with ❤️ and a lot of ☕</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://www.github.com/decoded-satapathy"
          target="_blank"
          className="social-icon cursor-pointer"
          rel="noopener noreferrer"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://x.com/OmSatapathy4/"
          target="_blank"
          className="social-icon cursor-pointer"
          rel="noopener noreferrer"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-3/4 h-3/4" />
        </a>

        <a
          href="https://www.linkedin.com/in/om-satapathy-127a62292/"
          target="_blank"
          className="social-icon cursor-pointer"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://leetcode.com/u/decoded-satapathy/"
          target="_blank"
          className="social-icon cursor-pointer"
          rel="noopener noreferrer"
        >
          <img src="/assets/leetcode.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
      </div>
    </section >
  )
}

export default Footer;
