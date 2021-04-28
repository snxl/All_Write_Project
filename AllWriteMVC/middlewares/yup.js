import * as  yup  from  'yup'


function validator(req, res, next) {
    const schema = yup.object().shape({
        usuario: yup.string().required("inserir usuario"),
        name: yup.string().required("inserir nome"),
        email: yup.string().required("inesir e-mail"),
        senha: yup.string().required("inserir senha... min 8 caracteres").min(8),
        repetir_senha: yup.string().oneOf([yup.ref('senha'), null], 'senhas incorretas'),
        estado: yup.string().required(),
        cidade: yup.string().required()
    });

    if (!schema.isValidSync(req.body)) {
        return res.status(400).json(!schema.validateSync(req.body));
    }
    
    next(); 
}

export default validator