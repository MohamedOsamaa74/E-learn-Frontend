import { Outlet } from "react-router-dom";
import GroupNavCard from "../../Components/group-navigation-card/GroupNavCard";
import GroupNavCardRespo from "../../Components/group-nav-card-responsive/GroupNavCardRespo";
import classes from './Course.module.css';
import AddWork from "../../Components/Assignments/AddWork";
import AddAssignment from "../../Components/Assignments/Add-Assignment";
import ShowRespones from '../../Components/Assignments/ShowRespones';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CourseDetails() {
    const location = useLocation();
    const path = location.pathname;
    const { assignmentId } = useParams();
    // console.log(path);
    const role = getRole();
    function getRole() {
        return localStorage.getItem('role');
    }
    return (
        <div className={classes.course_details}>
            <GroupNavCardRespo />
            <Outlet />
            <div className={classes.col}>
                <GroupNavCard />
                {role === 'Staff' && (
                    (path === '/groups/assignments' && <AddAssignment />) ||
                    (path === `/groups/assignments/${assignmentId}` && <ShowRespones />))
                }
                {role === 'Student' && (path === `/groups/assignments/${assignmentId}` && <AddWork />)}
            </div>
        </div>
    );
}
