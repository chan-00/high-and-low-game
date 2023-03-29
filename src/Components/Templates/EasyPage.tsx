//import Atoms
import { CenterContainer } from "../Atoms/CenterContainer";
import { NumberInput } from "../Molecules/NumberInput";

function EasyPage() {

    return (
        <CenterContainer width="100%" height="100%">
            <NumberInput textinfo="10" />
        </CenterContainer>
    )
}

export { EasyPage };