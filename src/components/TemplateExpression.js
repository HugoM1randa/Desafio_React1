const TemplateExpression = () => {
    const nome = "HugoTemplateExpression";
    const data = { 
        age: 37, 
        job: "Programador",
    };
    return(
        <div>
            <h1>Olá {nome}, seja bem vindo</h1>
            <p>Você atua como: {data.job}</p>
            <p>Sua idade é de: {data.age}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpression;