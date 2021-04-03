const pages = {
    indexGET: (req, res, next) => {
        return res.render('index', {
             title: 'all write'
        })
    },
    indexPOST: () =>{
        return
    },
    registerGET: (req, res) =>{
        return res.render('register', {
            title:"all write"
        })
    },
    registerPOST:(req, res) => {
        return 
    },
    profileGET: (req, res) => {
        return res.render("profile", {
            title: "all write"
        })
    },
    profilePOST: (req, res) =>{
        return 
    }
}

module.exports = pages