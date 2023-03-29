//import Atoms
import { Button } from "../Atoms/Button";
import { CenterContainer } from "../Atoms/CenterContainer";
//import hooks
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    return (
        <CenterContainer width="100%" height="100%">
            <Button onClick={() => navigate("/easy")} size="big" text="Easy Mode" margin="10px"/>
            <Button onClick={() => navigate("/normal")} size="small" text="Normal Mode" margin="10px" />
            <Button onClick={() => navigate("/hard")} text="Hard Mode" margin="10px" />
        </CenterContainer>
    )
}

export { MainPage };