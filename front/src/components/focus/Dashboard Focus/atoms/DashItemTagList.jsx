import React from 'react'
import styles from './DashItemAtoms.module.scss'

const DashItemTagList = (props) => {
    const tagArr = props.tagArray
  
    return (
    <div className={styles.tagArrayWrapper}>
        {
            tagArr.map(tag=>{return(
                <div className={styles.tagItem}>
                    {tag.value}
                </div>
            )})
        }
    </div>
  )
}

export default DashItemTagList