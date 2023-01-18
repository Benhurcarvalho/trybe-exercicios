function InputAge({ state }) {
    const { age, setAge } = state;

    return(
        <label
            htmlFor="age"
        >
            Idade:
            <input
                id="age"
                type="number"
                value={ age }
                onChange={({ target }) => setAge(target.value)}
                placeholder="digite sua idade"
            >
            </input>
        </label>
    )
}

export default InputAge;