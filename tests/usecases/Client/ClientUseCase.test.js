const { clientUseCase } = require("../../../src/useCases/Client");

describe("creating a new client", () => {
    const clientBadRequest = {
        name: '',
        cpf: '',
        birthDate: '',
        active: true
    }

    test('should return error parameters bad request', async () => {
        await expect(clientUseCase.create(clientBadRequest)).rejects.toThrowError('Parameters bad request.');
    })
})