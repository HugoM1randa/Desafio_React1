const Challenge = () => {
    const numb1 = 5;
    const numb2 = 10;
    const soma = () => {
        console.log(`A soma dos numeros é: ${numb1 + numb2}`);
        alert(`A soma dos numeros é: ${numb1 + numb2} (A soma tambem foi exibida no console)`);
    };
    return (
        <div>
        <p>Primeiro numero é: {numb1}</p>
        <p>segundo numero é: {numb2}</p>
        <button onClick={soma}>Clique para saber a soma dos numeros</button>
        </div>
    );
};

export default Challenge;