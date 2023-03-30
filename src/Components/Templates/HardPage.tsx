//import Atoms
import { CenterContainer } from "../Atoms/CenterContainer";
import { NumberInput } from "../Molecules/NumberInput";

function HardPage() {

    return (
        <CenterContainer width="100%" height="100%">
            <NumberInput textinfo="1000" />
        </CenterContainer>
    )
}

export { HardPage };