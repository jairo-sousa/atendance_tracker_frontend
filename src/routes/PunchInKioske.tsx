import { BrandGratientPanel } from "@/fragments/layout/BrandGratientPanel";
import { PrimaryDialogPanel } from "@/fragments/layout/PrimaryDialogPanel";
import { BrandPageTitle } from "@/fragments/text/BrandPageTitle";
import { DialogSubtitle } from "@/fragments/text/DialogSubtitle";

import { FieldsetRoot } from "@/fragments/form/FieldsetRoot";
import { FieldsetContainer } from "@/fragments/form/FieldsetContainer";
import { LabeledField } from "@/fragments/form/LabeledField";
import { LoginInput } from "@/fragments/form/LoginInput";
import { BrandButton } from "@/fragments/form/BrandButton";

import { useState } from "react";
import { ApiService } from "@/services/ApiService";
import { WorkdaySummary } from "@/components/WorkdaySummary";
import { Toaster } from "@/components/ui/toaster";

export function PunchInKioske() {
    const apiService = new ApiService();

    const [cpf, setCpf] = useState("");
    const [blockRegister, setBlockRegister] = useState(false);
    const [refreshWorkdaySummary, setRefreshWorkdaySummary] = useState(0);

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };

    const handleRegister = async () => {
        const cpfToSend = cpf;
        setBlockRegister(true);
        setCpf("");

        apiService.checkpoint(cpfToSend, (sucess: boolean) => {
            setBlockRegister(false);
            if (sucess)
                setRefreshWorkdaySummary((prev) => (prev === 0 ? 1 : 0));
        });
    };

    return (
        <BrandGratientPanel>
            <Toaster />
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

            <WorkdaySummary key={refreshWorkdaySummary} />
        </BrandGratientPanel>
    );
}
