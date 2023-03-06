import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";

import Formulario from "./Formulario";

describe("Comportamento do formulario.tsx", () => {
  test("Quando o input está vazio, novos participantes nao podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botao
    const botao = screen.getByRole("button");

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botao esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("add participante caso exista nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botao
    const botao = screen.getByRole("button");

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botao de submeter
    fireEvent.click(botao);
    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    //garantir que o input nao tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("a msg de erro deve sumir apos os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole("alert");

    expect(mensagemDeErro).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
