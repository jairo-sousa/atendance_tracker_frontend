import { BrandButton } from "@/fragments/form/BrandButton";
import { FieldsetContainer } from "@/fragments/form/FieldsetContainer";
import { FieldsetRoot } from "@/fragments/form/FieldsetRoot";
import { LabeledField } from "@/fragments/form/LabeledField";
import { LoginInput } from "@/fragments/form/LoginInput";
import { PrimaryDialogPanel } from "@/fragments/layout/PrimaryDialogPanel";
import { BrandPageTitle } from "@/fragments/text/BrandPageTitle";
import { DialogSubtitle } from "@/fragments/text/DialogSubtitle";
import { ApiService } from "@/services/ApiService";
import { useState } from "react";

interface CheckInDialogInterface {
    onRegister: Function;
}

export function CheckInDialog({ onRegister }: CheckInDialogInterface) {
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

        apiService.checkpoint(cpfToSend, (sucess: boolean) => {
            setBlockRegister(false);
            if (sucess) onRegister();
        });
    };

    return (
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

                <BrandButton disabled={blockRegister} onClick={handleRegister}>
                    REGISTRAR
                </BrandButton>
            </FieldsetRoot>
        </PrimaryDialogPanel>
    );
}
