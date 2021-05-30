import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

class Tables {

    init(conexao) {
        this.conexao = conexao

        this.cadastroTabela()
    }

    cadastroTabela() {
        const sql = "CREATE TABLE IF NOT EXISTS Register(id INT AUTO_INCREMENT, user varchar(50) NOT NULL UNIQUE,  name varchar(50) NOT NULL, email varchar(90) NOT NULL UNIQUE, password varchar(200) NOT NULL, imageRoute varchar(500), credential INT NOT NULL , createDate DATETIME NOT NULL, lastAcess DATETIME NOT NULL, PRIMARY KEY(id))"

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