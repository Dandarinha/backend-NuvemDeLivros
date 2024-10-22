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
  }