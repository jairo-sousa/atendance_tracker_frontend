import { BrandButton } from "@/fragments/form/BrandButton";
import { BrandGratientPanel } from "@/fragments/layout/BrandGratientPanel";
import { BrandPageTitle } from "@/fragments/text/BrandPageTitle";
import { DialogSubtitle } from "@/fragments/text/DialogSubtitle";
import { FieldsetContainer } from "@/fragments/form/FieldsetContainer";
import { FieldsetRoot } from "@/fragments/form/FieldsetRoot";
import { LabeledField } from "@/fragments/form/LabeledField";
import { LoginInput } from "@/fragments/form/LoginInput";
import { PrimaryDialogPanel } from "@/fragments/layout/PrimaryDialogPanel";
import { Toaster } from "@/components/ui/toaster";
import { ApiService } from "@/services/ApiService";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { RedirectMessage } from "@/components/daySummary/RedirectMessage";

export function SignUp() {
    const apiService = new ApiService();
    const navigate = useNavigate();

    const [hasSessionToken, setHasSessionToken] = useState<boolean>();

    const [blockSignUp, setBlockSignUp] = useState(false);
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        setBlockSignUp(true);

        const result = await apiService.signUp(login, password, () => {
            setBlockSignUp(false);
        });

        if (result != null) {
            navigate("/login");
        }
    };

    useEffect(() => {
        setHasSessionToken(
            Cookies.get("sessionToken")?.startsWith("Bearer ") == true
        );
    }, []);

    if (hasSessionToken == true) return <Navigate to="/home" />;

    return (
        <BrandGratientPanel>
            <Toaster />
            <PrimaryDialogPanel>
                <BrandPageTitle>PRIMEIRO ACESSO</BrandPageTitle>

                <DialogSubtitle>
                    Defina as credenciais do usuário administrador
                </DialogSubtitle>

                <FieldsetRoot onEnter={handleSignUp}>
                    <FieldsetContainer>
                        <LabeledField label="LOGIN">
                            <LoginInput
                                placeholder="Defina seu login"
                                value={login}
                                onChange={handleLoginChange}
                            />
                        </LabeledField>
                        <LabeledField label="SENHA">
                            <LoginInput
                                placeholder="Defina sua senha"
                                value={password}
                                customType="password"
                                onChange={handlePasswordChange}
                            />
                        </LabeledField>
                    </FieldsetContainer>

                    <BrandButton disabled={blockSignUp} onClick={handleSignUp}>
                        CRIAR USUÁRIO
                    </BrandButton>
                </FieldsetRoot>

                <RedirectMessage message="Voltar para login?" path="/login" />
            </PrimaryDialogPanel>
        </BrandGratientPanel>
    );
}
