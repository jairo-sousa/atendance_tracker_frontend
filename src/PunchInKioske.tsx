import { Flex, Input, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

import { Button, Fieldset } from "@chakra-ui/react";

export function PunchInKioske() {
    return (
        <Flex
            // BRAND GRADIENT PANEL
            w={"100%"}
            h={"100%"}
            justify={"center"}
            align={"center"}
            background={
                "linear-gradient(71.17deg, #feaf00 19.35%, #f8d442 90.12%)"
            }
        >
            <Flex
                // PRIMARY MODAL PANEL
                direction={"column"}
                justify={"center"}
                align={"center"}
                w={"47.5rem"}
                h={"fit-content"}
                gap={"3rem"}
                p={"4.4rem 3rem"}
                borderRadius={"2rem"}
                backgroundColor={"var(--background-primary)"}
                boxShadow={"2px 5px 10px rgba(0, 0, 0, 0.1)"}
            >
                <Text
                    // LOGO
                    as={"h1"}
                    pl={"1.2rem"}
                    borderLeft={"0.6rem solid #f8d442"}
                >
                    REGISTRO DE PONTO
                </Text>

                <Text
                    // SUBTITLE
                    color={"var(--content-secondary)"}
                    fontSize={"1.4rem"}
                    fontWeight={400}
                >
                    Digite seu cpf para efetuar um registro
                </Text>

                <Fieldset.Root w={"100%"} h={"fit-content"} gap={"3rem"}>
                    <Fieldset.Content>
                        <Field
                            label="CPF"
                            fontSize={"1.4rem"}
                            fontWeight={400}
                            color={"var(--content-primary)"}
                            gap={"1rem"}
                        >
                            <Input
                                borderRadius={"0.4rem"}
                                p={"2rem"}
                                fontSize={"1.4rem"}
                                fontWeight={400}
                                outlineWidth={0}
                                border={"1px solid var(--border-secondary)"}
                                color={"var(--content-secondary)"}
                                placeholder="Digite seu cpf"
                                _placeholder={{
                                    color: "#CDCDCD",
                                }}
                            />
                        </Field>
                    </Fieldset.Content>

                    <Button
                        // FORM BUTTON
                        type="submit"
                        borderRadius={"0.4rem"}
                        p={"2rem"}
                        m={0}
                        fontSize={"1.4rem"}
                        fontWeight={400}
                        backgroundColor={"var(--content-brand)"}
                    >
                        REGISTRAR
                    </Button>
                </Fieldset.Root>
            </Flex>
        </Flex>
    );
}
