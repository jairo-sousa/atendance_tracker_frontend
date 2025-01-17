import "./PunchInKioske.css";

export function PunchInKioske() {
    return (
        <div className="LoginContainer">
            <h1 className="Logo">REGISTRO DE PONTO</h1>
            <p>Digite seu cpf para efetuar um registro</p>

            <fieldset>
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" type="text" name="cpf" />
            </fieldset>
            <button>REGISTRAR</button>
        </div>
    );
}
