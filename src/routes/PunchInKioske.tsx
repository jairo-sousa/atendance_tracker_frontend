import { BandGratientPanel } from "@/components/structure/BandGratientPanel";
import { PrimaryDialogPanel } from "@/components/structure/PrimaryDialogPanel";
import { BandPageTitle } from "@/components/structure/BandPageTitle";
import { DialogSubtitle } from "@/components/structure/DialogSubtitle";

import { FieldsetRoot } from "@/components/structure/FieldsetRoot";
import { FieldsetContainer } from "@/components/structure/FieldsetContainer";
import { LabeledField } from "@/components/structure/LabeledField";
import { LoginInput } from "@/components/structure/LoginInput";
import { BandButton } from "@/components/structure/BandButton";

export function PunchInKioske() {
    return (
        <BandGratientPanel>
            <PrimaryDialogPanel>
                <BandPageTitle>REGISTRO DE PONTO</BandPageTitle>

                <DialogSubtitle>
                    Digite seu cpf para efetuar um registro
                </DialogSubtitle>

                <FieldsetRoot>
                    <FieldsetContainer>
                        <LabeledField label="CPF">
                            <LoginInput placeholder="Digite seu cpf" />
                        </LabeledField>
                    </FieldsetContainer>

                    <BandButton>REGISTRAR</BandButton>
                </FieldsetRoot>
            </PrimaryDialogPanel>
        </BandGratientPanel>
    );
}
