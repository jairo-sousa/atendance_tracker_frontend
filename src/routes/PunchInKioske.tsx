import { BandGratientPanel } from "@/components/structure/BandGratientPanel";
import { PrimaryDialogPanel } from "@/components/structure/PrimaryDialogPanel";
import { BandPageTitle } from "@/components/structure/BandPageTitle";
import { DialogSubtitle } from "@/components/structure/DialogSubtitle";

import { FieldsetRoot } from "@/components/structure/FieldsetRoot";
import { FieldsetContainer } from "@/components/structure/FieldsetContainer";
import { LabeledField } from "@/components/structure/LabeledField";
import { LoginInput } from "@/components/structure/LoginInput";
import { BandButton } from "@/components/structure/BandButton";

import { useState } from "react";
import { WorkdayService } from "@/services/WorkdayService";

export function PunchInKioske() {
    const workdayService = new WorkdayService();
    const [cpf, setCpf] = useState("");

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };

    const handleRegister = async () => {
        workdayService.workdayRegister(cpf, () => {
            setCpf("");
        });
    };

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
                            <LoginInput
                                placeholder="Digite seu cpf"
                                value={cpf}
                                onChange={handleCpfChange}
                            />
                        </LabeledField>
                    </FieldsetContainer>

                    <BandButton onClick={handleRegister}>REGISTRAR</BandButton>
                </FieldsetRoot>
            </PrimaryDialogPanel>
        </BandGratientPanel>
    );
}
