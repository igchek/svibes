import React from "react";
import styles from "./InvolvedContent.module.scss"
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from "react";
import InvolvedContentPoster from "../atoms/InvolvedContent/InvolvedContentPoster.jsx";
import InvolvedTitles from "../atoms/InvolvedContent/InvolvedTitles.jsx";
import InvolvedData from "../atoms/InvolvedContent/InvolvedData.jsx";
import { setFocusedContent } from "../../../store/focus";


const InvolvedContent = (props) => {
    const dispatch = useDispatch()
     

    const focusedContent = useSelector(({focus}) => focus.focusedContent)
    const involvedContent = useSelector(({involvedContent})=> involvedContent.content)

    const currentInvolved = involvedContent.find(item=>item.id===props.id)

    const [isFocused, setFocus] = useState (false)


    
    useEffect(()=>{
        if (focusedContent.length>0){
            if (focusedContent[0].id===props.id){
                setFocus(true)
            }
            else{
                setFocus(false)
            }
        }
        else {
            setFocus(false)
        }
        
    },[focusedContent])

    useEffect(()=>{
        console.log(`${currentInvolved.title} focus if now ${isFocused}`)
    },
    [isFocused])



    const click = (event) => {
        if (focusedContent.length>0){
            if (focusedContent[0].id===props.id){
                dispatch(setFocusedContent(null))
                console.log(`${currentInvolved.title} is deselected`)
            }
            else{
                dispatch(setFocusedContent(currentInvolved))
                console.log(`${currentInvolved.title} is selected, focus altered`)
            }
            
            }
        else{
            dispatch(setFocusedContent(currentInvolved))
            console.log(`${currentInvolved.title} is selected and focus mounted`)
        }
    }
        return(
            
            <div onClick={()=>click()} className={isFocused?styles.wrapperActive:styles.wrapperPassive}>
                <InvolvedContentPoster 
                    img={props.img} 
                    focus={isFocused}
                />
                <InvolvedTitles 
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