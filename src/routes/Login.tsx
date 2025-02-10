import { CheckInRedirectMessage } from "@/components/CheckInRedirectMessage";
import { BrandButton } from "@/components/structure/BrandButton";
import { BrandGratientPanel } from "@/components/structure/BrandGratientPanel";
import { BrandPageTitle } from "@/fragments/text/BrandPageTitle";
import { DialogSubtitle } from "@/fragments/text/DialogSubtitle";
import { FieldsetContainer } from "@/components/structure/FieldsetContainer";
import { FieldsetRoot } from "@/components/structure/FieldsetRoot";
import { LabeledField } from "@/components/structure/LabeledField";
import { LoginInput } from "@/components/structure/LoginInput";
import { PrimaryDialogPanel } from "@/components/structure/PrimaryDialogPanel";
import { Toaster } from "@/components/ui/toaster";
import { ApiService } from "@/services/ApiService";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export function Login() {
    const apiService = new ApiService();

    const [hasSessionToken, setHasSessionToken] = useState<boolean>();

    const [blockLogin, setBlockLogin] = useState(false);
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        setBlockLogin(true);

        const result = await apiService.login(login, password, () => {
            setBlockLogin(false);
        });

        if (result?.data.session_token != null) {
            Cookies.set("sessionToken", result.data.session_token);
        }
    };

    useEffect(() => {
        setHasSessionToken(
            Cookies.get("sessionToken")?.startsWith("Bearer ") == true
        );
    }, [blockLogin]);

    if (hasSessionToken == true) return <Navigate to="/" />;

    return (
        <BrandGratientPanel>
            <Toaster />
            <PrimaryDialogPanel>
                <BrandPageTitle>LOGIN</BrandPageTitle>

                <DialogSubtitle>
                    Forneça os dados para efetuar login
                </DialogSubtitle>

                <FieldsetRoot>
                    <FieldsetContainer>
                        <LabeledField label="LOGIN">
                            <LoginInput
                                placeholder="Digite seu login"
                                value={login}
                                onChange={handleLoginChange}
                            />
                        </LabeledField>
                        <LabeledField label="SENHA">
                            <LoginInput
                                placeholder="Digite sua senha"
                                value={password}
                                customType="password"
                                onChange={handlePasswordChange}
                            />
                        </LabeledField>
                    </FieldsetContainer>

                    <BrandButton disabled={blockLogin} onClick={handleLogin}>
                        FAZER LOGIN
                    </BrandButton>
                </FieldsetRoot>

                <CheckInRedirectMessage />
            </PrimaryDialogPanel>
        </BrandGratientPanel>
    );
}
