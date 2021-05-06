class Tables {

    init(conexao) {
        this.conexao = conexao

        this.cadastroTabela()
    }

    cadastroTabela() {
        const sql = "CREATE TABLE IF NOT EXISTS livro(id INT AUTO_INCREMENT, register_id INT REFERENCES Register(id), PRIMARY KEY(id))"

        this.conexao.query(sql, err => {
            if (err) {
                console.log(err)
            } else {
                console.log("Tabela criada com sucesso")
            }
        })
    }
}

export default new Tables