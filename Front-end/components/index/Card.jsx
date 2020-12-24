
const Card = () =>{

    const [student,setStudent] =  React.useState([])
    const [render,setRender] = React.useState(false)
    const [msg, setMsg] = React.useState(false);

    React.useEffect(
        async function getApi(){
            
                const response = await fetch("http://projetos/USEPHPAQUI/Monitorias/React/React-php/Back-end/")
                const dados = await response.json()
            setStudent(dados)
        }, [render] )

    
    function registerStudent(event){
        event.preventDefault();

        let formData = new FormData(event.target);

        const url = "http://projetos/USEPHPAQUI/Monitorias/React/React-php/Back-end/register-student.php";

        fetch(url,{
            method:"POST",
            body:formData
        }).then((response)=> response.json()).then((dados)=> {setRender(!render); setMsg(dados);
        setTimeout(() => {setMsg(false)}, 3000)}
        )
            
        }

return(
        <div className="container py-5">
            <div className="card w-75 mx-auto border-0">
                <form onSubmit={registerStudent}>
                    <input className="form-control mt-2"type="text" name="name"  placeholder="Seu Nome"/>
                    <input className="form-control mt-2"type="text" name="telphone" placeholder="Seu Telefone"/>
                    <button className="btn btn-warning w-100 mt-2" type="submit">Cadastrar Estudante</button>
                </form>
            </div>

            {msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                Cadastro Realizado com Sucesso!
            </div>}
            

           {student.map((element) => {
           return(
                <div key={element.id} className="card w-75 mx-auto mt-4">
                    <div className="card-header">
                        {element.name}   
                    </div>
                    <div className="card-body">
                        {element.telphone}
                    </div>
                </div>
        
           )
           }
           )
           }
        
        </div>
        );
    }