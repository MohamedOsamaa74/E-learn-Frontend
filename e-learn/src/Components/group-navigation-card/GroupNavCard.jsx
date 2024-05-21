import classes from './GroupNavCard.module.css'
import pro from '../../assets/avatar.jpg'
import { useTranslation } from 'react-i18next'
import { log } from "../../log";
import { Link } from 'react-router-dom';
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
                <Link to=":groupId">{t('Material')}</Link>
                <Link to="assignments">{t('Assignments')}</Link>
                <Link to="">{t('Quizzes')}</Link>
                <Link to="">{t('Participants')}</Link>
            </div>
        </div>
        )
}