console.log("Olá! Selecione uma opção abaixo, que deseja saber informações do que significa na metodologia ágil: ");

console.log("1 - Planning");
console.log("2 - Sprint");
console.log("3 - Retro");
console.log("X - Encerrar");

let opt = '2'

if (opt == 1)
{
    console.log("\nA Planning ou Reunião de Planejamento de Sprint é uma cerimônia simples dentro do processo ágil Scrum. ");
    console.log("Normalmente, na Planning estão presentes o Product Owner, o Scrum Master e todo o Scrum Team, ");
    console.log("bem como qualquer pessoa interessada que esteja representando a gerência ou o cliente.")
}
else if (opt == 2)
{
    console.log("\nUma sprint é uma reunião de pessoas envolvidas num projeto para promover um desenvolvimento mais ");
    console.log("focalizado do projeto. O termo está fortemente relacionado ao framework de desenvolvimento ágil Scrum. ")
    console.log("Sprints normalmente tem duração de uma a quatro semanas.")
}
else if (opt == 3)
{
    console.log("\nÉ o evento que fecha a Sprint que é um ciclo de desenvolvimento de produto no Scrum. ")
    console.log("Esse é o momento no qual o time se dedica à inspecionar o seu trabalho, avaliando como ")
    console.log("foi a última Sprint e cria um plano de ação para a próxima.")
}
else if (opt == 'X')
{
    console.log("\nEncerrando programa...");
}