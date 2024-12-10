import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/*
 Classe que representa um Livro.
 */
export class Livro {
    private idLivro: number = 0;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private statusLivroEmprestado: string;
  
    constructor(titulo: string, autor: string, editora: string, anoPublicacao: string, isbn: string, quantTotal: number, quantDisponivel: number, valorAquisicao: number, statusLivroEmprestado: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.anoPublicacao = anoPublicacao;
      this.isbn = isbn;
      this.quantTotal = quantTotal;
      this.quantDisponivel = quantDisponivel;
      this.valorAquisicao = valorAquisicao;
      this.statusLivroEmprestado = statusLivroEmprestado;
    }
  
    public getIdLivro(): number {
      return this.idLivro;
    }
  
    public setIdLivro(idLivro: number): void {
      this.idLivro = idLivro;
    }
  
    public getTitulo(): string {
      return this.titulo;
    }
  
    public setTitulo(titulo: string): void {
      this.titulo = titulo;
    }
  
    public getAutor(): string {
      return this.autor;
    }
  
    public setAutor(autor: string): void {
      this.autor = autor;
    }
  
    public getEditora(): string {
      return this.editora;
    }
  
    public setEditora(editora: string): void {
      this.editora = editora;
    }
  
    public getAnoPublicacao(): string {
      return this.anoPublicacao;
    }
  
    public setAnoPublicacao(anoPublicacao: string): void {
      this.anoPublicacao = anoPublicacao;
    }
  
    public getIsbn(): string {
      return this.isbn;
    }
  
    public setIsbn(isbn: string): void {
      this.isbn = isbn;
    }
  
    public getQuantTotal(): number {
      return this.quantTotal;
    }
  
    public setQuantTotal(quantTotal: number): void {
      this.quantTotal = quantTotal;
    }
  
    public getQuantDisponivel(): number {
      return this.quantDisponivel;
    }
  
    public setQuantDisponivel(quantDisponivel: number): void {
      this.quantDisponivel = quantDisponivel;
    }
  
    public getValorAquisicao(): number {
      return this.valorAquisicao;
    }
  
    public setValorAquisicao(valorAquisicao: number): void {
      this.valorAquisicao = valorAquisicao;
    }
  
    public getStatusLivroEmprestado(): string {
      return this.statusLivroEmprestado;
    }
  
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
      this.statusLivroEmprestado = statusLivroEmprestado;
    }

  /**
     * Busca e retorna uma lista de Livros do banco de dados.
     * @returns Um array de objetos do tipo `Livro` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "Livro".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Livro`.
     * - Cada Livro é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */

  static async listagemLivro(): Promise<Array<Livro> | null> {
    // objeto para armazenar a lista de Livros
    const listaDeLivro: Array<Livro> = [];

    try {
        // query de consulta ao banco de dados
        const querySelectLivro = `SELECT * FROM livro;`;

        // fazendo a consulta e guardando a resposta
        const respostaBD = await database.query(querySelectLivro);

        // usando a resposta para instanciar um objeto do tipo Livro
        respostaBD.rows.forEach((linha) => {
            // instancia (cria) objeto Livro
            const novoLivro = new Livro(linha.titulo,
                                        linha.autor,
                                        linha.editora,
                                        linha.ano_publicacao,
                                        linha.isbn,
                                        linha.quant_total,
                                        linha.quant_disponivel,
                                        linha.valor_aquisicao,
                                        linha.status_livro_emprestado);

            // atribui o ID objeto
            novoLivro.setIdLivro(linha.id_livro);

            // adiciona o objeto na lista
            listaDeLivro.push(novoLivro);
        });

        // retorna a lista de Livros
        return listaDeLivro;
    } catch (error) {
        console.log('Erro ao buscar lista de Livro');
        return null;
    }

/**
 * Realiza o cadastro de um Livro no banco de dados.
 * @param {Livro} Livro 
 * @returns {Promise<boolean>} 
 * 
 * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
 *                   no console junto com os detalhes do erro.
 */
  }

