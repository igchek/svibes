import React from "react";
import styles from './Personal.module.scss'
import { useSelector } from "react-redux";
import personal from "../../../store/personal";
import Avatar from "../../involved/atoms/Personal/Avatar";
import NickName from "../atoms/Personal/NickName";
import SettingsGear from "./SettingsGear";


const Personal = () => {
const userNickName = useSelector(({personal}) => state.userName)
const userAvatar = useSelector(({personal}) => state.currentAvatar)
const gear = () => {
    
}
    return (
        <div className={styles.wrapper}>
            <Avatar 
                src = {userAvatar}
            />
            <NickName 
                nickName={userNickName}
            />
            <SettingsGear/>


        </div>
    )
}

export default Personal