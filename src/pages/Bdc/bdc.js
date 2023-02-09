import Topbarfunc from '../../components/Topbar/Topbar';
import Btnbdcfunc from '../../components/btnbdc/Btnbdc';
import Btndmofunc from '../../components/btndmo/Btndmo';
import Contenantbdcfunc from '../../components/Contenantbdc/Contenantbdc';

export default function Bdcpage (){
    return(
        <div className='homepgclass'>
        <Topbarfunc />
        <Btnbdcfunc /> 
        <Btndmofunc />
        <Contenantbdcfunc />
        </div>
        
    )
}