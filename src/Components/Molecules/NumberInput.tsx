//import Atoms
import { CenterContainer } from "../Atoms/CenterContainer";
import { Text } from "../Atoms/Text";
import { Input } from "../Atoms/Input";
import { Button } from "../Atoms/Button";
//import hooks
import { useRef, useState, useEffect, useMemo } from 'react'
import { useNavigate } from "react-router-dom";

interface NumberInputType {
    textinfo: string
}

function NumberInput({ textinfo }: NumberInputType) {
    const navigate = useNavigate();

    const standardNumber: number = parseInt(textinfo);

    const randNum = useMemo(() => Math.floor(Math.random() * standardNumber) + 1, []);

    //const [ randNum, setRandNum ] = useState<number>(Math.floor(Math.random() * standardNumber) + 1);
    const [ inputNumber, setInputNumber ] = useState<number>(0);
    const [ textInfo, setTextInfo ] = useState<string>("1~" + textinfo + " 사이의 숫자를 입력하세요");

    useEffect(() => {
        if(inputNumber >= 1 && inputNumber <= standardNumber) {
            //똑같은 텍스트라면 set을 하지 않는게 효율적인가?
            if(inputNumber > randNum) {
                setTextInfo("높습니다!");
            }
            else if(inputNumber < randNum) {
                setTextInfo("낮습니다!");
            }
            else if(inputNumber === randNum) {
                setTextInfo("정답입니다!");
            }
        }
        else {
            setTextInfo("1~" + textinfo + " 사이의 숫자를 입력하세요");
        }
    }, [inputNumber]);

    return (
        <CenterContainer>
            <Text text={textinfo === "10" ? "Easy Mode(1~10 사이 랜덤값 맞추기)" : textinfo === "100" ? "Normal Mode(1~100 사이 랜덤값 맞추기)" : "Hard Mode(1~1000 사이 랜덤값 맞추기)"} />
            <Text text={textInfo} /> 
            <Input type="number" placeholder="숫자를 입력하세요" padding="5px" width="100%" changeSetNumber={setInputNumber} />
            <Button onClick={() => navigate("/")} size="small" text="이전 페이지" margin="10px" width="100%"/>
        </CenterContainer>
    )
}

export { NumberInput };