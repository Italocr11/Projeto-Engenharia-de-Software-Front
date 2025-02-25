import { solicitar } from "./solicitar";
import { jest } from "@jest/globals";

describe("Função solicitar", () => {
  let mockRouter;
  let mockSetMsg;
  let eventMock;

  beforeEach(() => {
    mockRouter = { push: jest.fn() }; // Mock do Next.js useRouter
    mockSetMsg = jest.fn(); // Mock do setState para mensagens
    eventMock = { preventDefault: jest.fn() }; // Mock do evento do formulário
  });

  test("Erro se uma data não for selecionada", () => {
    solicitar(
      eventMock,
      "",
      "10:00",
      false,
      false,
      false,
      40,
      mockRouter,
      mockSetMsg
    );
    expect(mockSetMsg).toHaveBeenCalledWith("Selecione uma data!");
    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  test("Erro se não selecionar um horário", () => {
    solicitar(
      eventMock,
      "25-02-2025",
      "",
      false,
      false,
      false,
      40,
      mockRouter,
      mockSetMsg
    );
    expect(mockSetMsg).toHaveBeenCalledWith("Selecione um horário!");
    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  test("Calcular os itens e redirecionar para a próxima página", () => {
    solicitar(
      eventMock,
      "25-02-2025",
      "10:00",
      true,
      true,
      true,
      40,
      mockRouter,
      mockSetMsg
    );

    expect(mockRouter.push).toHaveBeenCalledWith(
      "/solicitarReserva?valor=55&horario=10:00&data=25-02-2025&bola=true&rede=true&coletes=true"
    );
    expect(mockSetMsg).not.toHaveBeenCalled(); // Nenhuma mensagem de erro deve ser exibida
  });

  test("Calcular os itens sem adicionar e redirecionar para a próxima página", () => {
    solicitar(
      eventMock,
      "25-02-2025",
      "10:00",
      false,
      false,
      false,
      40,
      mockRouter,
      mockSetMsg
    );

    expect(mockRouter.push).toHaveBeenCalledWith(
      "/solicitarReserva?valor=40&horario=10:00&data=25-02-2025&bola=false&rede=false&coletes=false"
    );
    expect(mockSetMsg).not.toHaveBeenCalled();
  });
});
