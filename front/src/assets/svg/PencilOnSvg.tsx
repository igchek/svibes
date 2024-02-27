

import React from 'react'
import styles from './styles.module.scss';

const PencilOnSvg:React.FC = () => {
  return (
    <div className={styles.svgTemplateWrapper} >
      <svg width="100%" height="100%" viewBox="0 0 800 798" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M497.461 133.808L660.199 296.545L248.264 708.48L85.6179 545.743L497.461 133.808ZM783.685 94.5599L711.11 21.985C683.063 -6.06271 637.519 -6.06271 609.376 21.985L539.857 91.5045L702.595 254.243L783.685 173.152C805.439 151.396 805.439 116.314 783.685 94.5599ZM0.453838 774.483C-2.50779 787.811 9.52627 799.755 22.8566 796.513L204.201 752.544L41.5551 589.808L0.453838 774.483Z" fill="url(#paint0_linear_1650_20723)"/>
      <defs>
      <linearGradient id="paint0_linear_1650_20723" x1="400.001" y1="0.949219" x2="400.001" y2="797.05" gradientUnits="userSpaceOnUse">
      <stop stopColor="#D4C951"/>
      <stop offset="0.331596" stopColor="#C3D15A"/>
      <stop offset="0.659721" stopColor="#6FD1C2"/>
      <stop offset="1" stopColor="#9470B0"/>
      </linearGradient>
      </defs>
      </svg>

    </div>
  )
}

export default PencilOnSvg