static async cadastroLivro(Livro: Livro): Promise<any> {
    try {
        // query para fazer insert de um Livro no banco de dados
        const queryInsertLivro = `INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
                                    VALUES
                                    ( 
                                    '${Livro.getTitulo()}', 
                                    '${Livro.getAutor()}', 
                                    '${Livro.getEditora()}',
                                    '${Livro.getAnoPublicacao()}',
                                    '${Livro.getIsbn()}',
                                     ${Livro.getQuantTotal()},
                                     ${Livro.getQuantDisponivel()},
                                     ${Livro.getValorAquisicao()},
                                    '${Livro.getStatusLivroEmprestado()}'
                                    )
                                    RETURNING id_livro;`;

      console.log(queryInsertLivro);

        // executa a query no banco e armazena a resposta
        const respostaBD = await database.query(queryInsertLivro);

        // verifica se a quantidade de linhas modificadas é diferente de 0
        if (respostaBD.rowCount != 0) {
            console.log(`Livro cadastrado com sucesso! ID do Livro: ${respostaBD.rows[0].id_livro}`);
            // true significa que o cadastro foi feito
            return true;
        }
        // false significa que o cadastro NÃO foi feito.
        return false;

        // tratando o erro
    } catch (error) {
        // imprime outra mensagem junto com o erro
        console.log('Erro ao cadastrar o Livro. Verifique os logs para mais detalhes.');
        // imprime o erro no console
        console.log(error);
        // retorno um valor falso
        return false;
    }
}

static async removerLivro(idLivro : number): Promise<boolean>{
  try{
      const queryDeleteLivro  = `DELETE FROM livro  WHERE id_livro  = ${idLivro }`;

      const respostaBD = await database.query(queryDeleteLivro );

      if(respostaBD.rowCount != 0) {
          console.log('Livro  removido com sucesso!');
          return true;
       } return false;

  } catch (error) {
      console.log('Erro ao remover livro . Verifique os logs para mais detalhes.');
      console.log(error);
      return false;
  }
}

static async atualizarLivro(livro: Livro): Promise<boolean> {
  try {
      // Criação da query SQL para atualizar os campos do livro na tabela 'livro'
      const queryUpdateLivro = `UPDATE livro SET
                             titulo = '${livro.getTitulo()}', 
                             autor = '${livro.getAutor()}',
                             editora = '${livro.getEditora()}',
                             ano_publicacao = '${livro.getAnoPublicacao()}',
                             isbn = '${livro.getIsbn()}',    
                             quant_total = ${livro.getQuantTotal()},
                             quant_disponivel = ${livro.getQuantDisponivel()},
                             valor_aquisicao = ${livro.getValorAquisicao()},
                             status_livro_emprestado = '${livro.getStatusLivroEmprestado()}'
                             WHERE id_livro = ${livro.getIdLivro()};`;

      // Executa a consulta SQL no banco de dados e armazena o resultado
      const respostaBD = await database.query(queryUpdateLivro);

      // Verifica se algum registro foi alterado pela operação de atualização
      if (respostaBD.rowCount != 0) {
          // Loga uma mensagem indicando que o livro foi atualizado com sucesso
          console.log(`Livro atualizado com sucesso! ID: ${livro.getIdLivro()}`);
          return true; // Retorna verdadeiro para indicar sucesso
      }
      // Retorna falso se nenhum registro foi alterado (ID inexistente ou dados idênticos)
      return false;
  } catch (error) {
      // Loga uma mensagem genérica de erro em caso de falha na execução
      console.log(`Erro ao atualizar livro. Verifique os logs para mais detalhes.`);
      // Exibe detalhes do erro para depuração
      console.log(error);
      // Retorna falso em caso de falha na execução
      return false; 
  }
}
}
