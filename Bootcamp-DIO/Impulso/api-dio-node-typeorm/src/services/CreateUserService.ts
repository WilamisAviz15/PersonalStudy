interface IUsuario {
  nome: string;
  email: string;
}

class CreateUserService {
  execute({ nome, email }: IUsuario) {}
}

export { CreateUserService };
