/*
 Classe que representa um Aluno.
 */
export class Aluno {
    private idAluno: number = 0;
    private ra: string = '';
    private nome: string;
    private sobrenome: string;
    private dataNascimento: Date;
    private endereco: string;
    private email: string;
    private celular: string;
  
    constructor( nome: string, sobrenome: string, dataNascimento: Date, endereco: string, email: string, celular: string) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dataNascimento = dataNascimento;
      this.endereco = endereco;
      this.email = email;
      this.celular = celular;
    }
    
    public getIdAluno(): number {
      return this.idAluno;
    }
  
    public setIdAluno(idAluno: number): void {
      this.idAluno = idAluno;
    }

    public getRa(): string {
      return this.ra;
    }
  
    public setRa(ra: string): void {
      this.ra = ra;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
  
    public getSobrenome(): string {
      return this.sobrenome;
    }
  
    public setSobrenome(sobrenome: string): void {
      this.sobrenome = sobrenome;
    }
  
    public getDataNascimento(): Date {
      return this.dataNascimento;
    }
  
    public setDataNascimento(dataNascimento: Date): void {
      this.dataNascimento = dataNascimento;
    }
  
    public getEndereco(): string {
      return this.endereco;
    }
  
    public setEndereco(endereco: string): void {
      this.endereco = endereco;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public setEmail(email: string): void {
      this.email = email;
    }
  
    public getCelular(): string {
      return this.celular;
    }
  
    public setCelular(celular: string): void {
      this.celular = celular;
    }
  }