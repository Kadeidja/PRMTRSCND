import './Tabs.css'
import Btnbdcfunc from '../../components/btnbdc/Btnbdc';
import Btndmofunc from '../../components/btndmo/Btndmo';
import Contenantbdcfunc from '../../components/Contenantbdc/Contenantbdc';
import QuestCompo from '../../components/Contenantdmo/Contenantdmo';
import { useState } from 'react';

export default function Tabspage (){
    const [changeTabs, setToggleTabs] = useState(1);

    const changeTab = (index) => { 
            setToggleTabs(index);
    }
    return(
        <div className='tabspgclass'>
            <div className={changeTabs === 1 ? 'btnTabs active-btnTabs':'btnTabs'} onClick={()=> changeTab(1)}><Btnbdcfunc /> </div>
            <div className={changeTabs === 2 ? 'btnTabs active-btnTabs':'btnTabs'} onClick={()=> changeTab(2)}><Btndmofunc /></div>
            <div className={changeTabs === 1 ? 'windowsTbs active-windowsTbs':'windowsTbs'}><Contenantbdcfunc /></div>
            <div className={changeTabs === 2 ? 'windowsTbs active-windowsTbs':'windowsTbs'}><QuestCompo /></div>
        </div>
        
    );
}