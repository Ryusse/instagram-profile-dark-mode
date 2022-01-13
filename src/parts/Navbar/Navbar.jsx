import './Navbar.scss'

import ImageProfile from '../../assets/images/image-profile-navbar.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item icon'>
          <svg width='22' height='23' viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <mask
              id='path-1-outside-1_43_38'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='22'
              height='23'
              fill='black'
            >
              <rect fill='white' width='22' height='23' />
              <path d='M9.855 1.44113C10.1644 1.15784 10.5741 1 11 1C11.4259 1 11.8356 1.15784 12.145 1.44113L20.2183 8.83096C20.7183 9.28768 21 9.92516 21 10.5901V19.5792C21 20.2213 20.7366 20.837 20.2678 21.291C19.7989 21.745 19.163 22 18.5 22H15.1667C14.8382 22 14.513 21.9373 14.2096 21.8156C13.9062 21.6938 13.6305 21.5154 13.3983 21.2904C13.1661 21.0654 12.982 20.7984 12.8565 20.5045C12.731 20.2106 12.6664 19.8956 12.6667 19.5776V15.543C12.6667 15.329 12.5789 15.1237 12.4226 14.9724C12.2663 14.8211 12.0543 14.7361 11.8333 14.7361H10.1667C9.94565 14.7361 9.73369 14.8211 9.57741 14.9724C9.42113 15.1237 9.33333 15.329 9.33333 15.543V19.5776C9.33333 20.2196 9.06994 20.8354 8.6011 21.2894C8.13226 21.7433 7.49637 21.9984 6.83333 21.9984H3.5C2.83696 21.9984 2.20107 21.7433 1.73223 21.2894C1.26339 20.8354 1 20.2196 1 19.5776V10.5884C1 9.92354 1.28333 9.28607 1.78333 8.82935L9.25 2L9.855 1.44113ZM11 2.61279L2.92667 10.0042C2.84471 10.0795 2.7794 10.1701 2.7347 10.2705C2.69001 10.3709 2.66686 10.4791 2.66667 10.5884V19.5776C2.66667 19.7916 2.75446 19.9969 2.91074 20.1482C3.06702 20.2995 3.27899 20.3845 3.5 20.3845H6.83333C7.05435 20.3845 7.26631 20.2995 7.42259 20.1482C7.57887 19.9969 7.66667 19.7916 7.66667 19.5776V15.543C7.66667 14.9009 7.93006 14.2852 8.3989 13.8312C8.86774 13.3772 9.50362 13.1222 10.1667 13.1222H11.8333C12.4964 13.1222 13.1323 13.3772 13.6011 13.8312C14.0699 14.2852 14.3333 14.9009 14.3333 15.543V19.5776C14.3333 19.7916 14.4211 19.9969 14.5774 20.1482C14.7337 20.2995 14.9457 20.3845 15.1667 20.3845H18.5C18.721 20.3845 18.933 20.2995 19.0893 20.1482C19.2455 19.9969 19.3333 19.7916 19.3333 19.5776V10.5884C19.3334 10.4788 19.3103 10.3703 19.2656 10.2696C19.2209 10.1689 19.1555 10.078 19.0733 10.0026L11 2.61279Z' />
            </mask>
            <path
              d='M9.855 1.44113C10.1644 1.15784 10.5741 1 11 1C11.4259 1 11.8356 1.15784 12.145 1.44113L20.2183 8.83096C20.7183 9.28768 21 9.92516 21 10.5901V19.5792C21 20.2213 20.7366 20.837 20.2678 21.291C19.7989 21.745 19.163 22 18.5 22H15.1667C14.8382 22 14.513 21.9373 14.2096 21.8156C13.9062 21.6938 13.6305 21.5154 13.3983 21.2904C13.1661 21.0654 12.982 20.7984 12.8565 20.5045C12.731 20.2106 12.6664 19.8956 12.6667 19.5776V15.543C12.6667 15.329 12.5789 15.1237 12.4226 14.9724C12.2663 14.8211 12.0543 14.7361 11.8333 14.7361H10.1667C9.94565 14.7361 9.73369 14.8211 9.57741 14.9724C9.42113 15.1237 9.33333 15.329 9.33333 15.543V19.5776C9.33333 20.2196 9.06994 20.8354 8.6011 21.2894C8.13226 21.7433 7.49637 21.9984 6.83333 21.9984H3.5C2.83696 21.9984 2.20107 21.7433 1.73223 21.2894C1.26339 20.8354 1 20.2196 1 19.5776V10.5884C1 9.92354 1.28333 9.28607 1.78333 8.82935L9.25 2L9.855 1.44113ZM11 2.61279L2.92667 10.0042C2.84471 10.0795 2.7794 10.1701 2.7347 10.2705C2.69001 10.3709 2.66686 10.4791 2.66667 10.5884V19.5776C2.66667 19.7916 2.75446 19.9969 2.91074 20.1482C3.06702 20.2995 3.27899 20.3845 3.5 20.3845H6.83333C7.05435 20.3845 7.26631 20.2995 7.42259 20.1482C7.57887 19.9969 7.66667 19.7916 7.66667 19.5776V15.543C7.66667 14.9009 7.93006 14.2852 8.3989 13.8312C8.86774 13.3772 9.50362 13.1222 10.1667 13.1222H11.8333C12.4964 13.1222 13.1323 13.3772 13.6011 13.8312C14.0699 14.2852 14.3333 14.9009 14.3333 15.543V19.5776C14.3333 19.7916 14.4211 19.9969 14.5774 20.1482C14.7337 20.2995 14.9457 20.3845 15.1667 20.3845H18.5C18.721 20.3845 18.933 20.2995 19.0893 20.1482C19.2455 19.9969 19.3333 19.7916 19.3333 19.5776V10.5884C19.3334 10.4788 19.3103 10.3703 19.2656 10.2696C19.2209 10.1689 19.1555 10.078 19.0733 10.0026L11 2.61279Z'
              fill='black'
            />
            <path
              d='M9.855 1.44113C10.1644 1.15784 10.5741 1 11 1C11.4259 1 11.8356 1.15784 12.145 1.44113L20.2183 8.83096C20.7183 9.28768 21 9.92516 21 10.5901V19.5792C21 20.2213 20.7366 20.837 20.2678 21.291C19.7989 21.745 19.163 22 18.5 22H15.1667C14.8382 22 14.513 21.9373 14.2096 21.8156C13.9062 21.6938 13.6305 21.5154 13.3983 21.2904C13.1661 21.0654 12.982 20.7984 12.8565 20.5045C12.731 20.2106 12.6664 19.8956 12.6667 19.5776V15.543C12.6667 15.329 12.5789 15.1237 12.4226 14.9724C12.2663 14.8211 12.0543 14.7361 11.8333 14.7361H10.1667C9.94565 14.7361 9.73369 14.8211 9.57741 14.9724C9.42113 15.1237 9.33333 15.329 9.33333 15.543V19.5776C9.33333 20.2196 9.06994 20.8354 8.6011 21.2894C8.13226 21.7433 7.49637 21.9984 6.83333 21.9984H3.5C2.83696 21.9984 2.20107 21.7433 1.73223 21.2894C1.26339 20.8354 1 20.2196 1 19.5776V10.5884C1 9.92354 1.28333 9.28607 1.78333 8.82935L9.25 2L9.855 1.44113ZM11 2.61279L2.92667 10.0042C2.84471 10.0795 2.7794 10.1701 2.7347 10.2705C2.69001 10.3709 2.66686 10.4791 2.66667 10.5884V19.5776C2.66667 19.7916 2.75446 19.9969 2.91074 20.1482C3.06702 20.2995 3.27899 20.3845 3.5 20.3845H6.83333C7.05435 20.3845 7.26631 20.2995 7.42259 20.1482C7.57887 19.9969 7.66667 19.7916 7.66667 19.5776V15.543C7.66667 14.9009 7.93006 14.2852 8.3989 13.8312C8.86774 13.3772 9.50362 13.1222 10.1667 13.1222H11.8333C12.4964 13.1222 13.1323 13.3772 13.6011 13.8312C14.0699 14.2852 14.3333 14.9009 14.3333 15.543V19.5776C14.3333 19.7916 14.4211 19.9969 14.5774 20.1482C14.7337 20.2995 14.9457 20.3845 15.1667 20.3845H18.5C18.721 20.3845 18.933 20.2995 19.0893 20.1482C19.2455 19.9969 19.3333 19.7916 19.3333 19.5776V10.5884C19.3334 10.4788 19.3103 10.3703 19.2656 10.2696C19.2209 10.1689 19.1555 10.078 19.0733 10.0026L11 2.61279Z'
              stroke='black'
              strokeWidth='0.3'
              mask='url(#path-1-outside-1_43_38)'
            />
          </svg>
        </li>
        <li className='navbar__item icon'>
          <svg width='22' height='24' viewBox='0 0 22 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.94059 0.723389C4.78341 0.723389 0.687744 5.10551 0.687744 10.4035C0.687744 15.7016 4.78341 20.0837 9.94059 20.0837C11.9081 20.0837 13.7211 19.4459 15.2111 18.3627L19.3027 22.6661L19.9917 23.3908L21.4412 22.0128L20.7521 21.288L16.6945 17.0203C18.2483 15.2822 19.1934 12.9486 19.1934 10.4035C19.1934 5.10551 15.0978 0.723389 9.94059 0.723389ZM2.68774 10.4035C2.68774 6.11374 5.98192 2.72339 9.94059 2.72339C13.8993 2.72339 17.1934 6.11374 17.1934 10.4035C17.1934 14.6933 13.8993 18.0837 9.94059 18.0837C5.98192 18.0837 2.68774 14.6933 2.68774 10.4035Z'
              fill='#252525'
            />
          </svg>
        </li>
        <li className='navbar__item icon'>
          <svg
            className='navbar__reels'
            width='21'
            height='22'
            viewBox='0 0 21 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M19.0794 10.5V11.5C19.0794 13.2916 19.0781 14.5271 19.0044 15.4882C18.9324 16.4289 18.7994 16.9475 18.6192 17.329C18.1441 18.3346 17.3346 19.1441 16.329 19.6192C15.9475 19.7994 15.4289 19.9324 14.4882 20.0044C13.5271 20.0781 12.2916 20.0794 10.5 20.0794C8.70842 20.0794 7.47289 20.0781 6.51183 20.0044C5.57111 19.9324 5.05255 19.7994 4.67104 19.6192C3.66542 19.1441 2.85593 18.3346 2.38081 17.329C2.20056 16.9475 2.06761 16.4289 1.99556 15.4882C1.92195 14.5271 1.92064 13.2916 1.92064 11.5V10.5C1.92064 9.20329 1.92132 8.19788 1.94961 7.37699H19.0504C19.0787 8.19788 19.0794 9.20329 19.0794 10.5ZM18.8682 5.45635C18.8005 5.12426 18.7168 4.87757 18.6192 4.67104C18.1441 3.66542 17.3346 2.85593 16.329 2.38081C15.9475 2.20056 15.4289 2.06761 14.4882 1.99556C14.2957 1.98082 14.0923 1.96898 13.8756 1.95947L15.6963 5.45635H18.8682ZM13.5309 5.45635L11.6906 1.92182C11.3228 1.92071 10.9272 1.92064 10.5 1.92064C9.38833 1.92064 8.49075 1.92114 7.73999 1.93911L9.57128 5.45635H13.5309ZM7.40591 5.45635H2.13181C2.19951 5.12426 2.28323 4.87757 2.38081 4.67104C2.85593 3.66542 3.66542 2.85593 4.67104 2.38081C4.91691 2.26464 5.2197 2.16812 5.65573 2.09489L7.40591 5.45635ZM0 10.5C0 6.97609 0 5.21413 0.644239 3.85057C1.30941 2.4427 2.4427 1.30941 3.85057 0.644239C5.21413 0 6.97609 0 10.5 0C14.0239 0 15.7859 0 17.1494 0.644239C18.5573 1.30941 19.6906 2.4427 20.3558 3.85057C21 5.21413 21 6.97609 21 10.5V11.5C21 15.0239 21 16.7859 20.3558 18.1494C19.6906 19.5573 18.5573 20.6906 17.1494 21.3558C15.7859 22 14.0239 22 10.5 22C6.97609 22 5.21413 22 3.85057 21.3558C2.4427 20.6906 1.30941 19.5573 0.644239 18.1494C0 16.7859 0 15.0239 0 11.5V10.5ZM7.57481 10.2424C7.57481 9.5489 8.28139 9.10656 8.86434 9.43508L13.7171 12.1699C14.3311 12.5159 14.3311 13.4384 13.7171 13.7844L8.86434 16.5192C8.28139 16.8477 7.57481 16.4054 7.57481 15.7119V10.2424Z'
              fill='#252525'
            />
          </svg>
        </li>
        <li className='navbar__item icon'>
          <svg width='20' height='23' viewBox='0 0 20 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.60438 5.39988H12.4273V5.01299C12.4273 3.91333 11.4295 2.87988 10.0158 2.87988C8.60219 2.87988 7.60438 3.91333 7.60438 5.01299V5.39988ZM14.4273 5.39988V5.01299C14.4273 2.65192 12.3704 0.879883 10.0158 0.879883C7.66128 0.879883 5.60438 2.65192 5.60438 5.01299V5.39988H3.7955C2.02356 5.39988 0.562324 6.86831 0.471769 8.73999L0.00560972 18.375C-0.116074 20.8901 1.77921 22.9999 4.16028 22.9999H15.8398C18.2209 22.9999 20.1162 20.8901 19.9945 18.375L19.5284 8.73999C19.4378 6.86832 17.9766 5.39988 16.2046 5.39988H14.4273ZM16.2046 7.39988H3.7955C3.18725 7.39988 2.51323 7.93139 2.46943 8.83664L2.00327 18.4717C1.93125 19.9604 3.03352 20.9999 4.16028 20.9999H15.8398C16.9666 20.9999 18.0689 19.9604 17.9968 18.4717L17.5307 8.83664C17.4869 7.93139 16.8129 7.39988 16.2046 7.39988ZM6.60438 8.79988C7.15667 8.79988 7.60438 9.2476 7.60438 9.79988C7.60438 10.1964 7.82306 10.7196 8.28751 11.1646C8.74043 11.5986 9.3493 11.8799 10 11.8799C10.6522 11.8799 11.2709 11.5973 11.733 11.1602C12.2069 10.7118 12.4273 10.1895 12.4273 9.79988C12.4273 9.2476 12.875 8.79988 13.4273 8.79988C13.9796 8.79988 14.4273 9.2476 14.4273 9.79988C14.4273 10.8683 13.876 11.886 13.1074 12.6131C12.3268 13.3515 11.2319 13.8799 10 13.8799C8.76666 13.8799 7.6777 13.3502 6.90382 12.6087C6.14148 11.8782 5.60438 10.8614 5.60438 9.79988C5.60438 9.2476 6.0521 8.79988 6.60438 8.79988Z'
              fill='#252525'
            />
          </svg>
        </li>
        <li className='navbar__item icon'>
          <img className='navbar__item-image' src={ImageProfile} alt='profile' />
        </li>
      </ul>
    </nav>
  )
}
