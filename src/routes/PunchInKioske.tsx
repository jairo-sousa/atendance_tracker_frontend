import { BrandGratientPanel } from "@/components/structure/BrandGratientPanel";
import { PrimaryDialogPanel } from "@/components/structure/PrimaryDialogPanel";
import { BrandPageTitle } from "@/components/structure/BrandPageTitle";
import { DialogSubtitle } from "@/components/structure/DialogSubtitle";

import { FieldsetRoot } from "@/components/structure/FieldsetRoot";
import { FieldsetContainer } from "@/components/structure/FieldsetContainer";
import { LabeledField } from "@/components/structure/LabeledField";
import { LoginInput } from "@/components/structure/LoginInput";
import { BrandButton } from "@/components/structure/BrandButton";

import { useState } from "react";
import { ApiService } from "@/services/ApiService";
import { WorkdaySummary } from "@/components/WorkdaySummary";

export function PunchInKioske() {
    const apiService = new ApiService();

    const [cpf, setCpf] = useState("");
    const [blockRegister, setBlockRegister] = useState(false);

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };

    const handleRegister = async () => {
        const cpfToSend = cpf;
        setBlockRegister(true);
        setCpf("");
        apiService.checkpoint(cpfToSend, () => {
            setBlockRegister(false);
        });
    };

    return (
        <BrandGratientPanel>
            <PrimaryDialogPanel>
                <BrandPageTitle>REGISTRO DE PONTO</BrandPageTitle>

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

                    <BrandButton
                        disabled={blockRegister}
                        onClick={handleRegister}
                    >
                        REGISTRAR
                    </BrandButton>
                </FieldsetRoot>
            </PrimaryDialogPanel>

            <WorkdaySummary />
        </BrandGratientPanel>
    );
}
