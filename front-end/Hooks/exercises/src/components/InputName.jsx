function InputName({ state }) {
    const { name, setName } = state;

    return(
        <label
            htmlFor="name"
        >Nome:
            <input
                id="name"
                type="text"
                value={ name }
                onChange={({ target }) => setName(target.value)}
                placeholder="digite seu nome"
            >
            </input>
        </label>
    )
}

export default InputName;
