import { forwardRef } from "react";
import { InputPrimaryPanel } from "../detailingTable/InputPrimaryPanel";
import { Option } from "../detailingTable/Option";

export interface OptionInterface {
    id: string;
    name: string;
}
interface SelectPrimaryInterface {
    onChange: Function;
    items: OptionInterface[] | undefined;
}

export const SelectPrimary = forwardRef(
    ({ onChange, items }: SelectPrimaryInterface, ref) => {
        return (
            <InputPrimaryPanel onChange={onChange} as={"select"} ref={ref}>
                <Option value={null}>Selecione o funcionário</Option>
                {items &&
                    items.map(({ id, name }) => (
                        <Option key={id} value={id}>
                            {name}
                        </Option>
                    ))}
            </InputPrimaryPanel>
        );
    }
);
