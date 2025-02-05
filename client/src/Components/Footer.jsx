import React from "react";
import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsDribbble,
  BsGithub,
} from "react-icons/bs";
const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid align-center justify-between sm:flex grid-cols-1 sm:gap-5">
          <div className="mt-5">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                Hassan's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 mt-4 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://speech-to-speech-by-hassan.netlify.app/"
                  target="_blank"
                  className="hover:text-slate-800"
                >
                  Speech-To-Speech-Translation
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  className="hover:text-slate-800"
                >
                  Hassan's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-slate-800">
                  Github
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-slate-800">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-slate-800">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-slate-800">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:justify-between sm:items-center">
          <FooterCopyright
            href="#"
            by="Hassan's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-3 sm:mt-0">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
