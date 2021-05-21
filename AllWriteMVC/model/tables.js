import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

class Tables {

    init(conexao) {
        this.conexao = conexao

        this.cadastroTabela()
    }

    cadastroTabela() {
        const sql = "CREATE TABLE IF NOT EXISTS Register(id INT AUTO_INCREMENT, usuario varchar(50) NOT NULL UNIQUE,  email varchar(50) UNIQUE, name varchar(50) NOT NULL, senha varchar(200) NOT NULL, estado varchar(20) NOT NULL, cidade varchar(50) NOT NULL, myFile varchar(500),dataCriacao datetime NOT NULL, acesso datetime NOT NULL, PRIMARY KEY(id))"

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