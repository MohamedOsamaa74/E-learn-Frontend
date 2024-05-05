import classes from './GroupNavCard.module.css'
import pro from '../../assets/avatar.jpg'
import { useTranslation } from 'react-i18next'
import { log } from "../../log";
export default function GroupNavCard(){
    log('<GroupNavCard /> rendered', 2);
    //* LANG 
    const { t} = useTranslation();
    //* LANG 
    return(
        <div className={classes.group_navigation_card}>
            <p className={classes.group_title}>{t('Computer-Theory')}</p>
            <div className={classes.instructor_profile}>
                <img src={pro} alt=""></img>
                <p>Dr Nagwa</p>
            </div>
            <div className={classes.group_sections}>
                <a href="">{t('Material')}</a>
                <a href="">{t('Assignments')}</a>
                <a href="">{t('Quizzes')}</a>
                <a href="">{t('Participants')}</a>
            </div>
        </div>
        )
}