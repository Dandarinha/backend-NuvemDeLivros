import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/*
Classe que representa um Empréstimo.
 */
export class Emprestimo {
  private idEmprestimo: number = 0;
  private idAluno: number;
  private idLivro: number;
  private dataEmprestimo: Date;
  private dataDevolucao: Date;
  private statusEmprestimo: string;

  constructor(idAluno: number, idLivro: number, dataEmprestimo: Date, dataDevolucao: Date, statusEmprestimo: string) {
    this.idAluno = idAluno;
    this.idLivro = idLivro;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucao = dataDevolucao;
    this.statusEmprestimo = statusEmprestimo;
  }

  // Getters e Setters
  public getIdEmprestimo(): number {
    return this.idEmprestimo;
  }

  public setIdEmprestimo(idEmprestimo: number): void {
    this.idEmprestimo = idEmprestimo;
  }

  public getIdAluno(): number {
    return this.idAluno;
  }

  public setIdAluno(idAluno: number): void {
    this.idAluno = idAluno;
  }

  public getIdLivro(): number {
    return this.idLivro;
  }

  public setIdLivro(idLivro: number): void {
    this.idLivro = idLivro;
  }

  public getDataEmprestimo(): Date {
    return this.dataEmprestimo;
  }

  public setDataEmprestimo(dataEmprestimo: Date): void {
    this.dataEmprestimo = dataEmprestimo;
  }

  public getDataDevolucao(): Date {
    return this.dataDevolucao;
  }

  public setDataDevolucao(dataDevolucao: Date): void {
    this.dataDevolucao = dataDevolucao;
  }

  public getStatusEmprestimo(): string {
    return this.statusEmprestimo;
  }

  public setStatusEmprestimo(statusEmprestimo: string): void {
    this.statusEmprestimo = statusEmprestimo;
  }

  static async listagemEmprestimo(): Promise<Array<Emprestimo> | null> {
    // objeto para armazenar a lista de emprestimos
    const listaDeEmprestimo: Array<Emprestimo> = [];

    try {
        // query de consulta ao banco de dados
        const querySelectEmprestimo = `SELECT * FROM emprestimo;`;

        // fazendo a consulta e guardando a resposta
        const respostaBD = await database.query(querySelectEmprestimo);

        console.log(respostaBD.rows);

        // usando a resposta para instanciar um objeto do tipo Emprestimo
        respostaBD.rows.forEach((linha) => {
            // instancia (cria) objeto Emprestimo
            const novoEmprestimo = new Emprestimo(linha.id_aluno,
                                        linha.id_livro,
                                        linha.data_emprestimo,
                                        linha.data_devolucao,
                                        linha.status_emprestimo
                                      );

            // atribui o ID objeto
            novoEmprestimo.setIdEmprestimo(linha.id_Emprestimo);

            // adiciona o objeto na lista
            listaDeEmprestimo.push(novoEmprestimo);
        });

        // retorna a lista de Emprestimos
        return listaDeEmprestimo;
    } catch (error) {
        console.log('Erro ao buscar lista de Emprestimo');
        return null;
    }
  }

  static async atualizarEmprestimo(emprestimo: Emprestimo): Promise<boolean> {
    try {
        // Criação da query SQL para atualizar os campos do emprestimo na tabela 'emprestimo'
        const queryUpdateEmprestimo = `UPDATE emprestimo SET
                               data_emprestimo = '${emprestimo.getDataEmprestimo()}', 
                               data_devolucao = '${emprestimo.getDataDevolucao()}',
                               status_emprestimo = '${emprestimo.getStatusEmprestimo()}';`;

        // Executa a consulta SQL no banco de dados e armazena o resultado
        const respostaBD = await database.query(queryUpdateEmprestimo);

        // Verifica se algum registro foi alterado pela operação de atualização
        if (respostaBD.rowCount != 0) {
            // Loga uma mensagem indicando que o emprestimo foi atualizado com sucesso
            console.log(`Emprestimo atualizado com sucesso! ID: ${emprestimo.getIdEmprestimo()}`);
            return true; // Retorna verdadeiro para indicar sucesso
        }
        // Retorna falso se nenhum registro foi alterado (ID inexistente ou dados idênticos)
        return false;
    } catch (error) {
        // Loga uma mensagem genérica de erro em caso de falha na execução
        console.log(`Erro ao atualizar emprestimo. Verifique os logs para mais detalhes.`);
        // Exibe detalhes do erro para depuração
        console.log(error);
        // Retorna falso em caso de falha na execução
        return false; 
    }
}
}

