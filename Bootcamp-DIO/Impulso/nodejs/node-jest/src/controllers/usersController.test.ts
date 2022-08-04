import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
import { usersController } from "./usersController";
describe("Users controller", () => {
  const usersControllers = new usersController();
  const mockRequest = {} as Request;
  const mockResponse = makeMockResponse();
  it("Deve listar os nosso usuários", () => {
    usersControllers.listarUsuario(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toHaveLength(0);
  });

  it("Deve criar um novo usuario", () => {
    mockRequest.body = {
      name: "Novo Usuário",
    };
    usersControllers.criarUsuario(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: `Usuário Novo Usuário criado`,
    });
  });

  it("Não deve criar um usuário com o nome em branco", () => {
    mockRequest.body = {
      name: "",
    };
    usersControllers.criarUsuario(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(403);
    expect(mockResponse.state.json).toMatchObject({
      message: "Não é possível criar usuário sem nome",
    });
  });
});
