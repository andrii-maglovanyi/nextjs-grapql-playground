import { useState, createContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import { auth } from "../firebase";

import Auth from "./auth";

import useAuth from "lib/hooks/use-auth";

const Logo = styled.a`
  cursor: pointer;
  position: absolute;
  left: 1rem;
  margin-top: 6px;
  width: 90px;
`;

const Wrapper = styled.header`
  background-color: white;
  box-shadow: var(--primary-shadow);
  display: grid;
  font-size: 0.7rem;
  grid-template-columns: calc(90px + 3rem) auto;
  line-height: 2rem;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: 999;

  .header-item {
    box-sizing: border-box;
    color: var(--primary-black);

    .sign-in {
      cursor: pointer;
    }

    &:last-child {
      padding-right: 1rem;
      position: relative;
      text-align: right;

      a {
        padding: 0 1rem;
      }
    }

    &:hover {
      color: black;
    }
  }
`;

const NavbarDropdownContent = styled.div`
  background-color: white;
  border-radius: 0 0 var(--primary-border-radius) var(--primary-border-radius);
  box-sizing: border-box;
  box-shadow: var(--primary-shadow);
  margin: -4rem 1px 0 1px;
  min-width: 200px;
  padding: 0.5rem 1rem 0.3rem;
  position: absolute;
  right: 0;
  transition: margin var(--primary-animation-duration)
    var(--primary-cubic-bezier-animation);
  width: calc(100% - 2px);
  z-index: 1;

  a:hover {
    text-shadow: var(--primary-shadow);
  }
`;

const NavbarDropdown = styled.div`
  display: inline-block;
  min-width: 202px;
  position: relative;

  a {
    background-color: white;
    box-sizing: border-box;
    display: block;
    padding: 0 1rem;
    position: relative;
    z-index: 2;
  }

  &:hover ${NavbarDropdownContent} {
    cursor: pointer;
    display: block;
    margin-top: -0.3rem;
  }
`;

export const AuthContext = createContext({
  isShowAuth: false,
  hideAuth: () => {
    return;
  }
});

const Header: React.FC = () => {
  const [isShowAuth, setIsShowAuth] = useState(false);

  const [user, signOut] = useAuth();

  return (
    <AuthContext.Provider
      value={{ isShowAuth, hideAuth: (): void => setIsShowAuth(false) }}
    >
      <Wrapper>
        <Auth />
        <div className="header-item">
          <Link href="/" as="/">
            <Logo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90px"
                height="23px"
                viewBox="0 0 11640 2980"
              >
                <path
                  d="M3095 2825c-201-37-332-128-379-265-19-53-21-183-4-231 30-88 49-104 201-174 20-10 37-20 37-24s-17-13-37-20c-91-32-133-89-133-181 0-48 5-66 33-106 35-53 117-103 170-104 40 0 33-12-26-40a448 448 0 0 1-171-163c-36-77-43-238-14-322 55-163 161-245 366-285 71-13 266-13 333 1 32 7 143 11 272 11l217-1v119h-128c-71 0-132 3-135 6-3 4 9 25 28 47s35 48 35 57 6 22 13 28c18 19 17 249-2 288-52 110-93 161-157 196-108 59-204 78-384 78h-139l-35 34c-44 41-48 82-12 117 35 34 124 48 316 49 271 1 412 34 488 114 74 77 104 189 83 314-49 293-310 476-671 471-52-1-127-7-165-14zm305-119c130-31 223-104 260-203 41-110 15-231-60-277-78-48-183-66-387-66-163 0-167 1-200 26-88 67-122 239-70 356 25 55 88 120 135 140 90 38 222 48 322 24zm-34-1087c91-43 134-138 134-295 0-211-71-304-231-304-150 0-217 87-227 293-5 103 6 163 41 227 25 46 35 56 82 79 55 28 141 27 201 0zm1249 546a572 572 0 0 1-462-423c-21-74-24-316-5-387 78-287 306-453 627-455 185 0 344 51 453 146 132 115 192 268 192 489a598 598 0 0 1-500 631c-78 17-222 16-305-1zm257-117c90-28 184-149 216-278 48-193 32-414-40-567-36-75-115-152-176-170a298 298 0 0 0-366 170c-35 76-37 84-52 177-38 241 11 486 119 594 60 59 118 85 195 86 34 0 81-6 104-12zm2883 117a570 570 0 0 1-444-385l-22-74c-5-16-9-91-9-166s4-150 9-166l22-74a574 574 0 0 1 361-361c186-59 406-49 568 23a545 545 0 0 1 307 375c21 75 24 307 5 378-68 251-233 401-500 454-69 14-221 12-297-4zm289-131c69-35 108-74 144-148 37-76 40-84 58-176 24-126 14-328-21-435-18-54-70-146-98-173-54-52-127-82-196-82-88 0-137 18-197 73-53 48-98 126-125 217-21 68-19 398 3 466 60 191 160 282 312 283 54 1 79-4 120-25zm2766 135c-262-53-411-186-477-426-21-77-24-319-4-383a564 564 0 0 1 231-339c92-62 130-77 275-107 147-30 354-7 485 54 76 35 74 29 45 123l-38 124c-14 46-36 52-53 15l-31-63a254 254 0 0 0-243-147c-160 0-283 94-345 265a906 906 0 0 0 0 490 369 369 0 0 0 374 265c112 0 204-35 279-107 46-44 79-48 67-9-3 11-9 47-12 79-5 47-11 61-32 76-25 18-96 52-135 65-99 33-286 45-386 25zM167 2133c-3-5 23-65 57-134l90-190 72-154a14182 14182 0 0 0 118-257l126-283 39-87 117-265 28-65 75-169 39-95 20-49h204l15 45c13 43 46 132 63 175l40 110 29 78 42 115 29 77 40 110 30 80a5753 5753 0 0 0 49 128l61 157 61 158 19 47 20 50 19 48 56 142c50 129 71 180 86 208 7 12 6 19-4 22-7 3-91 4-186 3l-173-3-13-40-35-115c-37-124-140-433-152-457l-11-23H930c-334 0-316-3-339 60l-22 58-18 45-21 57-20 55c-5 11-18 49-30 85-11 36-25 73-30 82-6 10-10 25-10 33s-4 23-9 33c-5 9-15 37-21 62l-16 58c-4 13-219 18-227 5zm1023-763c0-11-65-212-79-245l-21-55-60-165c-38-97-50-129-50-139 0-6-7-20-15-30-13-18-16-15-44 45l-81 184c0 2-13 34-30 70a1271 1271 0 0 0-51 123l-29 67c-13 35-32 79-41 97-5 10-9 27-9 38 0 20 6 20 255 20 161 0 255-4 255-10zm910 765l-1-957V225h301v1910l-150 3c-82 1-150 0-150-3zm3697-2c-2-5 0-207 5-450 5-248 5-663 0-945l-5-510c2-5 71-8 153-8s150 3 152 8c2 4 1 90-3 192l-15 676c6 15 13 11 51-29 44-46 141-116 180-131 57-22 133-36 193-36 226 2 360 108 398 315 4 22 7 239 8 483l1 442h-300l3-431c5-459 3-473-44-549-28-45-50-64-98-84-120-50-284 20-339 145-43 98-42 88-40 512l2 407h-149c-82 0-151-3-153-7zm3148-953V220l155 2 155 3-5 85c-3 47-5 438-5 870l5 870 5 85-155 3-155 2v-960zm722 803c10-204 10-727 0-910l-8-143h306v1210h-306l8-157zm98-1340c-65-18-105-77-105-157 0-168 206-228 295-86 66 104-2 239-123 246-26 1-56 0-67-3z"
                  fill="#0a0a0a"
                />
              </svg>
            </Logo>
          </Link>
        </div>
        <div className="header-item">
          {user ? (
            <NavbarDropdown>
              <a>{user.email}</a>
              <NavbarDropdownContent>
                <a onClick={signOut}>Sign out</a>
              </NavbarDropdownContent>
            </NavbarDropdown>
          ) : (
            <a className="sign-in" onClick={(): void => setIsShowAuth(true)}>
              Sign in
            </a>
          )}
        </div>
      </Wrapper>
    </AuthContext.Provider>
  );
};

export default Header;
