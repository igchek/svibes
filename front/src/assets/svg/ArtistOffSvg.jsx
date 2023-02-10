import styles from './styles.module.scss';
import React from 'react'

const ArtistOffSvg = () => {
  return (
    <div className={styles.svgTemplateWrapper} >
        <svg width="100%" height="100%" viewBox="0 0 75 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M74.2813 32.0924L62.8049 28.3678C53.5135 25.3526 46.1892 18.9077 42.7634 10.7318L38.5304 0.631852C38.3713 0.252172 37.9599 0 37.5 0C37.0401 0 36.6287 0.252172 36.4696 0.631852L32.2366 10.7312C28.8102 18.9077 21.4859 25.3526 12.1951 28.3678L0.718007 32.0924C0.286556 32.2324 0 32.5944 0 32.9991C0 33.4039 0.286556 33.7659 0.718007 33.9059L12.1958 37.6316C21.4865 40.6468 28.8102 47.0917 32.2366 55.2676L36.4696 65.3681C36.6287 65.7478 37.0401 66 37.5 66C37.9599 66 38.3713 65.7478 38.5304 65.3681L42.7634 55.2676C46.1898 47.0917 53.5135 40.6463 62.8042 37.6316L74.282 33.9059C74.7134 33.7659 75 33.4039 75 32.9991C75 32.5944 74.7128 32.2324 74.2813 32.0924Z" fill="#BFBFBF"/>
        </svg>
    </div>
  )
}

export default ArtistOffSvg
