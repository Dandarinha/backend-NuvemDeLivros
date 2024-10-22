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
  }