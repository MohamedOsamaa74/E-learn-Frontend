import Week from "../Week/Week"
import WeekHead from "../Week/WeekHead";
import classes from "./Weeks.module.css";
import LecSec from "../Week/LecSec";
import * as FaIcons from "react-icons/fa6";
import { useState } from "react";
import { useTranslation } from 'react-i18next'
import { useParams } from "react-router-dom";
export default function Weeks({ role }) {
    const [addWeek, setAddWeek] = useState([]);
    const [openWeeks, setOpenWeeks] = useState([]);
    // const params = useParams();
    // params.groupId = parseInt(params.groupId);

    const isInstructor = role === 'Staff';

    function handleAdd() {
        setAddWeek((prevAdd) => [...prevAdd, []]);
        setOpenWeeks((prevOpenWeeks) => [...prevOpenWeeks, false]); // Initialize all weeks as closed
    }

    function handleDelete(i) {
        setAddWeek((prevAdd) => prevAdd.filter((_, index) => index !== i));
    }

    function handleOpen(weekIndex) {
        setOpenWeeks((prevOpenWeeks) => {
            const updatedOpenWeeks = [...prevOpenWeeks];
            updatedOpenWeeks[weekIndex] = !updatedOpenWeeks[weekIndex]; // Toggle the visibility state of the clicked week
            return updatedOpenWeeks;
        });
    }
    //* LANG 
    const { t } = useTranslation();
    //* LANG 
    return (
        <div className={classes.weeks}>
            {isInstructor &&
                <div className={classes.add_week} onClick={handleAdd}>
                    <FaIcons.FaPlus className={classes.icon} />
                    <p>{t("add-week")}</p>
                </div>
            }

            {addWeek.map((week, weekNum) => {
                return (
                    <Week key={weekNum}>
                        <WeekHead
                            onSelect={() => handleOpen(weekNum)}
                            weekNum={weekNum + 1}
                            active={openWeeks[weekNum]} // Pass the active state to WeekHead
                        />
                        {openWeeks[weekNum] && (
                            <div className={classes.week_content}>
                                <div className={classes.main}>
                                    <LecSec role={role} onDelete={() => handleDelete(weekNum)} materialType={`${t("Lecture")} ${weekNum + 1}`} weeknum={weekNum} />
                                </div>
                                <div className={classes.main}>
                                    <LecSec role={role} onDelete={() => handleDelete(weekNum)} materialType={`${t("Section")} ${weekNum + 1}`} />
                                </div>
                            </div>
                        )}
                    </Week>
                );
            })}
        </div>
    );
}


// import Week from "../Week/Week"
// import WeekHead from "../Week/WeekHead"
// import classes from './Weeks.module.css'
// import LecSec from "../Week/LecSec";
// import * as FaIcons from "react-icons/fa6";
// import { useState } from "react";

// export default function Weeks(){
//     const [add, setAdd] = useState([]);
//     const [open, setOpen] = useState(false);

//     function handleAdd(){
//         setAdd(prevAdd => [...prevAdd, []]);
//     }

//     function handleOpen(){
//         setOpen(opened => !opened);
//     }

//     return(
//         <div className={classes.weeks}>
//                 <div className={classes.add_week} onClick={handleAdd}>
//                     <FaIcons.FaPlus className={classes.icon}></FaIcons.FaPlus>
//                     <p>add week</p>
//                 </div>
//                 {add.map((week, weekNum) => {
//                 return (
//                     <Week key={weekNum}>
//                         <WeekHead onSelect={handleOpen} weekNum={weekNum+1}></WeekHead>
//                         {week.map((weekContent, i) => {
//                             return (
//                                 open && (
//                                     <div key={i} className={classes.week_content}>
//                                         <div className={classes.main}>
//                                             <LecSec materialType={`${"Lecture"} ${weekNum + 1}`} />
//                                         </div>
//                                         <div className={classes.main}>
//                                             <LecSec materialType={`${"Section"} ${weekNum + 1}`} />
//                                         </div>
//                                     </div>
//                                 )
//                             );
//                         })}
//                     </Week>
//                 );
//             })}
//         </div>
//     );
// }
