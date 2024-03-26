import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {
    const{ email, password} = JSON.parse(config.data)
    
    if(email !== 'luizcorsini@luizcorsini.com.br' || password !== 'admin'){
        return[400,{message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user ={
        id:1,
        name: 'Luiz Corsini',
        username: 'luizcorsini',
        email: 'luizcorsini@luizcorsini.com.br'
    }
    return [200, {user}]

});