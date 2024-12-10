import { Request, Response, Router } from "express";
import { AlunoController} from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";
import { LivroController } from "./controller/LivroController";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA AlunoS
*/ 
// Rota para listar os Alunos
router.get("/lista/Alunos", AlunoController.todos);
// Rota para cadastrar um novo Aluno
router.post("/novo/Aluno", AlunoController.novo);
// Rota para remover aluno
router.delete("/alunos/:idAluno", AlunoController.remover);
// Rota para atualizar a tabela
router.put("/atualizar/aluno/:idAluno", AlunoController.atualizar);


/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os Livro
router.get("/lista/livros", LivroController.todos);
// Rota para cadastrar um novo pedido
router.post("/novo/livro", LivroController.novo);
// Rota para remover livro
router.delete("/livros/:idLivro", LivroController.remover);
// Rota para atualizar a tabela
router.put("/atualizar/livro/:idLivro", LivroController.atualizar);


/* 
* ROTAS PARA EMPRESTIMOS
*/ 
// Rota para listar os EmprestimoControllers
router.get("/lista/emprestimo", EmprestimoController.todos);
// Rota para atualizar a tabela
router.put("/atualizar/emprestimo/:idEmprestimo", EmprestimoController.atualizar);

// exportando as rotas
export { router };