//import Atoms
import { CenterContainer } from "../Atoms/CenterContainer";
import { NumberInput } from "../Molecules/NumberInput";

function NormalPage() {

    return (
        <CenterContainer width="100%" height="100%">
            <NumberInput textinfo="100" />
        </CenterContainer>
    )
}

export { NormalPage };