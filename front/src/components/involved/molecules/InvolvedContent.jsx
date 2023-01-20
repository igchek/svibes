import React from "react";
import styles from './InvolvedContent.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from "react";
import InvolvedContentPoster from "../atoms/InvolvedContentPoster";
import InvolvedTiitles from "../atoms/InvolvedTitles";
import InvolvedData from "../atoms/InvolvedData";
import { setFocusedContent } from "../../../store/focus";
import { getInvolvedContentById } from "../../../store/involvedContent";


const InvolvedContent = (props) => {
    const dispatch = useDispatch()
    const focusedContent = useSelector(({focus}) => state.focusedContent)
    const [isFocused, setFocus] = useState ('false')

    useEffect(()=>{
        if(props.id !== focusedContent.id && focusedContent){
            setFocus('false')
        }
    },[focusedContent])


    const click = (event) => {
        if(props.id === focusedContent.id && focusedContent){
            dispatch(setFocusedContent(''))
        }
        else if ((props.id !==focusedContent.id && focusedContent)||(!focusedContent)){
            dispatch(setFocusedContent(getInvolvedContentById(props.id)))
            setFocus('true')
        }
    }
        return(
            <div onClick={click} className={isFocused?styles.wrapperActive:styles.wrapperPassive}>
                <InvolvedContentPoster 
                    img={props.img} 
                    focus={isFocused}
                />
                <InvolvedTiitles 
                    providerTitle={props.providerTitle} 
                    ContentTitle={props.ContentTitle} 
                    focus={isFocused}
                />
                <InvolvedData 
                    modality={props.modality}
                    audience={props.audience}
                    focus={isFocused}
                />
            </div>
        )
    }

    export default InvolvedContent