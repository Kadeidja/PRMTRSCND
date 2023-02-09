import Topbarfunc from '../../components/Topbar/Topbar';
import Btnbdcfunc from '../../components/btnbdc/Btnbdc';
import Btndmofunc from '../../components/btndmo/Btndmo';
import QuestCompo from '../../components/Contenantdmo/Contenantdmo';

export default function Dmopages (){
    return(
        <div className='dmopgclass'>
        <Topbarfunc />
        <Btnbdcfunc /> 
        <Btndmofunc />
        <QuestCompo />
        </div>
        
    )
}