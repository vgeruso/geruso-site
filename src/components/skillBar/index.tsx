import React, {FC, useEffect, useState} from "react";

type PorpSkill = {
  level: string;
  tool: string;
}

type PropBar = {
  colorIni: string;
  colorMid: string;
  colorFin: string;
}

// TODO Aplicar os estilos [Stiled-component]
const Bar: FC<PropBar> = ({colorIni, colorMid, colorFin}: PropBar) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{backgroundColor: colorIni, width: '33%', borderEndStartRadius: '10em', borderStartStartRadius: '10em'}}>
        <p></p>
      </div>
      <div style={{backgroundColor: colorMid, width: '33%'}}>
        <p></p>
      </div>
      <div style={{backgroundColor: colorFin, width: '33%', borderEndEndRadius: '10em', borderStartEndRadius: '10em'}}>
        <p></p>
      </div>
    </div>
  );
}

const SkillBar: FC<PorpSkill> = ({level, tool}: PorpSkill) => {
  const [colorIni, setColorIni] = useState('#e4e4e4');
  const [colorMid, setColorMid] = useState('#e4e4e4');
  const [colorFin, setColorFin] = useState('#e4e4e4');

  useEffect(() => {
    switch(level) {
      case 'adivanced':
        setColorIni('#ACD2AB');
        setColorMid('#69BF67');
        setColorFin('#3EA13C');
        break;
      case 'middle':
        setColorIni('#DFC49B');
        setColorMid('#E5A037');
        break;
      case 'basic':
        setColorIni('#D84747');
        break;
    }
  }, [colorIni, colorMid, colorFin]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '18%', marginRight: '10px', marginBottom: '5px'}}>
      <p style={{color: '#cecece', fontWeight: 'bold'}}>{tool}</p>
      <Bar colorIni={colorIni} colorMid={colorMid} colorFin={colorFin}/>
      <span style={{color: "#cecece", fontSize: '.8em', marginTop: '5px'}}>{level}</span>
    </div>
  );
}

export default SkillBar; 