export class Tables {

    init(conexao) {
        this.conexao = conexao

        this.cadastroTabela()
    }

    cadastroTabela() {
        const sql = "CREATE TABLE IF NOT EXISTS Register (id int NOT NULL AUTO_INCREMENT, usuario varchar(50) NOT NULL,  email varchar(50), nome varchar(50) NOT NULL, senha varchar(30) NOT NULL, estado varchar(20) NOT NULL, cidade varchar(50) NOT NULL,PRIMARY KEY(id))"

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