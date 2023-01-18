function InputCity({ state }) {
    const { city, setCity } = state;

    return(
        <label
            htmlFor="city"
        >
            Cidade:
            <input
                id="city"
                type="text"
                value={ city }
                onChange={({ target }) => setCity(target.value)}
                placeholder="digite sua cidade"
            >
            </input>
        </label>
    )
}

export default InputCity;