import styled from '@emotion/styled';
import tw from 'twin.macro';
import useUser from '../../lib/useUser';
import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import axios from '../../lib/axios';
import Link from 'next/link';

const MenuStyles = styled.div`
  ${tw`flex items-center space-x-4 text-gray-800`}

  ._user_btn {
    ${tw`rounded-full relative`}

    > svg {
      ${tw`w-5 h-5 fill-current text-gray-50 cursor-pointer`}
    }

    .menu_wrapper {
      z-index: 10;
      height: 100vh;
      width: calc(100vw - 0.5rem);
      ${tw`absolute -right-3 -top-6 pt-3 hidden`}

      @media screen and (min-width: 1024px) {
        width: calc(1024px - 0.5rem);
      }

      &.open {
        ${tw`block`}
      }

      > .items {
        width: 15rem;
        margin-left: auto;
        ${tw`whitespace-nowrap bg-white shadow-lg p-3 rounded space-y-5`}

        > .menu_item {
          ${tw`flex items-center text-blue-400 space-x-2 cursor-pointer`}

          &:hover {
            ${tw`text-pink-500`}
          }
          > svg {
            ${tw`w-3 h-3 fill-current block`}
          }

          & .menu_item_link {
            ${tw`w-full`}
          }
        }

        .generic {
          ${tw`border-t pt-5`}
        }
      }
    }
  }

  .user_details {
    ${tw`text-gray-800 flex items-center space-x-2 border-b pb-4`}

    >.avatar {
      ${tw`block h-12 w-12 flex-shrink-0`}

      > svg {
        ${tw`fill-current text-gray-800`}
      }
    }

    > .content {
      overflow: hidden;
      .name {
        ${tw`text-lg whitespace-nowrap`}
      }
      .auth-btn {
        ${tw`text-blue-400`}
      }
    }
  }

  .new-job {
    ${tw`border-t pt-6`}
    >.link {
      ${tw`block w-full bg-blue-400 font-semibold rounded-lg p-4 text-center`}
    }
  }
`;

const Menu = () => {
  const { user, mutateUser } = useUser();
  const [open, setOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const logout = async () => {
    await axios.get('/sanctum/csrf-cookie');
    await axios.post('/logout').then((res) => {
      res.data;
    });
    setTimeout(() => {
      mutateUser(null);
    }, 10);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setOpen(true);

    const targets = [
      document,
      document.querySelector('[data-reach-dialog-overlay]')
    ];

    const closeMenu = () => {
      setOpen(false);
      targets
        .filter((t) => !!t)
        .forEach((t) => t.removeEventListener('click', closeMenu));
    };

    targets
      .filter((t) => !!t)
      .forEach((t) => t.addEventListener('click', closeMenu));
  };

  return (
    <>
      <MenuStyles>
        <div className="_user_btn">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            <svg viewBox="0 0 512 512" onClick={handleMenuClick}>
              <g>
                <path d="m479.18 91.897h-446.36c-18.131 0-32.821-14.69-32.821-32.82s14.69-32.821 32.821-32.821h446.36c18.13 0 32.82 14.69 32.82 32.821s-14.69 32.82-32.82 32.82z" />
                <path d="M295.385,288.821H32.821C14.69,288.821,0,274.13,0,256s14.69-32.821,32.821-32.821h262.564   c18.13,0,32.821,14.69,32.821,32.821S313.515,288.821,295.385,288.821z" />
              </g>
              <path d="m479.18 288.82h-52.513c-18.13 0-32.821-14.69-32.821-32.821s14.69-32.821 32.821-32.821h52.513c18.13 0 32.82 14.69 32.82 32.821s-14.69 32.821-32.82 32.821z" />
              <path d="m479.18 485.74h-446.36c-18.131 0-32.821-14.691-32.821-32.821s14.69-32.821 32.821-32.821h446.36c18.13 0 32.82 14.69 32.82 32.821 0 18.13-14.69 32.821-32.82 32.821z" />
            </svg>
          )}

          <div className={`menu_wrapper ${open ? 'open' : ''}`}>
            <ul className="items">
              <li className="user_details">
                <div className="avatar">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                  </svg>
                </div>
                <div className="content">
                  <p className="name">{user ? `${user.name}` : 'Guest User'}</p>
                  {user ? (
                    <button
                      className="auth-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className="auth-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                        setShowAuthModal(true);
                      }}
                    >
                      Login / Register
                    </button>
                  )}
                </div>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <span>My Applications</span>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <span>Saved Alerts</span>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <span>Settings</span>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <Link href="/post-new-job">
                  <a className="menu_item_link">Post a job</a>
                </Link>
              </li>
              <li className="menu_item generic" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <span>Pricing</span>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <Link href="/about-senza">
                  <a className="menu_item_link">About Senza</a>
                </Link>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <span>Contact Us</span>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <span>Terms of Use</span>
              </li>
              <li className="menu_item" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </svg>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </MenuStyles>
      {showAuthModal && <AuthModal close={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Menu;
