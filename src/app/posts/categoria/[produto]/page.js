export default async function produtos({params}){
    const {produto} = await params
    console.log(params)
    return(
        <p>produto: {produto.replace(/-/g, " ")}</p>
    );
}