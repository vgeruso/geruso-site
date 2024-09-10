import React, {FC, useEffect, useState} from "react";
import { BarFin, BarIni, BarMid, ContainerBar, ContainerSkillBar, LevelDescription, TitleTool } from "./styles";

type PorpSkill = {
  level: string;
  tool: string;
}

type PropBar = {
  colorIni: string;
  colorMid: string;
  colorFin: string;
}

const Bar: FC<PropBar> = ({colorIni, colorMid, colorFin}: PropBar) => {
  return (
    <ContainerBar>
      <BarIni style={{backgroundColor: colorIni}}>
        <p></p>
      </BarIni>
      <BarMid style={{backgroundColor: colorMid}}>
        <p></p>
      </BarMid>
      <BarFin style={{backgroundColor: colorFin}}>
        <p></p>
      </BarFin>
    </ContainerBar>
  );
}

const SkillBar: FC<PorpSkill> = ({level, tool}: PorpSkill) => {
  const [colorIni, setColorIni] = useState("#e4e4e4");
  const [colorMid, setColorMid] = useState("#e4e4e4");
  const [colorFin, setColorFin] = useState("#e4e4e4");

  useEffect(() => {
    switch(level) {
      case 'advanced':
        setColorIni("#ACD2AB");
        setColorMid("#69BF67");
        setColorFin("#3EA13C");
        break;
      case 'middle':
        setColorIni("#DFC49B");
        setColorMid("#E5A037");
        break;
      case 'basic':
        setColorIni("#D84747");
        break;
    }
  }, [colorIni, colorMid, colorFin]);

  return (
    <ContainerSkillBar>
      <TitleTool>{tool}</TitleTool>
      <Bar colorIni={colorIni} colorMid={colorMid} colorFin={colorFin}/>
      <LevelDescription>{level}</LevelDescription>
    </ContainerSkillBar>
  );
}

export default SkillBar; 