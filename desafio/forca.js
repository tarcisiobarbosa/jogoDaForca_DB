class Forca {
  constructor(palavra) {
    this.letrasChutadas = [];
    this.palavra = palavra;
    this.vidas = 6;
    this.arrPalavra = [];
    for (let i = 0; i < this.palavra.length; i++) {
      this.arrPalavra.push("_");
    }
    this.palavraCompleta = false;
  }
  chutar(letra) {
    if (letra.length == 1) {
      if (!this.letrasChutadas.includes(letra)) {
        this.letrasChutadas.push(letra);

        if (this.palavra.includes(letra)) {
          this.palavraCompleta = true;
          for (let i = 0; i < this.palavra.length; i++) {
            if (this.palavra[i] == letra) {
              this.arrPalavra[i] = letra;
            } else if (
              this.arrPalavra[i] == "_" ||
              this.arrPalavra[i] == null
            ) {
              this.palavraCompleta = false;
              this.arrPalavra[i] = "_";
            }
          }
        } else {
          this.vidas--;
        }
      }
    }
  }

  buscarEstado() {
    if (this.vidas < 1) {
      return "perdeu";
    }
    if (this.palavraCompleta) {
      return "ganhou";
    }
    return "aguardando chute";
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas,
      palavra: this.arrPalavra,
    };
  }
}

module.exports = Forca;
