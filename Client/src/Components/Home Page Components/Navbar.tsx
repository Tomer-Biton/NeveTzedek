import React from 'react'
import HtmlLink from '../Minor Components/link'
import HtmlLinkWIcon from '../Minor Components/linkWithIcon'
import SearchBar from '../Minor Components/SearchBar'
import subLink from '../Minor Components/subLink'

const Navbar = () => {

  return (
    <>
      <nav className='navbar-container'>
        <HtmlLink href='#' className='nav-links'>
          <div className='logoLink'></div>
        </HtmlLink>
        <div className="navOptions">
          {/* this is the functions of the website like About Us, store Locations e.t.c */}

          <div className="ExtrasAndSearch">
            <ul className="navExtras">
              <HtmlLinkWIcon
                href='/snifim'
                className='nav-links linkWIcon'
                iconImage='LocationIcon linkIconImage'>
                סניפים
              </HtmlLinkWIcon>
              <HtmlLinkWIcon
                href='#'
                className='nav-links linkWIcon'
                iconImage='HeartIcon linkIconImage'>
                דרושים
              </HtmlLinkWIcon>
              <HtmlLinkWIcon
                href='#'
                className='nav-links linkWIcon'
                iconImage='LoginIcon linkIconImage'>
                אודותינו
              </HtmlLinkWIcon>
              <HtmlLinkWIcon
                href='#'
                className='nav-links linkWIcon'
                iconImage='CartIcon linkIconImage'>
                תפריט
              </HtmlLinkWIcon>
            </ul>

            <SearchBar
              searchQuery=''
              setSearchQuery={() => { }}
            />
          </div>

          <hr className='navbarHr' />

          {/* this is the users navigation between the product categories */}
          {/* <ul className='navCategories'>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links' id='redText' />
            </li>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links'>
                יין
              </HtmlLink>
            </li>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links'>
                בירות
              </HtmlLink>
            </li>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links'>
                וודקה
              </HtmlLink>
            </li>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links'>
                וויסקי
              </HtmlLink>
            </li>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links'>
                חריפים
              </HtmlLink>
            </li>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links'>
                משלימים
              </HtmlLink>
            </li>
            <li className='nav-item'>
              <HtmlLink href='#' className='nav-links'>
                חריטות
              </HtmlLink>
            </li>
          </ul> */}

        </div>
      </nav >
    </>
  )
}

export default Navbar