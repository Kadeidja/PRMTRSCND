import './Home.css';
import Topbarfunc from '../../components/Topbar/Topbar';
import Tabspage from '../Tabs/Tabs';

export default function Homepage (){
    return(
        <div className='homepgclass'>
        <Topbarfunc />
        <Tabspage />
        </div>
        
    )
}